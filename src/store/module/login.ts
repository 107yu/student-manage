import {login,register} from "@/service"
const state = {
   
}

const mutations = {
   
}

const actions = {
    async sendRegister(context:any,payload:any){
        let data = await register(payload)
        console.log("注册",data)
    },
    async sendLogin(context:any,payload:any){
        let data = await login(payload)
        console.log("登录",data)
    }
}
export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions,
}