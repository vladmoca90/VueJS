import countries from 'countries.js';

new Vue({
    el: '.countries__statistics',
    data: {
       countries: countries,
    },
    methods: {
        totalPopulation: function (countries) {

            if(countries.length == 0) {
                throw new Error('The array is empty');
            }

            if(countries.length == 1) {
                return countries[0].population;
            }

            var total = countries[0].population;

            for (i = 0; i < countries.length; i++) {
                total += countries[i].population;
            }

            return total;
        },
        numberOfDifferentLang: function () {
            var counter = 0;

        },
    },
});