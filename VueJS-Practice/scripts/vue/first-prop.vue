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
                ],
                id: [
                    10346,
                    10084,
                    10980,
                    10355,
                    10700
                ],
                age: [
                    25,
                    24,
                    33,
                    29,
                    43
                ]
            }
        ]
    }
}
</script>

<style lang="scss" scoped></style>
