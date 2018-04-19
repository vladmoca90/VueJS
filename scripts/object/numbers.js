new Vue({
    el: '.table-box',
    data: {
        numbers: [1.79320, 4.45867, 10.55563, 7.00256, 3.3365, 4.56354, 7.76500],
    },
    methods: {
        toFixedValue: function (number) {
            return number.toFixed(2);
        },
        toPrecisionValue: function (number) {
            return number.toPrecision(5);
        },
        powerValue: function (number) {
            return Math.pow(number, 6).toFixed(2);
        }
    },
});