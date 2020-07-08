import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from "firebase/app";
import '@/resources/styles/main.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyDJ1KnMo7VAV9N8eXfT562LKW9GYWdHwg0",
            authDomain: "portfolio-e58d4.firebaseapp.com",
            databaseURL: "https://portfolio-e58d4.firebaseio.com",
            projectId: "portfolio-e58d4",
            storageBucket: "portfolio-e58d4.appspot.com",
            messagingSenderId: "1044883456339",
            appId: "1:1044883456339:web:5d3e7e35e3fb89601361a6",
            measurementId: "G-18D76Y5MF4"
        })
    }
}).$mount('#app')