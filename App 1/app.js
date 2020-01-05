const app = new Vue({
    el: "#App-Main",
    
    data() {
        return {
            name: "Bitcoin",
            symbol: "BTC",
            img: "sources/images/bitcoin.png",
            color: "F4F4F4",
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
            ShowPrices: false,
            DarkMode: false,
            value: 0
        }
    },

    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        ConvertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        ShowPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
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
    }
})