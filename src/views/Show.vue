<template>
    <div class="show">
        <HeaderTitle title="重点关注学生考试成绩统计图"></HeaderTitle>
        <AddClass @studentInfo='studentInfo'></AddClass>
        <div class="addStudent">
            <span>添加学生</span>
            <input type="text" placeholder="输入学生的姓名" v-model="name">
            <input type="number" placeholder="末位次数" v-model="num">
            <input type="text" placeholder="结对子" v-model="description">
            <span class="appendStudent" @click="appendStudent">添加</span>
        </div>
        <div 
            v-for="(item,index) in studentLists"
            :key="index"
        >
            <DrawLine></DrawLine>
            <div class="resolve">
                <span>添加成绩</span>
                <span>添加解析方案</span>
            </div>
        </div>
        <!-- <div class="add">
            <div class="addGrade">
                <h6>添加新成绩---XXX同学</h6>
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="默认当前日期">
                    </el-date-picker>
                    <span class="demonstration">昨天</span>
                </div>
                <div><span>技能：</span><input type="text" placeholder="数字"></div>
                <div><span>理论：</span><input type="text" placeholder="0-100之间的数字"></div>
                <div class="handle">
                    <b>取消</b>
                    <b class="addShow">确定</b>
                </div>
            </div>
            <div class="addAnalysis">
                <h6>添加分析---XXX同学</h6>
                <div class="block">
                    <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="默认当前日期">
                    </el-date-picker>
                    <span class="demonstration">昨天</span>
                </div>
                <div><span>分析：</span><textarea name="" id="" cols="40" rows="5"></textarea></div>
                <div><span>解决方案：</span><textarea name="" id="" cols="40" rows="5"></textarea></div>
                <div class="handle">
                    <b>取消</b>
                    <b class="addShow">确定</b>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
import Vue from "vue"
import AddClass from "../components/addClass"
export default Vue.extend({
    props:{
    },
    components:{
        AddClass,
    },
    data(){
        return {
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
                },
            value1: '',
            value2: '',
            name: "",
            num: "",
            description: "",
            instructor:"",
            cid:"",//班级id
            studentLists:[],
        }
    },
    computed:{

    },
    methods:{
        ...mapActions({
            getClassList : "user/getClassList",
            sendCreateClass : "user/sendCreateClass",
            sendCreateStudent : "user/sendCreateStudent",
            getStudentList : "user/getStudentList"
        }),
        async studentInfo(info){  //子向父传递的参数
            this.cid = info.cid;
            this.instructor = info.teacher_name
            console.log("classInfo",info)
            let res = await this.getStudentList({  //获取某一个班级的重点学生
                cid: this.cid
            })
            if(res.code === 1){
                this.studentLists = res.lists
            }
        },
        async appendStudent(){   //添加重点学生
            if(!this.cid) return 
            if(!this.name) return 
            if(!this.num) return
            let res = await this.sendCreateStudent({
                cid:this.cid,
                stu_name:this.name,
                repetitions:this.num,
                description:this.description,	
                instructor:this.instructor
            })
            if(res.code === 1){
                this.$message({
                    message: '添加学生成功',
                    type: 'success'
                });
            }else{
                this.$message({
                    message: '添加学生失败，请重新填写信息',
                    type: 'error'
                });
            }
        }
      
    },
    created(){

    },
    mounted(){
        
    }
})
</script>
<style scoped lang="scss">
@import "../scss/show.scss"
</style>