<template>
  <nav
    class="navbar navbar-expand-lg navbar-light justify-content-end col-md-10 col-sm-11"
    style="top: 23px !important"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav nav justify-content-end">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portafolio" class="nav-link">Portafolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About me</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/feedback" class="nav-link">FeedBack</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faInfo);

@Component({
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
})
export default class NavLeft extends Vue {}
</script>

<style lang="scss">
.nav-item {
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 100px !important;

    &.router-link-exact-active {
      color: #42b983 !important;
      border-bottom: #42b983 2px solid;
    }
    &:hover {
      color: #42b983 !important;
    }
  }
}
</style>