const { createApp } = Vue;

createApp({
    data() {
        return {
            students: [],
            name: '',
        };
    },
    created() {
        this.search();
    },
    methods: {
        search() {
            axios
                .get('http://localhost/classe130/43-lc-php-json/backend/api.php', {
                    params: {
                        name: this.name
                    }
                })
                .then((res) => {
                    console.log(res.data);

                    this.students = res.data;
                });
        }
    }
}).mount('#app');