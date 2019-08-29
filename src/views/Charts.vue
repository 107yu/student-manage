<template>
    <div class="chart">
        <HeaderTitle title="重点关注学生考试成绩统计图"></HeaderTitle>
        <div class="choose">
            <div class="menu">
                <div class="menu-left">选择班级：</div>
                <ul class="choose-right">
                    <li
                        v-for="(item,index) in className"
                        :key="index"
                        :class="{chooseActive: index === ind}"
                        @click="changeClass(index,item)"
                    >
                        {{item.class_name}}
                    </li>
                </ul>
            </div>
            <div class="menu">
                <div class="menu-left">名  单：</div>
                <ul class="choose-right">
                    <li
                        v-for="(item,index) in studentLists"
                        :key="index"
                        class="noColor"
                    >
                        {{item.stu_name}}
                    </li>
                    <li class="noColor">({{studentLists.length}}/人)</li>
                </ul>
            </div>
        </div>
        <DrawLine />
        <div class="method">
            <div class="method-left">
                <p>2019-08-30</p>
                <p>今日分析及解决方案：</p>
                <p>点击查看历史记录 ></p>
            </div>
        <div class="method-right">撒的风大贵好</div>
        </div>
    </div>
</template>
<script>
import Vue from "vue"
import {mapState,mapMutations,mapActions} from "vuex"
export default Vue.extend({
    props:{

    },
    components:{

    },
    data(){
        return {
            ind: 0,
            student:{},
        }
    },
    computed:{
        ...mapState({
            className : state => state.user.className,
            studentLists : state => state.user.studentLists
        })
    },
    methods:{
        ...mapActions({
            getClassList : "user/getClassList",
            getStudentList : "user/getStudentList",
            getGradeList : "user/getGradeList"
        }),
       changeClass(index,item){   //切换班级
            this.ind = index
            this.student = this.className[index]
            this.getStudentList({  //获取某一个班级的重点学生
                cid: item.cid
            })
        },
    },
    created(){

    },
    async mounted(){
        let res = await this.getClassList()
        if(res.code === 1){
            this.student = this.className[0]
            this.getStudentList({  //获取某一个班级的重点学生
                cid: this.className[0].cid
            })
            // if(data.code === 1){
            //     this.getGradeList({  //获取成绩列表
            //     cid: this.studentLists[0].stuid
            // })
            // }
        }
    }
})
</script>
<style scoped lang="scss">
@import "../scss/charts.scss"
</style>