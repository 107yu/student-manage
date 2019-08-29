<template>
   <div class="class">
        <span>切换班级：</span>
        <ul>
            <li 
                v-for="(item,index) in className" 
                :key="index" 
                :class="{show:'index===ind'}"
                @click="changeClass(index)"
            >{{item}}</li>
        </ul>
        <p @click="createClass">创建班级+</p>
        <el-dialog
            title="添加班级"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="addClassIpt"><input type="text" placeholder="班级名" v-model="classname"></div>
            <div class="addClassIpt"><input type="text" placeholder="教室号" v-model="classroom"></div>
            <div class="addClassIpt"><input type="text" placeholder="辅导员" v-model="assistant"></div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import Vue from "vue"
import {mapState,mapMutations,mapActions} from "vuex"
export default Vue.extend( {
    props:{

    },
    components:{

    },
    data(){
        return {
            dialogVisible: false,
            className:[],
            classname:"",
            classroom:"",
            assistant:""
        }
    },
    computed:{

    },
    methods:{
        ...mapActions({
            getClassList : "user/getClassList",
            sendCreateClass : "user/sendCreateClass"
        }),
        changeClass(index){
            this.ind = index
        },
        createClass(){
            this.dialogVisible = true;
        },
        handleClose(done){
            this.$confirm('确认关闭？')
            .then(_ => {
                if(!this.classname) return ;
                if(!this.classroom) return ;
                if(!this.assistant) return ;
                this.sendCreateClass({
                    type:"create",
                    classname:this.className,
                    classroom:this.classroom,
                    assistant:this.assistant
                })
                done();
            })
            .catch(_ => {});
        }
    },
    created(){

    },
    mounted(){

    }
})
</script>
<style scoped lang="scss">
@import "../scss/addClass.scss"
</style>