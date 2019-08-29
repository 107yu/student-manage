import {classList,createClass,createStudent,studentList,gradeList} from "@/service"
// import {setToken,getToken} from "../../utils/index"
const state = {
    className: [],
    studentLists:[],  //某班级重点学生名单
}

const mutations = {
    classList(state:any,payload:any){
        state.className = payload.lists
    },
    studentList(state:any,payload:any){
        state.studentLists = payload.lists
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
    async getStudentList(context:any,payload:any){  //获取学生列表
        let data = await studentList(payload)
        console.log("某一班级重点学生列表",data)
        if(data.code === 1){
            let {commit} = context
            commit ("studentList",data)
            
        }
        return data
    },
    async getGradeList(context:any,payload:any){  //获取成绩列表
        let data = await gradeList(payload)
        console.log("某成绩列表",data)
        // if(data.code === 1){
        //     let {commit} = context
        //     commit ("studentList",data)
            
        // }
        return data
    },
}
export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions,
}