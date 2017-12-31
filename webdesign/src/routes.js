import Home from './components/Home.vue';
import SampleForm from './components/sample/SampleForm.vue';
import SampleTable from './components/sample/SampleTable.vue';

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
        name: 'sampleForm',
        components: {
            default: SampleForm
        }
    },
    {
        path: '/sample-table',
        name: 'sampleTable',
        components: {
            default: SampleTable
        }
    }

];