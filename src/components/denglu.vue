<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" ref="username">
    <input type="password" placeholder="请输入密码" ref="password">
    <button @click="clickBtn">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    clickBtn () {
      let username = this.$refs.username.value,
          password = this.$refs.password.value
      if(username == "Gzy" && password == "Gzy123.."){
        window.localStorage.setItem('denglu','true')
        window.history.back()
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100%;
    text-align: center;
    input{
      width: 90%;
      -web-kit-appearance:none;
      -moz-appearance: none;
      font-size:15px;
      height:30px;
      border-radius:6px;
      border:1px solid #c8cccf;
      color:#6a6f77;
      text-align: center;
    }
    button{
      width: 90%;
      height: 30px;
      background: skyblue;
      color: #fff;
      border:0;
      border:1px solid #ccc;
      border-radius:6px;
    }
  }
</style>
