export const sampleMixin = {
    data() {
        return {
            sampleGlobalVar: 'Sample global var'
        }
    },
    computed: {

    },
    methods: {
        sampleGlobalMethod(data) {
            console.log('global method - data:', data);
        }
    }
};