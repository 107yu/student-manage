import {classList,createClass} from "@/service"
// import {setToken,getToken} from "../../utils/index"
const state = {
   
}

const mutations = {
   
}

const actions = {
    async getClassList(context:any,payload:any){  //获取班级
        let data = await classList()
        console.log("班级列表",data)
        return data
    },
    async sendCreateClass(context:any,payload:any){  //获取班级
        console.log(payload)
        let data = await createClass(payload)
        console.log("创建班级",data)
        return data
    },
}
export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions,
}