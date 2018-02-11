<template lang="html">
    <div class="employers u-full-width">{{ employer.name }}</div>
</template>

<script>
export default {

    props: [type: Object],
    data() {
        employer: [
            name: {
                "Alexandru",
                "Vladmir",
                "Andreea-Corina",
            },
            id: {},
            age: {}
        ]
    }
}
</script>

<style scoped>


</style>
