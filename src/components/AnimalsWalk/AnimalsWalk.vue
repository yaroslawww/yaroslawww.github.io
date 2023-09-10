<template lang="pug">
  div.animals-wrap(:style="{left: left+'px'}")
    .piggy.piggy_walk(v-if="showPiggy")
    .chicken.chicken_walk(v-if="showChicken")
</template>

<script>
export default {
  name: 'AnimalsWalk',
  data() {
    return {};
  },
  computed: {
    showPiggy: () => !Math.round(Math.random()),
    showChicken: () => !Math.round(Math.random()),
    left() {
      const max = 4000;
      const min = 500;
      return (Math.floor(Math.random() * (max - min + 1) + min)) * -1;
    },
  },
};
</script>

<style lang="scss" scoped>
  @keyframes anim {
    from {
      background-position: 0 0
    }

    to {
      background-position: 100% 0
    }
  }

  @keyframes movelr {
    from {
      left: -2%
    }

    to {
      left: 101%
    }
  }

  .animals-wrap {
    position: fixed;
    z-index: 10000;
    user-select: none;
    bottom: 0;
    //left: 0;
    left: -100px;
    width: 6000px;
  }


  .piggy {
    position: absolute;
    bottom: 5%;
    width: 88px;
    height: 62px;
    background: url("../../assets/images/animals-walks/piggy-walk.png") no-repeat;

    &_walk {
      animation: anim 1s steps(23) infinite, movelr 290s linear 1
    }

  }

  .chicken {
    position: absolute;
    bottom: -14px;
    width: 148px;
    height: 110px;
    background: url("../../assets/images/animals-walks/chicken-walk.png") no-repeat;

    &_walk {
      animation: anim 1s steps(23) infinite, movelr 300s linear 1
    }

  }

</style>
