

<template>
  <div>
    <h1>Hola mundo</h1>

    <button class="btn btn-primary" @click="goToDaybook">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
