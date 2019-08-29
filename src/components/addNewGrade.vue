<template> 
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
        <div><span>技能：</span><input type="number" min="0" max="100" placeholder="数字"></div>
        <div><span>理论：</span><input type="number" min="0" max="100" placeholder="0-100之间的数字"></div>
        <div class="handle">
            <b @click="handle">取消</b>
            <b class="addShow" @click="handle('cancle')">确定</b>
        </div>
    </div>
</template>
<script>
import Vue from "vue"
export default Vue.extend({
    props:["status","seen","student"],
    components:{

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
        }
    },
    computed:{

    },
    methods:{
        handle(type){
            if(type === 'cancle'){

            }
            this.$emit("handle",false)
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