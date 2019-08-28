import Vue from "vue";
import Vuex from "vuex"
import CreateLogger from "vuex/dist/logger"

import login from "./module/login"

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        login
    },
    plugins : [CreateLogger()]
})