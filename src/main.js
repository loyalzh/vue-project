import Vue from "vue";

//引入根组件
import App from "./App.vue";

import router from "./routers/router.js";

//引入mint-ui
import MintUI from "mint-ui";

import "mint-ui/lib/style.css";

Vue.use(MintUI)

//引入mui
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";


var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App}
})