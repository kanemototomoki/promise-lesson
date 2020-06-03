<template>
  <nav id="nav">
    <ul>
      <li>
        <nuxt-link to="/fetch-json">[見本]Fetch-JSON</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/promise-animation">[見本]Promise-Animation</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
}
</script>

<style scoped>

#nav {
  padding: 30px;
  text-align: center;
}

#nav ul {
  list-style: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a .router-link-exact-active {
  color: #42b983;
}
</style>
