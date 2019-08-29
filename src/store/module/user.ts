import {classList,createClass,createStudent} from "@/service"
// import {setToken,getToken} from "../../utils/index"
const state = {
    className: [],
}

const mutations = {
    classList(state:any,payload:any){
        state.className = payload.lists
    }
}

const actions = {
    async getClassList(context:any,payload:any){  //获取班级
        let data = await classList()
        console.log("班级列表",data)
        let {commit} = context
        commit ("classList",data)
        return data
    },
    async sendCreateClass(context:any,payload:any){  //添加班级
        let data = await createClass(payload)
        console.log("创建班级",data)
        return data
    },
    async sendCreateStudent(context:any,payload:any){  //添加学生
        let data = await createStudent(payload)
        console.log("添加重点学生",data)
        return data
    },
}
export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions,
}