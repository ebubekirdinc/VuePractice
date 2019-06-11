// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        link2: '<a href="link">HtmlRawGibi</a> ',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeTitle: function (e) {
            this.title = e.target.value; //vue icindeki elemanlara ersimek this ile
        },
        sayHello: function () {
            //this.title = 'hello';
            return this.title;
        },
        artir: function () {
            this.counter++;
        },
        updateCoord: function (step, event) {
            //event yaninda kendi parametrenidfe pass edebilirsin
            this.x = event.clientX; //clientX js ozelligi
            this.y = event.clientY;
            this.counter += step;
        }
    }
})
