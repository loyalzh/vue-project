import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

//引入组件

import HomeContainer from "../components/HomeContainer.vue";
import MemberContainer from "../components/MemberContainer.vue";
import CartContainer from "../components/CartContainer.vue";
import SearchContainer from "../components/SearchContainer.vue";

export default new VueRouter({
    routes: [
        {
            path:"/home",
            component:HomeContainer
        },
        {
            path:"/member",
            component:MemberContainer

        },
        {
            path:"/cart",
            component:CartContainer

        },
        {
            path:"/search",
            component:SearchContainer

        }

       
    ]
});

