import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    // 数据源
    store,
    fields: {
      sum: 'sum',
      active: 'activeTabBarIndex'  // 改为 active，而不是 action
    },
    actions: {
      updateActiveTabBarIndex: 'updateActiveTabBarIndex'  // 使用正确的方法名映射
    },
  },

  observers: {
    'sum': function (val) {
      if (val < 0) {
        return
      }
      this.setData({
        'list[1].info': val
      })
    },
    'active': function(val) {
      // 可选：监听 active 变化，确保同步
      console.log('tabbar active 更新为:', val)
    }
  },

  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,  // 添加 active 字段，初始值设为 0
    "list": [{
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info: 2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateActiveTabBarIndex(event.detail)  // 调用 store 的方法
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
    
    // 页面显示时同步 active 状态
    attached() {
      // 初始化时从 store 获取当前 active 状态
      this.setData({
        active: store.activeTabBarIndex
      })
    }
  }
})