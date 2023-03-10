<template>
  <div class="container mt-5">
      <form class="row justify-content-center" @submit.prevent="Login">
        <div class="col-md-6">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="">
            <div class="form-floating mb-3">
                <input 
                type="email" 
                class="form-control" 
                id="username"
                placeholder="name@example.com"
                v-model="user.username" 
                required 
                autofocus
                >
                <label for="username">Email address</label>
            </div>
            <div class="form-floating">
                <input 
                type="password" 
                class="form-control" 
                id="password"
                placeholder="Password"
                v-model="user.password"
                required
                >
                <label for="password">Password</label>
               </div>
               <div class="text-end">
                <button class="btn btn-lg btn-primary mt-3" type="submit">
                登入
                </button>
               </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
const { VITE_URL } =import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    Login () {
      this.$http.post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `phtoken=${token};expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.data.message)
        }) 
    }
  }
}
</script>