import '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import { Excel } from './components/excel/Excel'
import './scss/index.scss'


const instance = new Excel('#app', {
    components: []
});

console.log(instance);
