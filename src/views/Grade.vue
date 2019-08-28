<template>
    <div class="grade">
        <HeaderTitle title="XXX学生日周考试成绩统计表"></HeaderTitle>
        <div class="title">
            <div>
                <span>XXX讲师</span>
                <span>XXX学生</span>
            </div>
            <select>
                <option value="">快速选择学生</option>
            </select>
            <span class="titleDelete">X</span>
        </div>
        <div class="content">
            <ul>
                <li>
                    <span>序号</span>
                    <span>日期</span>
                    <span>理论</span>
                    <span>技能</span>
                    <span class="solve">分析与解决</span>
                    <span>是否周考</span>
                    <div>
                        <span>操作</span>
                    </div>
                </li>
                <li>
                    <span>1</span>
                    <span>11-30</span>
                    <span>30</span>
                    <span>60</span>
                    <span class="solve">分析与分析与解决解决</span>
                    <span>是</span>
                    <div>
                        <span @click="dialogVisible = true">编辑</span>
                        <el-dialog
                            title="编辑内容"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <div class="choose">
                                <span>理论：</span>
                                <input type="text" placeholder="0-100之间的数字">
                            </div>
                            <div class="choose">
                                <span>技能：</span>
                                <input type="text" placeholder="0-100之间的数字">
                            </div>
                            <div class="day">
                                <span>日考</span>
                                <span>周考</span>
                            </div>
                            <div class="choose">
                                <span>解决方案：</span>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>
                        <span @click="open2">删除</span>
                    </div>
                </li>
                <li>
                    <span>1</span>
                    <span>11-30</span>
                    <span>30</span>
                    <span>60</span>
                    <span class="solve">分析与解决分析与解决分析与解决分析与解决分析与解决分析与解决分析与解决</span>
                    <span>是</span>
                    <div>
                        <span>编辑</span>
                        <span @click="open2">删除</span>
                    </div>
                </li>
            </ul>
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
            dialogVisible: false
        }
    },
    computed:{

    },
    methods:{
         open2() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.grade{
    width: 100%;
    height: 100%;
}
.title{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border:1px solid #aaa;
    margin:10px;
    position: relative;
}
.title>div{
    display: flex;
    span{
       margin:0 10px;
    }
}
.title select{
    height: 30px;
    width: 200px;
}
.titleDelete{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    color:#fff;
    background: #000;
    position: absolute;
    font-size: 12px;
    top:24px;
    right:20px;
}
.content{
    border-top:1px solid #aaa;
    border-left:1px solid #aaa;
    border-right:1px solid #aaa;
    margin:10px;
}
.content ul li{
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 1px solid #aaa;
}
li>span{
    width: 100px;
    text-align: center;
    flex-shrink: 0;
}
li>div{
    width: 100px;
    display: flex;
    justify-content: center;
}
li>div>span{
    margin:0 5px;
}
.solve{
    flex: 1;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    white-space:nowrap;
}
.content ul li span{
    text-align: center;
}
.choose{
    display: flex;
    margin:10px 0;
    span{
       width: 80px;
    }
    input{
        height: 30px;
        width: 50%;
        padding-left: 10px;
    }
}
.day{
    display: flex;
    justify-content: center;
    span{
        padding: 10px 20px;
        margin:0 10px;
        border:1px solid #ccc;
    }
}
</style>