<template lang="pug">
  .home
    skills-list(:title="title" :menu="menu")
    logo
    background-play
    contact-me-line
    animals-walk
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
/* api */
import skillsData from '@/api/skills.json';
/* interfaces */
import MainSkill from '@/interfaces/skills/MainSkill';
import SkillsData from '@/interfaces/skills/SkillsData';
import GenericObjectValue from '@/interfaces/general/GenericObjectValue';
/* components */
import SkillsList from '@/components/Skills/SkillsList.vue'; // @ is an alias to /src
import BackgroundPlay from '@/components/Audio/BackgroundPlay.vue'; // @ is an alias to /src
import ContactMeLine from '@/components/ContactMe/ContactMeLine.vue'; // @ is an alias to /src
import Logo from '@/components/Logo/Logo.vue'; // @ is an alias to /src
import AnimalsWalk from '@/components/AnimalsWalk/AnimalsWalk.vue'; // @ is an alias to /src

    @Component({
      components: {
        SkillsList,
        BackgroundPlay,
        ContactMeLine,
        Logo,
        AnimalsWalk,
      },
    })
export default class Home extends Vue {
        title = '';

        menu: GenericObjectValue<MainSkill> = {} as GenericObjectValue<MainSkill>;

        mounted() {
          this.title = skillsData.title;
          this.menu = (skillsData as SkillsData).main as GenericObjectValue<MainSkill>;
        }
}
</script>
