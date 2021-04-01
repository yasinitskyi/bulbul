<template>
  <header class="header">
    <div class="header_wrapped">
      <div class="header__burger_wrapped" @click="toggleMenu">
        <img :src="$store.state.isActive ? closed : open" alt="Mobile menu icon" class="header__burger">
      </div>
      <div class="header__title_wrapped">
        <h1 class="header__title">白頭翁不吃小米</h1>
      </div>
      <div class="header__logo_wrapped">
        <div class="header__logo">
          <div class="header__logo-item"></div>
        </div>
      </div>
      <nav class="header__menu_wrapped" :style="{maxHeight: fullHeight}" ref="menuWrapper">
        <ul class="header__menu" ref="menu">
          <li class="header__menu-item">
            <router-link to="/about" class="header__menu-link">白頭翁的特性</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/story" class="header__menu-link">白頭翁的故事</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/pics" class="header__menu-link">白頭翁的美照</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/risk" class="header__menu-link">白頭翁的危機</router-link>
          </li>
          <li class="header__menu-item">
            <span>©</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import open from "../assets/menu.svg"
import closed from "../assets/cancel.svg"
export default {
  data() {
    return {
      open,
      closed
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu');
    }
  },
  computed: {
    fullHeight() {
      if(this.$store.state.isActive) {
        return this.$refs.menu.scrollHeight + 'px';
      }
    },
  }
}
</script>

<style>

</style>