<template>
    <div class="login">
        <HeaderTitle title="重点学生日周考成绩录入登录系统"></HeaderTitle>
        <div class="center">
            <h2>网站工程</h2>
            <div class="nav">
                <span 
                    v-for="(item,index) in title" 
                    :key="index"
                    @click="change(index)"
                    :class="{show:index===ind}"
                    >{{item}}</span>
            </div>
            <div>
                <input type="text" placeholder="用户名" v-model="username">
            </div>
            <div>
                <input type="text" placeholder="请输入密码" v-model="pwd">
            </div>
            <div v-if="submitVal==='注册'">
                <input type="text" placeholder="请输入手机号(可选择)" v-model="tel">
            </div>
            <div class="checkbox">
                <input type="checkbox">
                <span>两周内免登录</span>
            </div>
            <div>
               <button @click="submit">{{submitVal}}</button>
            </div>
        </div>    
    </div>
</template>
<script>
import Vue from "vue"
import {mapState,mapMutations,mapActions} from "vuex"
export default Vue.extend({
    data(){
        return {
            title:["登录","注册"],
            ind:1,
            tel:"",
            pwd:"",
            username:"",
            submitVal:"注册"
        }
    },
    computed:{
       
    },
    methods:{
        ...mapActions({
            sendRegister : "login/sendRegister",
            sendLogin : "login/sendLogin"
        }),
        change(index){
            if(index === 0){
                this.submitVal = "登入"
            } else {
                this.submitVal = "注册"
            }
            this.ind = index
        },
        submit(){
            //注册
            if(!this.username) return;
            if(!this.pwd) return ;
            if(this.submitVal === "注册"){
                this.sendRegister({
                    username:this.username,
                    password:this.pwd,
                    phone:this.tel
                })
            }else if(this.submitVal === "登入"){
                this.sendLogin({
                    username:this.username,
                    password:this.pwd,
                    validlength:""
                })
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
@import "../scss/login.scss"
</style>