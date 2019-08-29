<template>
     <div class="line" :style="{width:'100%',height:'400px'}"></div>
</template>
<script>
export default {
    props:["student"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        drawLine(){
             // 基于准备好的dom，初始化echarts实例
            let line = this.$echarts.init(document.querySelector('.line'))
            console.log(this.student)
            // 绘制图表
            line.setOption({
                 title : {
                    text: this.student.stu_name+'同学日周考成绩统计图',
                    subtext: '纯属虚构'
                },
                tooltip : { //气泡提示框
                    trigger: 'axis'
                },
                legend: {
                    data:['技能','理论']
                },
                toolbox: { //辅助工具
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-08','08-09','08-10','08-11','08-12','08-13',]
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        boundaryGap : false,
                        data : ["0","20","40","60","80","100"]
                    }
                ],
                series : [
                    {
                        name:'技能',
                        type:'line',
                        data:[90, 87,89,90,80,94,98,93,89,87,87,89,94],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'理论',
                        type:'line',
                        data:[60,20,40,30,80,70,60,20,40,30,80,70,90],
                        markPoint : {
                            data : [
                                {name : '周最低', value : 0, xAxis: 1, yAxis: 1}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            });
        },
    },
    created(){

    },
    mounted(){
        this.drawLine();
    }
}
</script>
<style scoped lang="scss">
#line{
    padding: 20px;
}
</style>