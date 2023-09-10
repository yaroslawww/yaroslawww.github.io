<template lang="pug">
  div
    audio(
      ref="backgroundPlayer"
      style="display: none;"
      src='/sounds/background.mp3'
      autoplay
      loop
    )
    .play-button(
      @click.prevent="isPaused = !isPaused"
      :class="{play: isPaused}"
    )
      .play-button__content
        .play-button__icon
          .play-button__line
          .play-button__line
          .play-button__line
</template>

<script>
export default {
  name: 'BackgroundPlay',
  data() {
    return {
      isPaused: true,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.$refs.backgroundPlayer.paused) {
        this.isPaused = true;
      } else {
        this.isPaused = false;
      }
    }, 1000);
  },
  watch: {
    isPaused(newVal) {
      if (newVal) {
        this.$refs.backgroundPlayer.pause();
      } else {
        this.$refs.backgroundPlayer.play();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/colors";

  .play-button {
    $width: 50px;
    z-index: 1000;
    position: fixed;
    bottom: $width;
    right: $width;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      bottom: 30px;
      right: 30px;
    }

    &:before {
      content: '';
      background: #fff;
      height: 3*$width;
      left: -75px;
      opacity: .2;
      position: absolute;
      top: -1*$width;
      transform: rotate(35deg);
      width: $width;
      z-index: 1;
      transition: all 1s cubic-bezier(.19, 1, .22, 1);
      transition-delay: 0s;
    }

    &:hover {
      &:before {
        left: 125%;
        transition-delay: 0.2s;
      }
    }

    &__content {
      width: $width;
      height: $width;
      border-radius: 50%;
      border: 1px solid $white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border-color 1s;

      .color-laravel & {
        border-color: $blue;
      }
    }

    &__icon {
      position: relative;
      width: $width*0.6;
      height: $width*0.6;
    }

    &__line {
      background-color: $white;
      width: 100%;
      height: 1px;
      position: absolute;
      transform-origin: 0% 0%;
      transition:  background-color 1s, left 0.25s, top 0.25s, transform 0.25s;

      .color-laravel & {
        background-color: $blue;
      }

      &:nth-child(1) {
        top: 25%;
        left: 60%;
        transform: rotate(30deg) translate(-50%, -50%);

        .play & {
          top: 50% !important;
          left: 70% !important;
          transform: rotate(-90deg) translate(-50%, -50%) !important;
        }
      }

      &:nth-child(2) {
        top: 50%;
        left: 15%;

        transform: rotate(90deg) translate(-50%, -50%);

        .play & {
          top: 50% !important;
          left: 30% !important;
          transform: rotate(90deg) translate(-50%, -50%) !important;
          transition-delay: .5s;
        }

      }

      &:nth-child(3) {
        top: 75%;
        left: 60%;
        transform: rotate(-30deg) translate(-50%, -50%);
        .play & {
          top: 50% !important;
          left: 70% !important;

          transform: rotate(90deg) translate(-50%, -50%) !important;
          -webkit-transform: rotate(90deg) translate(-50%, -50%) !important;

          -webkit-transition-delay: .25s;
          transition-delay: .25s;
        }
      }
    }
  }

</style>
