<template>
    <div class="show">
        <HeaderTitle title="重点关注学生考试成绩统计图"></HeaderTitle>
        <div class="class">
            <span>切换班级：</span>
            <ul>
                <li v-for="(item,index) in className" :key="index">{{item}}</li>
            </ul>
            <p>创建班级</p>
        </div>
        <div class="addStudent">
            <span>添加学生</span>
            <input type="text" placeholder="输入血红色呢个姓名">
            <input type="number" placeholder="末位次数">
            <input type="text" placeholder="结对子">
            <span>添加</span>
        </div>
       <DrawLine></DrawLine>
        <div class="resolve">
            <span>添加成绩</span>
            <span>添加解析方案</span>
        </div>
        <!-- <DrawColumnar></DrawColumnar> -->
        <div class="add">
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
        </div>
    </div>
</template>
<script>

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            className:["1703C","1703E","1703F"],
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
        }
    },
    computed:{

    },
    methods:{
      
    },
    created(){

    },
    mounted(){
       
    }
}
</script>
<style scoped lang="scss">
.show{
    width: 100%;
    height: 100%;
}
.class{
    display: flex;
    padding: 20px;
    border:1px solid #aaa;
    margin:20px;
    ul{
        display: flex;
        li{
            padding: 10px 20px;
            border:1px solid skyblue;
            background: skyblue;
            color:blue;
            margin:0 10px;
        }
    }
    p{
        padding: 10px 20px;
        border:1px solid #aaa;
        margin:0 10px; 
    }
}
.addStudent{
    margin:20px;
    padding: 10px;
    input{
        margin: 0 10px;
        height: 30px;
        padding-left:10px;
    }
}
.resolve{
    margin:20px;
    padding: 10px;
    display: flex;
    span{
        padding: 10px 20px;
    }
}
.add{
    display: flex;
    padding: 20px 100px;
    justify-content:center;
}
.add>div{
    border:1px solid #aaa;
    padding:20px;
    margin:0 100px;
}
.add input{
    height: 30px;
    padding-left: 10px;
}
.add>div>div{
    margin:20px 0;
    display: flex;
}
.addGrade  span,.addAnalysis span{
    display: inline-block;
    width: 100px;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.handle{
   float:right;
    
}
.handle b{
    padding: 5px 10px;
    border:1px solid #aaa;
    margin:0 10px;
    font-weight: 500;
}
.handle .addShow{
    background: skyblue;
    color: #fff;
    border:0;
}
</style>