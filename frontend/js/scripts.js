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
                .get('http://localhost/php-dischi-json/backend/api.php', {
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