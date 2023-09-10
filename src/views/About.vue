<template lang="pug">
  #about.page
    ul.slider-nav
      li(v-for="(screen, screenKey) in screens" :key="screenKey"
        :class="{'_active':(currentScreen === screenKey)}" @click="sliderNavigate(screenKey)")
    // There placed helped svg.
    svg(style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false")
      linearGradient(v-for="(gradient, gradientKey) in gradients"
        :id="'svgGradient-'+gradientKey"
        :x1="gradient.x1 || 0" :y1="gradient.y1 || 0"
        :x2="gradient.x2 || 0" :y2="gradient.y2 || 0")
        stop(v-for="(stop, index) in gradient.stops" :key="index"
          :offset="stop.offset || 0" :stop-color="stop.color || '#000'")
    .screens
      .screens__item(v-for="(screen, screenKey) in screens" :key="screenKey" :data-key="screenKey"
        :class="[{'_active':(currentScreen === screenKey)}, 'animation-'+screen.animation]"
        :id="'screen-'+screenKey")
        .circleslide(v-if="screen.type === 'slide_circle'"
          :id="'sliderItem-' + screenKey")
          svg(width="100%" height="100%")
            clipPath(:id="'clipArc-' + screenKey")
              path
            g.slideGroup(width="100%" height="100%")
              rect(width="100%" height="100%" :fill="screen.fill" )
              a(v-if="screen.img"  :href="screen.img.href || ''")
                image(
                  :xlink:href="screen.img.href"
                  preserveAspectRatio="xMaxYMax meet"
                  :height="screen.img.h || 100"
                  :width="screen.img.w || 100"
                  :x="screen.img.x || 0"
                  :y="screen.img.y || 0")
              circle(v-if="screen.circle"
                :cy="screen.circle.cy || '50%'" :cx="screen.circle.cx || '50%'"
                :r="screen.circle.r || '20%'"
                :fill="screen.circle.fill || 'none'"
                :stroke-width="screen.circle.stroke.width || 0"
                :stroke-opacity="screen.circle.stroke.opacity || 1"
                :stroke="screen.circle.stroke.color || '#fff'")
        component(v-else-if="screen.type === 'content'" :is="screen.component")
      component.screen-text(v-for="(text, textKey) in texts" :key="'text-' + textKey"
        :is="text.component"
        :class="[{'_active':(currentScreen === textKey)}]"
        :id="'screenText-'+textKey")
</template>

<script>
import WheelIndicator from 'wheel-indicator';
import _ from 'lodash';
import CircleLoader from '@/utils/CircleLoader.js';
import Project1Title from '@/components/About/Project1.vue';
import Project2Title from '@/components/About/Project2.vue';
import Project3Title from '@/components/About/Project3.vue';

export default {
  name: 'About',
  data() {
    return {
      isAnimationNow: false,
      wheelIndicator: null,
      startTouchEventY: 0,
      animationNextScreen: null,
      currentScreen: 'project1',
      screens: {
        project1: {
          type: 'slide_circle',
          animation: 'circle',
          fill: 'url(#svgGradient-base)',
          circle: {
            stroke: {
              width: '1',
              opacity: '0.5',
              stroke: '#9ca4ab',
            },
          },
        },
        project2: {
          type: 'slide_circle',
          animation: 'circle',
          fill: '#c72825',
          circle: {
            stroke: {
              width: '1',
              opacity: '0.5',
              stroke: '#fff',
            },
          },
        },
        project3: {
          type: 'slide_circle',
          animation: 'circle',
          fill: 'url(#svgGradient-second)',
          circle: {
            stroke: {
              width: '1',
              opacity: '0.5',
              stroke: '#9ca4ab',
            },
          },
        },
      },
      gradients: {
        base: {
          x2: 1,
          y2: 1,
          stops: [
            {
              offset: '50%',
              color: '#12172f',
            },
            {
              offset: '90%',
              color: '#a15961',
            },
          ],
        },
        second: {
          x2: 1,
          y2: 1,
          stops: [
            {
              offset: '55%',
              color: '#323a45',
            },
            {
              offset: '90%',
              color: '#c72825',
            },
          ],
        },
      },
      texts: {
        project1: {
          component: Project1Title,
        },
        project2: {
          component: Project2Title,
        },
        project3: {
          component: Project3Title,
        },
      },
    };
  },
  created() {
    //
  },
  mounted() {
    this.wheelIndicator = new WheelIndicator({
      elem: document.body,
      callback: (e) => {
        if (!this.isAnimationNow) {
          if (e.direction === 'down') {
            this.startAnimationScreen();
          } else {
            this.startAnimationScreen(true);
          }
        }
      },
      preventMouse: false,
    });
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchstart', this.onTouchStart);
  },
  beforeDestroy() {
    if (this.wheelIndicator) {
      this.wheelIndicator.destroy();
    }
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchstart', this.onTouchStart);
  },
  watch: {},
  computed: {
    currentScreenValue() {
      return this.screens[this.currentScreen];
    },
    prevScreen() {
      const keys = Object.keys(this.screens);
      const i = keys.indexOf(this.currentScreen);
      const prev = i !== -1 && keys[i - 1];
      if (!_.isNil(prev)) {
        return prev;
      }

      return null;
    },
    nextScreen() {
      const keys = Object.keys(this.screens);
      const i = keys.indexOf(this.currentScreen);
      const next = i !== -1 && keys[i + 1];
      if (!_.isNil(next)) {
        return next;
      }
      return null;
    },
  },
  methods: {
    onTouchMove(e) {
      if (!this.isAnimationNow) {
        const delta = e.touches[0].pageY - this.startTouchEventY;
        if (delta < 0) {
          this.startAnimationScreen();
        } else {
          this.startAnimationScreen(true);
        }
      }
    },
    onTouchStart(e) {
      this.startTouchEventY = e.touches[0].pageY;
    },
    toggleAnimationFlag(isTrue = null) {
      if (!_.isBoolean(isTrue)) {
        this.isAnimationNow = !this.isAnimationNow;
      } else {
        this.isAnimationNow = isTrue;
      }
    },
    startAnimationScreen(toTop = false, nextScreen = null) {
      this.toggleAnimationFlag(true);
      if (nextScreen == null) {
        if (toTop) {
          this.animationNextScreen = this.prevScreen;
        } else {
          this.animationNextScreen = this.nextScreen;
        }
      } else {
        this.animationNextScreen = nextScreen;
      }
      if (this.animationNextScreen === null) {
        this.finishAnimationScreen();
        return;
      }

      const animationType = ((toTop) ? 'top' : 'bottom')
        + _.upperFirst(this.currentScreenValue.animation)
        + _.upperFirst(this.screens[this.animationNextScreen].animation);

      this.animate(animationType);
    },
    finishAnimationScreen() {
      if (this.animationNextScreen !== null) {
        this.currentScreen = this.animationNextScreen;
        this.animationNextScreen = null;
      }
      setTimeout(() => {
        this.toggleAnimationFlag(false);
      }, 100);
    },
    sliderNavigate(screenKey) {
      if (this.currentScreen === screenKey || this.isAnimationNow) {
        return;
      }

      let toTop = false;
      Object.keys(this.screens).some((el) => {
        if (el === this.currentScreen) {
          toTop = false;
          return true;
        }
        if (el === screenKey) {
          toTop = true;
          return true;
        }
      });

      this.startAnimationScreen(toTop, screenKey);
    },
    animate(animationType) {
      switch (animationType) {
        case 'topScrollCircle':
          this.animationTopScrollCircle();
          break;
        case 'bottomCircleScroll':
          this.animationBottomCircleScroll();
          break;
        case 'topCircleCircle':
        case 'bottomCircleCircle':
          this.animationCircleCircle();
          break;
        default:
          this.finishAnimationScreen();
      }
    },
    animationTopScrollCircle() {
      const currentElement = document.getElementById(`screen-${this.currentScreen}`);
      const nextElement = document.getElementById(`screen-${this.animationNextScreen}`);

      currentElement.classList.add('_on-animation', 'a-scroll-top', '_current');
      nextElement.classList.add('_on-animation', 'a-scroll-top', '_next');

      setTimeout(() => {
        document.body.classList.add('page-animation');
      }, 50);

      const screenAnimationFinish = () => {
        this.finishAnimationScreen();
        currentElement.classList.remove('_on-animation', 'a-scroll-top', '_current');
        nextElement.classList.remove('_on-animation', 'a-scroll-top', '_next');
        document.body.classList.remove('page-animation');
      };

      setTimeout(() => {
        if (!_.isNil(this.texts[this.animationNextScreen])) {
          this.textShowIn(document.getElementById(`screenText-${this.animationNextScreen}`), screenAnimationFinish, 0);
        } else {
          screenAnimationFinish();
        }
      }, 1500);
    },
    animationBottomCircleScroll() {
      const screenAnimation = () => {
        const currentElement = document.getElementById(`screen-${this.currentScreen}`);
        const nextElement = document.getElementById(`screen-${this.animationNextScreen}`);

        currentElement.classList.add('_on-animation', 'a-scroll-bottom', '_current');
        nextElement.classList.add('_on-animation', 'a-scroll-bottom', '_next');

        setTimeout(() => {
          document.body.classList.add('page-animation');
        }, 50);

        setTimeout(() => {
          this.finishAnimationScreen();
          currentElement.classList.remove('_on-animation', 'a-scroll-bottom', '_current');
          nextElement.classList.remove('_on-animation', 'a-scroll-bottom', '_next');
          document.body.classList.remove('page-animation');
        }, 1500);
      };

      if (!_.isNil(this.texts[this.currentScreen])) {
        this.textShowOut(document.getElementById(`screenText-${this.currentScreen}`), screenAnimation, 1600);
      } else {
        screenAnimation();
      }
    },
    animationCircleCircle() {
      const currentElement = document.getElementById(`screen-${this.currentScreen}`);
      const nextElement = document.getElementById(`screen-${this.animationNextScreen}`);

      const circleLoader = new CircleLoader();
      circleLoader.init(nextElement, () => {
        const screenAnimationFinish = () => {
          const oldKey = this.animationNextScreen;
          this.finishAnimationScreen();
          currentElement.classList.remove('_on-animation', 'a-circle-round', '_current');
          nextElement.classList.remove('_on-animation', 'a-circle-round', '_next');
          document.querySelector(`#sliderItem-${oldKey} g.slideGroup`).removeAttribute('clip-path');
        };

        const nextScreenAnimation = () => {
          if (!_.isNil(this.texts[this.animationNextScreen])) {
            this.textShowIn(document.getElementById(`screenText-${this.animationNextScreen}`), screenAnimationFinish, 0);
          } else {
            screenAnimationFinish();
          }
        };

        if (!_.isNil(this.texts[this.currentScreen])) {
          this.textShowOut(document.getElementById(`screenText-${this.currentScreen}`), nextScreenAnimation);
        } else {
          nextScreenAnimation();
        }
      }, () => {
        currentElement.classList.add('_on-animation', 'a-circle-round', '_current');
        nextElement.classList.add('_on-animation', 'a-circle-round', '_next');

        setTimeout(() => {
          circleLoader.startAnimation();
        }, 50);
      });
    },
    textShowIn(el, cb, delay = 1050) {
      if (_.isFunction(cb)) {
        el.classList.add('a-slideup-show');
        setTimeout(() => {
          el.classList.add('_on-animation');
        }, 50);
        setTimeout(() => {
          cb();
          setTimeout(() => {
            el.classList.remove('_on-animation', 'a-slideup-show');
          }, delay);
        }, 1050);
      }
    },
    textShowOut(el, cb, delay = 1050) {
      if (_.isFunction(cb)) {
        el.classList.add('a-slideup-hide');
        setTimeout(() => {
          el.classList.add('_on-animation');
        }, 50);

        setTimeout(() => {
          cb();
          setTimeout(() => {
            el.classList.remove('_on-animation', 'a-slideup-hide');
          }, delay);
        }, 1050);
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
}

ul.slider-nav {
  z-index: 100;
  position: fixed;
  top: 50%;
  right: 30px;
  list-style-type: none;
  transform: translateY(-50%);

  li {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.25);
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      border: 1px solid #fff;
      transition: background-color 0.5s;

    }

    &:hover {
      &:not(._active) {
        &:before {
          background-color: rgba(#fff, 0.5);
        }
      }
    }

    &._active {
      &:before {
        background-color: #fff;
      }
    }
  }
}

.screens {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;

  &__item {
    width: 100%;
    min-height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;

    &._active {
      z-index: 2;
    }

    &._on-animation {
      &.animation-scroll {
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

.circleslide {
  width: 100%;
  height: 100vh;
}

.a-scroll-top {
  &._current {
    z-index: 2;
    top: 0;
    bottom: auto;
  }

  &._next {
    z-index: 2;
    top: auto;
    bottom: 100%;
  }

  .page-animation & {
    &._current {
      top: 100%;
      bottom: auto;
      transition: top 1.5s;
    }

    &._next {
      top: auto;
      bottom: 0;
      transition: bottom 1.5s;
    }
  }
}

.a-scroll-bottom {
  &._current {
    z-index: 2;
    top: auto;
    bottom: 0;
  }

  &._next {
    z-index: 2;
    top: 100%;
    bottom: auto;
  }

  .page-animation & {
    &._current {
      top: auto;
      bottom: 100%;
      transition: bottom 1.5s;
    }

    &._next {
      top: 0;
      bottom: auto;
      transition: top 1.5s;
    }
  }
}

.a-circle-round {
  &._current {
    z-index: 2;
  }

  &._next {
    z-index: 3;
  }
}

.screen-text {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 10%;
  width: 70%;
  @media screen and (min-width: 768px){
    width: 50%;
  }
  @media screen and (min-width: 1024px){
    width: 40%;
  }
  height: 100vh;
  opacity: 0;

  &._active {
    z-index: 5;
    opacity: 1;
  }

  .slideup-animation {
    position: relative;
    overflow: hidden;

    & > div:first-child {
      position: relative;
      opacity: 0;
    }

    & > div:nth-child(2) {
      position: absolute;
      bottom: 0;
    }
  }

  &.a-slideup-show {
    z-index: 5;
    opacity: 1;

    .slideup-animation {
      & > div:nth-child(2) {
        top: 100%;
        bottom: auto;
      }
    }
  }

  &.a-slideup-hide {
    z-index: 5;
    opacity: 1;

    .slideup-animation {
      & > div:nth-child(2) {
        bottom: 0;
        top: auto;
      }
    }
  }

  &._on-animation {
    &.a-slideup-hide {
      .slideup-animation {
        & > div:nth-child(2) {
          bottom: 102%;
          transition: bottom 1s;
        }
      }
    }

    &.a-slideup-show {
      .slideup-animation {
        & > div:nth-child(2) {
          top: 0;
          transition: top 1s;
        }
      }
    }
  }
}


</style>
