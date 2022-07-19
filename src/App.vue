<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <router-link to="/about">ABOUT</router-link>
    <router-link :to="{name:'jobs'}">JOBS</router-link>
  </nav>
<button @click="redirect">HOME</button>
<button @click="back">GO BACK</button>
<button @click="fwd">GO FWD</button>

  <router-view/>
</template>


<script>

export default {
  methods:{
    redirect(){
      this.$router.push({name:'home '})
    },
    back(){
      this.$router.go(-1)
    },
    fwd(){
      this.$router.go(1)
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
