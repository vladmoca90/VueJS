<template lang="html">
    <div class="u-full-height u-full-width">
        <div>My name is Vlad Mocanu</div>
    </div>
</template>

<script>
export default {

    el: "#intro",
    data() { 
        parent: {
            border: "1px solid #000",
            margin: "25px auto",
            maxWidth: "300px",
            padding: "50px"
        },
        child: {
            color: "#ff00",
            fontWeight: "bold",
            textAlign: "center"
        }
    }
}
</script>

<style lang="scss" scoped></style>
