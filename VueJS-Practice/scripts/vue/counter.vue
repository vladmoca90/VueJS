<template lang="html">
  <div class="u-full-width">
      <div class="main-button btn btn-success" @click="counter += 1">Press this button</div>
      <span>{{ counter }}</span>
  </div>
</template>

<script type="text/javascript">
    export default {

        el: "main-button",
        data() {
            counter: 0
        }
    }
</script>

<style lang="scss" scoped>

.main-button {
    margin: 25px auto;
}
</style>