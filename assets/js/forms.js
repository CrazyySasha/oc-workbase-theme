
const SearchService = {
    delimiters: ['{', '}'],
    props: ['categorySlug'],
    template: '#searchServiceComponent',
    data() {
        return {
            search: '',
            category: null,
        };
    },
    methods: {
        async fetchCategory() {

            let res = await (await fetch(`/api/crazy/freelancer/v1.0.1/categories/${this.$props.categorySlug}`)).json();
            
            this.category = res;
        }
    },
    created() {
        this.fetchCategory();
    },
    mounted() {
        console.log('mounted');
    },
};

const SelectService = {
    delimiters: ['{', '}'],
    props: ['categorySlug', 'service'],
    template: `#selectServiceComponent`,
};


const routes = [
    {
        path: '/vue/:categorySlug',
        component: SearchService,
        props: true,
    },
    {
        path: '/vue/:categorySlug/:service+',
        component: SelectService,
        props: true,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})
const Form = {
    delimiters: ['{', '}'],
}

Vue.createApp(Form).use(router).mount('#form');