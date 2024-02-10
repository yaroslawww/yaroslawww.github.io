<template lang="pug">
  .post-preview._linked
    div
      .post-preview__pre-title
        div.slideup-animation
          div Honor & Award
          div Honor & Award
      .post-preview__title
        div
          div.slideup-animation
            div Certificates
            div Certificates
          div.slideup-animation
            div of Completion
            div of Completion
        div.slideup-animation
          div
            a.post-preview__more(href="https://yaroslawww.github.io/certificates/" target="_blank") VIEW THE LIST
          div
            a.post-preview__more(href="https://yaroslawww.github.io/certificates/" target="_blank") VIEW THE LIST
</template>

<script>
export default {
  name: 'Project2Title',
};
</script>

<style scoped lang="scss">
.underlined {
  //  display: inline-block;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #fff;
  }
}

.post-preview {
  text-align: start;
  color: #fff;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  & > div {

  }

  .post-preview__pre-title {
    font-size: 14px;
  }

  .post-preview__title {
    font-size: 24px;
    transition: all 0.5s;
    margin: 16px 0;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 72px;
    }

    div {
      white-space: nowrap;
    }
  }

  .post-preview__content {
    font-size: 14px;
    margin-top: 24px;
    line-height: 2;
  }

  .post-preview__more {
    display: inline-block;
    font-size: 14px;
    margin-top: 20px;
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: calc(100% + 8px);
      transform: translate(0, -50%);
      width: 6px;
      height: 6px;
      border: 1px solid #c72825;
      transition: background-color 0.5s;

    }
  }
}
</style>
