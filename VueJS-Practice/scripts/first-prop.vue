<template lang="html">
    <div class="employers u-full-width">{{ employer.name }}</div>
</template>

<script type="text/javascript">
export default {

    props: [
        type: Object
    ],
    data() {
        employer: [
            {
                name: [
                    "Alexandru", 
                    "Vladimir", 
                    "Grace", 
                    "Andreea", 
                    "Ionel"
                ]
            }
        ]
    }
}
</script>

<style scoped></style>
