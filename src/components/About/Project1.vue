<template lang="pug">
  .post-preview._linked-more
    div
      .post-preview__title
        div.slideup-animation
          div WEB
          div WEB
        div.slideup-animation
          div Developer
          div Developer
      .post-preview__content
        div.slideup-animation
          div Creating backend and frontend for large web applications
          div Creating backend and frontend for large web applications
      div.slideup-animation
        div
          a.post-preview__more(href="https://github.com/yaroslawww" target="_blank") SEE GIT
        div
          a.post-preview__more(href="https://github.com/yaroslawww" target="_blank") SEE GIT
</template>

<script>
export default {
  name: 'Project1Title',
};
</script>

<style scoped lang="scss">
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
    @media screen and (min-width: 768px){
      font-size: 40px;
    }
    @media screen and (min-width: 1024px){
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
      border: 1px solid #ff2a37;
      transition: background-color 0.5s;

    }
  }
}
</style>
