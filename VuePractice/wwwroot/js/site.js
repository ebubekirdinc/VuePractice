//component diger kullanim
var cmp = {
    data: function() {
        return {
            status: "Pasif"
        };
    },
    template: '<p> Sunucu Durumu : {{ status }} (<button @click="changeStatus">Değiştir</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = "Aktif"
        }
    }
};

Vue.component('hello', {
    template:"<h3>Hello from vue Compenent</h3>"
    });

//buradanda javascript kodu ile vue elemanlarina erisilebilir.
var disaridanData = { //javascript o bjesi
    title: 'app2 instance Title!'
};

var vm2 = new Vue({
    el: '#app2',
    data: disaridanData,
    methods: {
        refDegistir: function () {
            this.$refs.refDegistir.innerText = "ref ile degistirildi !!!";
        }
    },
    components: {
        "my-comp": cmp
    }
});

/////////////////////////////////////////////////Vue Disi JavaScript Kodu///////////
setTimeout(function () {
    vm2.title = "Timer ile disaridan javascript kodu ile degistirildi.";
}, 2000);

console.log("Disaridan yazdirildi=>" + vm2.title);
console.log("Disaridan $data ile yazdirildi=>" + vm2.$data.title); //vue data elemanlari
console.log(vm2); //neler var icine bak
//refs ile disaridan degistirilebilir ama vue da ele alinmaz.
vm2.$refs.refDegistirDisardan.innerText = "ref disardan degistirildi !!!";
/////////////////////////////////////////////////Vue Disi JavaScript Kodu///////////

var vm1 = new Vue({
    el: '#app1',
    data: {

        //v-for
        products: ["Monitör", "Klavye", "Askı", "Masa"],
        persons: [{
            name: "Gökhan",
            email: "gokhan@gkandemir.com"
        },
        {
            name: "Felakettin",
            email: "felo@gkandemir.com"
        },
        {
            name: "Defne",
            email: "defne@gkandemir.com"
        },
        {
            name: "İflasettin",
            email: "ifo@gkandemir.com"
        }
        ],

        //v-if
        show: false,
        sayi: 15,
        showParagh: false,

        //dinamik css icin -style ile
        progressWidth: 10,
        colorS: "green",
        yukseklik: 100,
        myStyle: {
            width: "100px",
            backgroundColor: "red"
        },

        //dinamik css icin -class ile
        attachedClass: false,
        color: "green",

        //computed ve watch
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
        app2TitleDegistir: function (e) {
            vm2.title = "app1'den degisti";
        },
        startProgress: function () {
            var vm = this;
            setInterval(function () {
                vm.progressWidth += 10;
            }, 1000);
        },
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

        customStyle: function () {
            return {
                backgroundColor: this.color,
                height: this.yukseklik + "px"
            };
        },
        divClass: function () {
            return {
                yellow: this.attachedClass,
                blue: !this.attachedClass
            };
        },
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
