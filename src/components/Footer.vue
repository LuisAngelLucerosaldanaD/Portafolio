<template>
  <footer class="container text-center">
    <div class="row margin-bottom">
      <div class="col-md-12 social">
        <a
          class="bg-github"
          href="https://github.com/LuisAngelLucerosaldanaD"
          target="_blank"
          title="Luis Lucero, Frontend and Backend developer &amp; Customer Suppor"
          ><i class="fab fa-github"></i
        ></a>
        <a
          class="bg-twitter"
          href="https://twitter.com/Luis_Lucero20"
          target="_blank"
          title="Luis Lucero, Frontend and Backend developer &amp; Customer Suppor"
          ><i class="fa fa-twitter"></i
        ></a>

        <a
          class="bg-gitlab"
          href="https://gitlab.com/LuisLucero"
          target="_blank"
          title="Luis Lucero, Frontend and Backend developer &amp; Customer Suppor"
          ><i class="fab fa-gitlab"></i
        ></a>
        <a
          class="bg-linkedin"
          href="https://www.linkedin.com/in/luislucero20/"
          target="_blank"
          title="Luis Lucero, Frontend and Backend developer &amp; Customer Suppor"
          ><i class="fa fa-linkedin"></i
        ></a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 hidden-xs">
        <ul class="nav footer-nav clearfix" style="pafing: 50px 0">
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225"
          >
            <a href="/"
              >Privacy Policy</a
            >
          </li>
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1226"
          >
            <a href="/">Cookie Policy</a>
          </li>
          <li
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1224"
          >
            <a href="/"
              >Terms &#038; Conditions</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 credits xs-margin-top">
        <p>
          Copyright &copy; 2020&nbsp;Luis Lucero&nbsp;&bull;&nbsp;Forntend and
          Backend Developer &amp; Tech lover
        </p>
      </div>
      <!-- end col -->
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="triangle img-center">
          <router-link to="/" class="back-to-top" title="Back to top">
            <i class="fa fa-arrow-up hidden-xs hidden-md hidden-lg"></i
            ><i class="fa fa-chevron-up hidden-lg hidden-sm"></i>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FooterLeft extends Vue {}
</script>

<style lang="scss">
footer {
  background-color: #2a3b4e;
  margin-top: 20px;
  padding-top: 20px;
  .nav {
    margin-bottom: 0;
    padding-left: 35%;
    list-style: none;
    li {
      position: relative;
      display: block;
    }
  }
  .footer-nav {
    li {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -moz-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-self: auto;
      a {
        font-size: 16px !important;
        color: #fff;
        font-size: 20px;
        padding: 0;
        margin-right: 10px;
        text-decoration: none;
        display: inline-block;
        &:hover {
          color: #06bc9b;
        }
      }
    }
  }
  .credits {
    font-size: 12px;
    color: #83909d;
  }
}

.container-responsive {
  @media (max-width: 767px) {
    .text-norm {
      display: none !important;
    }
  }
  @media (min-width: 767px) {
    .text-responsive {
      display: none !important;
    }
  }
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.bg-navy {
  background-color: #33485f;
}
.margin-bottom {
  margin-bottom: 20px;
}
.social {
  a {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 35px;
    height: 35px;
    position: relative;
    display: inline-block;
    color: #fff;
    margin-left: 10px;
    margin-right: 10px;
  }
  i {
    margin-top: 9px;
  }
}
.bg-github {
  background-color: #211f1f;
}
.bg-twitter {
  background-color: #55acee;
}
.bg-linkedin {
  background-color: #0077b5;
}
.bg-gitlab {
  background-color: #fc6d27;
}

.hidden-xs {
  display: block;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #06bc9b;
}
.img-center {
  margin: 0 auto;
}
.back-to-top {
  display: inline-block;
  margin-left: -8px;
  margin-top: 15px;
  outline: 0 !important;
  .fa {
    color: #fff;
  }
}

@media (max-width: 767px) {
  .hidden-md.hidden-xs {
    display: none !important;
  }
}
@media (min-width: 767px) {
  .hidden-sm.hidden-lg {
    display: none !important;
  }
}
</style>