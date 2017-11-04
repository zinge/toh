<template>
  <div class="hero-detail">
    <div v-if="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input v-model="hero.name" placeholder="name"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroDetail',

  props: ['hero']
}
</script>

<style>

</style>
