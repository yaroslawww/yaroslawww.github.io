export default class CircleLoader {
  constructor () {
    this.RAD = Math.PI / 180
    this.PI_2 = Math.PI / 2
    this._tmpR = 20
    this._maxTmpR = 600
    this.el = null

    this.clipPath = null
    this.slideGroup = null
    this.resetArc()
  }

  init (el, finishCB, initCB) {
    this.el = el
    this.finishCB = finishCB
    this.stopAnimation()
    let key = this.el.getAttribute('data-key')
    this.clipPath = this.el.querySelector('#clipArc-' + key + ' path')
    this.slideGroup = document.querySelector('#sliderItem-' + key + ' g.slideGroup')
    this.slideGroup.setAttribute('clip-path', 'url(#clipArc-' + this.el.getAttribute('data-key') + ')')
    this._tmpR = this.slideGroup.getElementsByTagName('circle')[0].getBBox().width / 2
    this.resetArc()
    this._maxTmpR = Math.sqrt(Math.pow((this.el.offsetWidth / 2), 2) + Math.pow((this.el.offsetHeight / 2), 2))
    this.updatePath()
    initCB()
    return this
  }

  resetArc () {
    if (this.el !== null) {
      this.arc = {
        start: 0,
        end: 0,
        cx: this.el.offsetWidth / 2,
        cy: this.el.offsetHeight / 2,
        r: this._tmpR
      }
    }
  }

  startAnimation () {
    this.updatePath()
    this.interval = setInterval(() => {
      this.arc.end += 1
      if (this.arc.end > 360) {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this._tmpR += 3
          this.updatePathCircle()
          if (this._tmpR > this._maxTmpR) {
            clearInterval(this.interval)
            this.finishCB()
          }
        }, 1)
      } else {
        this.updatePath()
      }
    }, 1)
  }

  stopAnimation () {
  }

  updatePath () {
    this.clipPath.setAttribute('d', this.getPath())
  }

  updatePathCircle () {
    this.clipPath.setAttribute('d', this.getPathCircle())
  }

  getPath () {
    let delta = this.arc.end - this.arc.start

    if (delta === 360) {
      return 'M ' + (this.arc.cx - this.arc.r) + ' ' + this.arc.cy + ' a ' + this.arc.r + ' ' + this.arc.r + ' 0 1 0 ' + this.arc.r * 2 + ' 0 a ' + this.arc.r + ' ' + this.arc.r + ' 0 1 0 ' + -this.arc.r * 2 + ' 0z'
    }

    let largeArc = delta > 180 ? 1 : 0

    let a1 = this.arc.start * this.RAD - this.PI_2
    let a2 = this.arc.end * this.RAD - this.PI_2

    var x1 = this.arc.cx + this.arc.r * Math.cos(a2)
    var y1 = this.arc.cy + this.arc.r * Math.sin(a2)

    var x2 = this.arc.cx + this.arc.r * Math.cos(a1)
    var y2 = this.arc.cy + this.arc.r * Math.sin(a1)

    return 'M ' + x1 + ' ' + y1 + ' A ' + this.arc.r + ' ' + this.arc.r + ' 0 ' + largeArc + ' 0 ' + x2 + ' ' + y2 + ' L ' + this.arc.cx + ' ' + this.arc.cy + 'z'
  }

  getPathCircle () {
    return 'M ' + (this.arc.cx - this._tmpR) + ' ' + this.arc.cy + ' a ' + this._tmpR + ' ' + this._tmpR + ' 0 1 0 ' + this._tmpR * 2 + ' 0 a ' + this._tmpR + ' ' + this._tmpR + ' 0 1 0 ' + -this._tmpR * 2 + ' 0z'
  }
}
