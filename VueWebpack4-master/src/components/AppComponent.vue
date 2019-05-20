<template>
<div>{{ msg }}</div>
</template>
import HelloWorld from './components/HelloWorld.vue'
<script>
export default {
  data () {
    return {
      msg: 'Hello from vue'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


