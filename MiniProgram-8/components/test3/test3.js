// components/test3/test3.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        'rgb.r': this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        'rgb.g': this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        'rgb.b': this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5
      })
    },
    // 生成随机 RGB 颜色的方法。非事件处理函数建议以_开头
    _randomColor() {
      this.setData({
        rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },

  //监听
  observers: {
    // 监听 rgb 对象上 r, g, b 三个子属性的变化
    // 也可以使用通配符 ** 监听对象上所有属性的变化
    // 'rgb.r,rgb.g,rgb.b':function(r,g,b){
    'rgb.**': function (obj) {
      this.setData({
        // 为 data 中的 fullColor 重新赋值
        fullColor: `${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  // 旧的定义生命周期函数
  // created(){
  //   console.log('created');
  // },
  // attached(){
  //   console.log('attached');
  // },
  // 新的定义生命周期函数
  lifetimes: {
    created() {
      console.log('created~~~~~~');
    },
    attached() {
      console.log('attached~~~~~~');
    },
  },
  pageLifetimes: {
    show() {
      console.log('show');
      this._randomColor()
    },
    hide() {
      console.log('hide');
    },
    resize() {
      console.log('resize');
    }
  }
})