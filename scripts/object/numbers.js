new Vue({
    el: '.table-box',
    data: {
        numbers: [1.7932044, 4.4586777, 10.5556534, 7.00256324, 3.3365, 4.563546, 7.765000],
    },
    methods: {
        toFixedValue: function (number) {
            return number.toFixed(3);
        },
        toPrecisionValue: function (number) {
            return number.toPrecision(5);
        },
        powerValue: function (number) {
            return Math.pow(number, 6).toFixed(2);
        }
    },
});