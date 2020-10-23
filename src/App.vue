<template>
  <div id="app">
    <div class="padding-top">
      <header class="container">
        <div class="row">
          <div
            class="col-md-12 border-bottom border-left border-right fixed-height"
          >
            <div class="row">
              <div class="col-md-2 col-sm-2">
                <a href="/" class="logo">
                  <img
                    class="img-responsive navbar-brand"
                    src="./assets/luis.jpg"
                    alt="profile"
                  />
                </a>
              </div>
              <nav-lef />
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center padding-top container-responsive">
            <h1 class="text-norm border-bottom">
              Frontend and backend developer based in JavaScript, Golang.
              <br />
              Highly experienced in developing custom websites and Customer
              Support.
            </h1>
            <h1 class="text-responsive border-bottom">
              Frontend and backend developer based in JavaScript, Golang.
              <br />
            </h1>
          </div>
        </div>
      </div>
      <div class="container">
        <router-view />
      </div>
      <div class="container-fluid bg-navy">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavLef from "@/components/NavLeft.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    NavLef,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.padding-top {
  padding-top: 20px;
}

.fixed-height {
  height: 80px;
}
.border-right {
  border-right: 2px solid #f5f6f7;
}
.border-left {
  border-left: 2px solid #f5f6f7;
}
.border-bottom {
  border-bottom: 2px solid #f5f6f7;
}

header {
  .logo {
    display: inline-block;
    position: absolute;
    top: 10px;
    img {
      max-width: 100px;
      vertical-align: middle;
      border: 0;
    }
  }
}

a {
  color: #06bc9b;
  outline: 0 !important;
  text-decoration: none;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.h1,
h1 {
  font-size: 24px;
  color: #63707e;
  padding-top: 10px;
  padding-bottom: 30px;
  font-family: Helvetica;
  margin: 20px 0 0 0;
  font-weight: 400 !important;
}

.padding-top {
  padding-top: 20px;
}

.hidden-sm {
  display: block !important;
}

@media (min-width: 992px) {
  .col-md-12 {
    width: 100%;
  }
}
</style>
