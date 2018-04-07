new Vue({
    el: ".table-container",
    data: {
        students: [{
                name: "Zanfir Andreea",
                mark: 8.65,
            },
            {
                name: "Barbu Ionut",
                mark: 8.00,
            },
            {
                name: "Diaconu Mirela-Alexandra",
                mark: 9.76,
            },
            {
                name: "Antonescu Florina",
                mark: 8.59,
            },
            {
                name: "Ilie Paul",
                mark: 7.44,
            },
            {
                name: "Costache Andrei-Cristian",
                mark: 8.94,
            },
            {
                name: "Toma Valentina",
                mark: 9.25,
            },
            {
                name: "Birman Contantin",
                mark: 7.79,
            },
            {
                name: "Simionescu Alin",
                mark: 8.20,
            },
        ],
    },
    computed: {
        sortedStudents: function () {

        },
    },
});