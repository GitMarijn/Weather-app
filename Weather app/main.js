var app = new Vue({
    el: '#app',
    data: {
        city: "",
        data: [],
        show: false,
        showempty: false,
    },

    created() {},

    methods: {
        getData() {
            fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + this.city + "&units=metric&APPID=83f7a705189b3d829da2937c0d89d539", {
                method: "GET",

            }).then(function (response) {
                return response.json()
            }).then(function (data) {
                app.data = data;
                if (app.data.cod === "404") {
                    app.showempty = true
                    app.show = false
                } else {
                    app.show = true
                    app.showempty = false
                }
                console.log(app.data)
            }).catch(function (error) {
                console.log(error)
            })
        },
    },
})
