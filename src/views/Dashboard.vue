<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mountaineering</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/admin/products" class="nav-link">產品</router-link>
            <router-link to="/admin/orders" class="nav-link">訂單</router-link>
            <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
            <router-link to="/admin/article" class="nav-link">貼文</router-link>
            <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          </div>
          <!-- <div class="navbar-nav ms-auto">
            <router-link to="/user/articles" class="nav-link">Blog</router-link>
            <router-link to="/user/cart" class="nav-link">購物車</router-link>
          </div> -->
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
  </template>
  <script>
  import { RouterView } from "vue-router"
  const { VITE_URL } = import.meta.env
  export default {
    // inject: ['emitter'],
    data () {
      return {
        status: false,
      }
    },
    methods: {
      logout () {
      document.cookie = `phtoken=; expires=${new Date()};`
      this.$router.push('/')
    },
      checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)ph\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_URL}/v2/api/user/check`)
        .then((res) => {
          console.log(res)
          if (!res.data.success) {
            this.$router.push('/')
          }
        })
    }
    },
    components: {
        RouterView
    },
    mounted () {
      this.checkLogin()
    }
  };
  </script>
