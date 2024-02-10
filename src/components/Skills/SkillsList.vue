<template lang="pug">
  .skills
    .skills__content
      .skills__slide.skills__slide_left
        .skill-card
          skills-texts-listing(
            :title="title"
            :menu="menu"
          )
      .skills__slide.skills__slide_right
        .skill-card
          skills-texts-listing(
            :title="title"
            :menu="menu"
            type="right"
            class="bg_gradient-blue-rose with-circle"
          )
      .skills__images.skills__slide.skills__slide_full
        .hero-section.with-circle(v-for="(item, key) in menu" :class="'hero-section_' + key")
          img.image-hero(:src="`images/portfolio/${key}.png`")
        .skill-card
          skills-texts-listing(
            :title="title"
            :menu="menu"
            type="rollover"
            class="with-circle"
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
/* interfaces */
import MainSkill from '@/interfaces/skills/MainSkill';
import GenericObjectValue from '@/interfaces/general/GenericObjectValue';
/* components */
import SkillsTextsListing from '@/components/Skills/SkillsTextsListing.vue';

    @Component({
      components: {
        SkillsTextsListing,
      },
    })
export default class SkillsList extends Vue {
        @Prop() private title!: string;

        @Prop() private menu!: GenericObjectValue<MainSkill>;
}
</script>


<style scoped lang="scss">
  @import "../../assets/scss/mixins/mixins";
  @import "../../assets/scss/colors";

  $animation-speed: 1s;

  %screen-part {
    @include position(absolute, 50%, 100%, 0);
  }

  .skills {
    $block: &;
    position: relative;
    width: 100%;
    height: 100vh;

    &__content {
      @include position(absolute, 100%, 100%, 0, 0);
    }

    $element: #{$block}__slide;

    #{$element} {
      overflow: hidden;

      &#{$element}_left {
        @extend %screen-part;
        left: 0;
      }

      &#{$element}_right {
        @extend %screen-part;
        right: 0;
      }

      &#{$element}_full {
        @extend %screen-part;
        width: 100%;
        opacity: 0;
        z-index: -1;
        transition: z-index $animation-speed step-end, opacity $animation-speed;
      }
    }

    .rollover-on & {
      #{$element} {
        &#{$element}_full {
          background-color: $white;
          z-index: 2;
          opacity: 1;
          transition: z-index $animation-speed step-start, opacity $animation-speed;
        }
      }
    }
  }

  .skill-card {
    height: 100%;
  }

  .hero-section {
    @include position(relative, 100%, 100vh);
    transition: z-index 1s step-end, opacity 1s;

    $list: 'laravel' 'vuejs' 'rest' 'ansible' 'wp';

    @each $projectName in $list {
      &_#{$projectName} {
        @include position(absolute, null, null, 0, 0);
        transition: opacity $animation-speed*2;
        opacity: 0;
        z-index: 0;
        background: map-get($bg-colors, $projectName);

        .color-#{$projectName} & {
          z-index: 1;
          opacity: 1;
          transition: z-index $animation-speed step-end, opacity $animation-speed;
        }
      }
    }
  }

  .image-hero {
    transform: translate(0, -5%);
    @include position(absolute, 0, 0, 25vh, 50vw);
    min-width: 40vw;
    max-width: 45vw;
    min-height: 60vh;
    max-height: 70vh;
    object-fit: contain;

    @media screen and (max-width: 768px) and (orientation: portrait) {
      opacity: 0.2;
      min-width: 120vw;
      max-width: 120vw;
      min-height: 120vh;
      max-height: 120vh;
      @include position(absolute, 0, 0, -10vh, -10vw);
    }
  }

</style>
