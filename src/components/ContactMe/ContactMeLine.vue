<template lang="pug">
  .contactme
    ul.contactme__items
      li
        a(href="mailto:yaroslav.georgitsa@gmail.com" target="_blank" title="Email")
          svg(xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24")
            path( d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z")
      li
        a(href="https://www.linkedin.com/in/yaroslawww/" target="_blank" title="Linkedin")
          svg(xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24")
            path( d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z")
      li
        a(href="https://t.me/yaroslav_georgitsa" target="_blank" title="Telegram")
          svg( viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;")
            path( d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z")
      li
        a(href="skype:yaroslawww?chat" target="_blank" title="Skype")
          svg(xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24")
            path( d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z")
      li
        span Contact me
</template>
<script>
export default {
  name: 'ContactMeLine',
};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/fonts";
  @import "../../assets/scss/colors";

  .contactme {
    position: fixed;
    bottom: 50px;
    left: 50px;
    z-index: 1000;
    @media screen and (max-width: 768px) {
      bottom: 30px;
      left: 30px;
    }

    &__items {
      li {
        list-style-type: none;
        margin-top: 8px;

        a {
          cursor: pointer;
          color: $blue;
          svg {
            width: 16px;

            transition: fill 0.5s;
            fill: $blue;
            .color-laravel & {
              fill: $white;
            }
            .color-vuejs & {
              fill: $white;
            }
            .color-ansible & {
              fill: $white;
            }
            .color-rest & {
              fill: $white;
            }
            .color-wp & {
              fill: $white;
            }
          }
        }

        &:last-child {
          font-family: $font-roboto;
          margin-top: 90px;
          height: 0;
          margin-bottom: 0;
          @media screen and (max-width: 768px) and (orientation: landscape) {
           display: none;
          }

          span {
            white-space: nowrap;
            display: inline-block;
            transform: rotate(-90deg);
            text-transform: uppercase;
            transform-origin: top left;
            font-size: 13px;

            color: $blue;
            .color-laravel & {
              color: $white;
            }
            .color-vuejs & {
              color: $white;
            }
            .color-ansible & {
              color: $white;
            }
            .color-rest & {
              color: $white;
            }
            .color-wp & {
              color: $white;
            }
          }
        }
      }
    }
  }
</style>
