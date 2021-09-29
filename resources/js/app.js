require('./bootstrap');

import { createApp } from 'vue';
import AddProduct from './components/ExampleComponent.vue';

let app=createApp({})

app.component('example-component' , AddProduct);
app.mount("#app")
