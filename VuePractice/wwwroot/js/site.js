﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

new Vue({
    el: '#app',
    data: {
        counterC: 0,
        secondCounter: 0,

        twoWay: "two Way Binding",
        title: 'Hello World!',
        link: 'http://google.com',
        link2: '<a href="link">HtmlRaw()Gibi</a> ',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        result: function () {
            console.log("Method Calisti...");
            return this.counterC > 10 ? "10'dan büyüktür" : "10'dan kücüktür.";
        },
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
            //event yaninda kendi parametrenide pass edebilirsin
            this.x = event.clientX; //clientX js ozelligi
            this.y = event.clientY;
            this.counter += step;
        }
    },
    computed: { //kendi icinde kullanilan degere bakar eger degisiyorsa calisir
        output: function () { //aslinda data gibi davranir fakat method gibi calisir.
            console.log("Computed Calisti...");
            return this.counterC > 10 ? "10'dan büyüktür" : "10'dan kücüktür.";
        }
    },
    watch: { //computed senkron watch asenkron calisir
        counterC: function (value) { //data daki verileri gozlemler, veri degisince devreye girer.
            console.log(value);
            vm = this; //setTimeout bir js fonksiyonu old. icin ve onun icinden vue'ya erisebilmek icin.
            setTimeout(function () {
                vm.counterC = 0;
            }, 1500);//1 bucuk saniye sonra degerini sifirlar.
        }
    }
});
