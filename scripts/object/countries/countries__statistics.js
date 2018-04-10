import data from 'countries__table.js';

new Vue({
    el: '.countries__statistics',
    methods: {
        totalNumberOfCountries: function () {
            return countries.length;
        }
    },
});