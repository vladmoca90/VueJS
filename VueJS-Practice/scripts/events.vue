<template lang="html">
  <div class="u-full-width">
      <div class="main-button btn btn-success" @click.once="oneClick">Press this button</div>
  </div>
</template>

<script type="text/javascript">
    export default {

        props: ["count"],
        data() {
            oneClick = "counter += 1"
        }
    }
</script>

<style lang="scss" scoped>

.main-button {
    margin: 25px auto;
}
</style>