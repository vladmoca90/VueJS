<template lang="html">
 <div id="list-container" class="u-full-width">
        <ul :style="styleList" :class="listGroup">
            <li v-for="name in names" v-text="name" :class="listGroupItem"></li>
        </ul>
    </div>
</template>

    <script>
        export default {

            el: "#list-container",
            data() {
                names: {
                    ["Joe", "Mary", "Jane", "Jack", "Erika"]
                },
                styleList: {
                    fontSize: '15px',
                    marginTop: '25px',
                    maxWidth: '125px',
                    textAlign: 'center'
                },
                listGroup: 'list-group center-block',
                listGroupItem: 'list-group-item'
            }
        }
    </script>
<style lang="scss" scoped></style>