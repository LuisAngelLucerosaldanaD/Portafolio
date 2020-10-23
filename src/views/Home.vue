<template>
  <div class="wrapper padding-bottom-none featured margin-top">
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <img
          src="../assets/fondoHome.png"
          alt="home"
          class="slide_up main_position animate img-responsive"
        />
      </div>
      <div
        class="col-lg-4 col-md-5 margin-topx3 xs-margin-top sm-margin-top-none sm-text-center"
      >
        <h1>
          Banckend Golang,
          <br />
          Frontend JavaScript,
          <br />
          Css, Sass, Html
        </h1>
        <div class="row btn-pull-right">
          <div class="col-md-offset-3 col-md-9 col-sm-offset-4 col-sm-8">
            <router-link to="/about" class="btn btn-success btn-block"
              >View Portafolio
              <i class="fa fa-chevron-circle-right fa-align-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
.btn-success {
  background-color: #06bc9b !important;
  background-image: -webkit-linear-gradient(left, #06bc9b, #1ba49c);
  font-size: 18px;
  padding: 15px 20px;
  border: 0 none;
  line-height: 20px;
  text-align: left;
  color: #fff !important;
  &:hover {
    i {
      color: rgb(51, 48, 56);
    }
  }
}
.wrapper {
  background-color: #f5f6f7;
}
.padding-bottom-none {
  padding-bottom: 0;
}
.margin-top {
  margin-top: 20px;
}
.animation-wrapper {
  overflow: hidden;
}
.col-lg-8 {
  img {
    width: 50%;
    height: 100%;
    margin: auto auto;
  }
}

.slide_up {
  margin-top: 20px;
  padding-bottom: 20px;
  animation-name: slide_up;
  -webkit-animation-name: slide_up;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
}
.main_position {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.animate {
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  position: absolute;
  visibility: visible !important;
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.btn-pull-right {
  position: relative;
  right: -10px;
}
.featured {
  h1 {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 30px;
  }
}

@media (min-width: 1200px) {
  .col-lg-8 {
    width: 66.66666666666666%;
  }
}

.margin-topx3 {
  margin-top: 60px;
}
@media (min-width: 1200px) {
  .col-lg-4 {
    width: 33.33333333333333%;
  }
}
</style>
