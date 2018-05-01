new Vue({
    el: '#dropdown-container',
    data: {
        makes: [{
                name: 'Alfa Romeo',
                models: [
                    {
                        name: '174',
                        stock: 1
                    },
                    {
                        name: 'Giulietta',
                        stock: 2
                    }
                ]
            },
            {
                name: 'Audi',
                models: [
                    {
                        name: 'A1',
                        stock: 4
                    },
                    {
                        name: 'A2',
                        stock: 2
                    },
                    {
                        name: 'A3',
                        stock: 1
                    },
                    {
                        name: 'R8',
                        stock: 1
                    }
                ]
            },
            {
                name: 'BMW',
                models: [
                    {
                        name: '1 Series',
                        stock: 4
                    },
                    {
                        name: '2 Series',
                        stock: 2
                    },
                    {
                        name: '3 Series',
                        stock: 1
                    },
                    {
                        name: 'Z4',
                        stock: 1
                    }
                ]
            },
            {
                name: 'Citroen',
                models: [
                    {
                        name: 'Berlingo',
                        stock: 4
                    },
                    {
                        name: 'Picasso',
                        stock: 2
                    }
                ]
            },
            {
                name: 'Ford',
                models: [
                    {
                        name: 'Escort',
                        stock: 4
                    },
                    {
                        name: 'Fiesta',
                        stock: 2
                    },
                    {
                        name: 'Focus',
                        stock: 1
                    },
                    {
                        name: 'Galaxy',
                        stock: 1
                    },
                    {
                        name: 'KA',
                        stock: 4
                    },
                    {
                        name: 'Kuga',
                        stock: 2
                    },
                    {
                        name: 'Mustang',
                        stock: 1
                    },
                    {
                        name: 'Transit',
                        stock: 1
                    }
                ]
            },
            {
                name: 'Lambourghini',
                models: [
                    {
                        name: 'Hurracan',
                        stock: 1
                    },
                    {
                        name: 'Aventador',
                        stock: 1
                    }
                ]
            }
        ],
    },
    methods: {
        totalCars: function (stock) {
            if (makes.length == 0) {
                throw new Error('The array is empty');
            }

            if (makes.length == 1) {
                return countries[0].population;
            }

            var count = 0;

            for (i = 0; i < makes.length; i++) {

            }
        }
    }
});