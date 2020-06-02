<template>
  <nav id="nav">
    <nuxt-link to="/fetch-json">Fetch-JSON</nuxt-link> |
    <nuxt-link to="/promise-animation">Promise-Animation</nuxt-link>
  </nav>
</template>

<script>

export default {
}
</script>

<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a .router-link-exact-active {
  color: #42b983;
}
</style>
