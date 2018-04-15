 new Vue({
     el: '#coordinates',
     data: {
         counter: 0,
         x: 0,
         y: 0,
         coordinatesColors: {
             backgroundColor: '#00f',
             padding: '5px',
             width: '280px',
             color: '#fff',
         },
         inputIdentity: {
             placeholder: 'Write here whatever you want'
         },
         textValueColor: {
             color: '#f00',
             fontWeight: 'bold',
         },
         value: '',
     },
     methods: {
         increase: function (step1, step2) {
             this.counter += (step1 + step2);
         },
         updateCoordinates: function (event) {
             this.x = event.clientX;
             this.y = (2 * event.clientX).toString(8);
         },
         anAlert: function () {
             this.event = alert("You just deleted the last character");
         },
         showPrompt: function () {
             this.event = prompt("Please type your name here");
         },

     }
 });