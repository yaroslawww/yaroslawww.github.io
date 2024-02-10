<template lang="pug">
  .skills-menu(:class="[computedClassMenu]")
    .skills-menu__content
      a.skills-menu__title(
        v-if="title"
        href='https://app.codesignal.com/coding-report/yaroslawww'
        target='_blank'
      ) {{title}}
      ul.skills-menu__list
        li(v-for="(item, key) in menu")
          a.rollover-link(
            :class="'target-color--' + key"
            @mouseenter="onMouseenter(key)"
            @mouseleave="onMouseleave(key)"
          ) {{item.title}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
/* interfaces */
import MainSkill from '@/interfaces/skills/MainSkill';
import GenericObjectValue from '@/interfaces/general/GenericObjectValue';

    @Component
export default class SkillsTextsListing extends Vue {
        @Prop() private title!: string;

        @Prop() private menu!: GenericObjectValue<MainSkill>;

        @Prop() private type!: string;

        get computedClassMenu() {
          if (this.type) {
            return `skills-menu_${this.type}`;
          }
          return '';
        }

        // eslint-disable-next-line class-methods-use-this
        onMouseenter(key: string) {
          document.body.classList.add(`color-${key}`, 'rollover-on');
        }

        // eslint-disable-next-line class-methods-use-this
        onMouseleave(key: string) {
          document.body.classList.remove(`color-${key}`, 'rollover-on');
        }
}
</script>


<style scoped lang="scss">
  @import "../../assets/scss/mixins/mixins";
  @import "../../assets/scss/functions/functions";
  @import "../../assets/scss/colors";
  @import "../../assets/scss/fonts";

  .skills-menu {
    $block: &;
    $typeRight: #{$block}_right;
    $typeRollover: #{$block}_rollover;

    @include position(absolute, 200%, 100%);
    @include flex(flex-end, center);

    @media screen and (max-width: 768px) and (orientation: portrait) {
      @include flex(center, center);
    }

    &#{$typeRight} {
      right: 0;
    }

    &#{$typeRollover} {
      width: 100%;
      z-index: 1;
    }

    &__content {
      @include flex(center, top, column);
      z-index: 1;
      @media screen and (max-width: 768px) and (orientation: portrait) {
        padding: 100px 50px;
      }
    }

    &__title {
      font-family: $font-roboto;
      @include text(remy(13));
      letter-spacing: remy(1.3);
      text-align: center;
      color: $blue;
      user-select: none;
      @media screen and (max-width: 768px) and (orientation: portrait) {
        display: none;
      }

      #{$typeRight} & {
        color: $white;
      }

      #{$typeRollover} & {
        color: $white;

        .trium & {
          color: $blue;
        }

      }
    }

    &__list {

      flex-grow: 1;
      margin: remy(1) 0 remy(40);
      list-style-type: none;

      li {
        text-align: center;
        display: block;
        width: 100%;

        a {
          font-family: $font-playfair-display;
          @include text(10vh, 14vh);
          text-align: center;
          white-space: nowrap;
          display: inline-block;
          color: $gray-dark;
          user-select: none;
          cursor: crosshair;
          @media screen and (max-width: 768px) and (orientation: landscape) {
            @include text(10vh, 11vh);
          }

          @media screen and (max-width: 768px) and (orientation: portrait) {
            @include text(50px, 56px);
          }
          @media screen and (max-width: 600px) and (orientation: portrait) {
            @include text(30px, 36px);
          }

          #{$typeRight} & {
            color: $white;
          }

          #{$typeRollover} & {
            color: $white;
            opacity: 0.3;
            transition: opacity 0.5s, color 0.5s;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }

    $list: 'laravel' 'vuejs' 'rest' 'ansible' 'wp';
    @each $projectName in $list {
      .color-#{$projectName} & {
        .target-color--#{$projectName} {
          opacity: 1;
        }
      }
    }
  }
</style>
