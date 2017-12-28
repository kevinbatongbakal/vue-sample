import Home from './components/Home.vue';
import SampleForm from './components/SampleForm.vue';

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home
        }
    },
    {
        path: '/sample-form',
        name: 'vueblue',
        components: {
            default: SampleForm
        }
    }

];