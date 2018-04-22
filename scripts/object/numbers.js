new Vue({
    el: '.table-box',
    data: {
        numbers: [1.79320, 4.45867, 10.55563, 7.00256, 3.33658, 4.56354, 7.76510],
    },
    methods: {
        fixedValue: function (number) {
            return number.toFixed(2);
        },
        precisionValue: function (number) {
            return number.toPrecision(4);
        },
        powerValue: function (number) {
            return Math.pow(number, 6).toFixed(2);
        }
    },
});