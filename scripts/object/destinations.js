new Vue({
    el: '.main',
    data: {
        query: '',
        destinations: [
            {
                image: '../../images/destinations/Malaysia.jpg',
                overlayText: 'Malaysia',
                imgInformation: 'Malaysia travel',
                title: 'Malaysia',
                subtitle: 'Asia',
                content: 'Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. Its known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers.',
                link: 'See our offers',
            },
            {
                image: '../../images/destinations/Thailand.jpg',
                overlayText: 'Thailand',
                imgInformation: 'Thailand travel',
                title: 'Thailand',
                subtitle: 'Asia',
                content: 'Thailand is a Southeast Asian country. Its known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.',
                link: 'See our offers',
            },
            {
                image: '../../images/destinations/Japan.jpg',
                overlayText: 'Japan',
                imgInformation: 'Japan travel',
                title: 'Japan',
                subtitle: 'Asia',
                content: 'Japan is an island nation in the Pacific Ocean with dense cities, imperial palaces, mountainous national parks and thousands of shrines and temples. Shinkansen bullet trains connect the main islands of Kyushu (with Okinawas subtropical beaches), Honshu (home to Tokyo and Hiroshimas atomic-bomb memorial) and Hokkaido (famous for skiing). Tokyo, the capital, is known for skyscrapers, shopping and pop culture.',
                link: 'See our offers',
            },
            {
                image: '../../images/destinations/UK.jpg',
                overlayText: 'United Kingdom',
                imgInformation: 'United Kingdom travel',
                title: 'United Kingdom',
                subtitle: 'Europe',
                content: 'The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England, the birthplace of Shakespeare and The Beatles, is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath Roman spa and centuries-old universities at Oxford and Cambridge.',
                link: 'See our offers',
            },
            {
                image: '../../images/destinations/Italy.jpg',
                overlayText: 'Italy',
                imgInformation: 'Italy travel',
                title: 'Italy',
                subtitle: 'Europe',
                content: 'Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as "David" of Michelangelo and Brunelleschis Duomo; Venice, the city of canals; and Milan, the fashion capital of the country.',
                link: 'See our offers',
            },
            {
                image: '../../images/destinations/Spain.jpg',
                overlayText: 'Spain',
                imgInformation: 'Spain travel',
                title: 'Spain',
                subtitle: 'Europe',
                content: 'Spain, a country on Europes Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcazar) and an intact Roman aqueduct. The capital of Catalonia, Barcelona, is defined by Antoni Gaudi whimsical modernist landmarks like the Sagrada Familia church.',
                link: 'See our offers',
            },
        ],
    },
    computed: {
        allDestinations: function () {
            return this.destinations.filter((destination) => {
                return destination.imgInformation.match(this.query) ||
                    destination.title.match(this.query) ||
                    destination.subtitle.match(this.query) ||
                    destination.content.match(this.query)
            });
        },
    },
    filters: {
        uppercaseSubTitle: function (value) {
            return value.toUpperCase();
        },
    },
});