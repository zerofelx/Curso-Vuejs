Vue.component('crypto', {
    props: ['coin'],

    data() {
        return {
            ShowPrices: false,
            value: 0,
        }
    },
    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`
        },
        ConvertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price
        }
    },
    methods: {
        ToggleShowPrices() {
            this.ShowPrices = !this.ShowPrices
        }
    },
    created() {
        console.log("Created Crypto")
    },
    mounted() {
        console.log("Mounted Crypto")
    },
    template: `
    <div class="crypto">
        <img v-on:mouseover="ToggleShowPrices()" v-on:mouseout="ToggleShowPrices()" v-bind:src="coin.img" v-bind:alt="coin.name">
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red' ">
            {{ title }}
            <span v-show="coin.changePercent > 0">✓</span>
            <span v-show="coin.changePercent < 0 ">Error</span>
            <span v-show="coin.changePercent == 0">0!</span>
        </h1>
        
        <input type="button" v-bind:value="!ShowPrices ? 'Ver precios':'Ocultar precios'" v-on:click="ToggleShowPrices()">
        <br>
        <br>
        <input type="number" v-model="value">
        <span>{{ ConvertedValue }}</span>
        <br>
        <br>

        <slot name="text"></slot>
        <slot name="link"></slot>

        <ul v-show="ShowPrices">
        <li 
        v-bind:class="{ green: p.value > coin.price, red: p.value < coin.price, orange: p.value == coin.price}"   
        v-for="(p, i) in coin.priceWithDays" 
        v-bind:key="p.day">
            [{{ i }}] - {{ p.day }}  {{ p.value }}
        </li>
    </ul>
    </div>
    `,
    
})

new Vue({
    el: "#App-Main",
    
    data() {
        return {
            btc: {
                name: "Bitcoin",
                symbol: "BTC",
                img: "sources/images/bitcoin.png",
                changePercent: 10,
                price: 8400,
                priceWithDays: [
                    {day: "Lunes", value: 8400},
                    {day: "Martes", value: 7900},
                    {day: "Miercoles", value: 8200},
                    {day: "Jueves", value: 9000},
                    {day: "Viernes", value: 9400},
                    {day: "Sábado", value: 10000},
                    {day: "Domingo", value: 10200}
                ],
            },
            lite: {
                name: "Litecoin",
                symbol: "Lite",
                img: "sources/images/litecoin.png",
                changePercent: 10,
                price: 8600,
                priceWithDays: [
                    {day: "Lunes", value: 5770},
                    {day: "Martes", value: 7300},
                    {day: "Miercoles", value: 8900},
                    {day: "Jueves", value: 4000},
                    {day: "Viernes", value: 9100},
                    {day: "Sábado", value: 19000},
                    {day: "Domingo", value: 200}
                ],
            },
            color: "F4F4F4",
            DarkMode: false,
        }
    },

    methods: {
        ToggleShowPrices() {
            this.ShowPrices = !this.ShowPrices
        },
        ToggleDarkMode() {
            this.color = this.color.split('').reverse().join('');
            this.DarkMode = !this.DarkMode
        }
    },
    created() {
        console.log("Created Root")
    },
    mounted() {
        console.log("Mounted Root")
    }
})