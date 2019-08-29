<template>
     <div class="chart">
        <div class="choose">
            <div class="choose-left">选择班级：</div>
                <ul class="choose-right">
                    <li class="chooseActive">1703D</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                    <li>1704A</li>
                </ul>
                <div class="nameMenu">
                    <div class="menu-left">名  单：</div>
                    <div class="menu-right">张三，张立，王强 （3 /人）</div>
                </div>
            </div>
            <DrawLine/>
            <div id="mains"></div>
            <div class="method">
                 <div class="method-left">
                    <p>2019-08-30</p>
                    <p>今日分析及解决方案：</p>
                    <p>点击查看历史记录 ></p>
                </div>
                <div class="method-right">撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好</div>
            </div>
            <DrawColumnar/>
            <div id="mains"></div>
            <div class="method">
                 <div class="method-left">
                    <p>2019-08-30</p>
                    <p>今日分析及解决方案：</p>
                    <p>点击查看历史记录 ></p>
                </div>
                <div class="method-right">撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好</div>
            </div>
            <div class="talk">
                <ol>
                    <li>2019-8-8</li>
                    <li>撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格</li>
                </ol>
                <ol>
                    <li>2019-8-20</li>
                    <li>Secondary text</li>
                </ol>
                <ol>
                    <li>2019-8-19</li>
                    <li>Secondary text</li>
                </ol>
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
    .charts {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: #0076ff;
    color: white;
    font-size: 18px;
    text-align: center;
  }
}
.choose {
  position: relative;
  width: 100%;
  height: 180px;
  border: 1px solid rgba(187, 187, 187, 1);
  display: flex;
  .nameMenu {
    position: absolute;
    bottom: 0;
    line-height: 50px;
    font-size: 13px;
    width: 100%;
    height: 50px;
    display: flex;
    .menu-left {
      width: 10%;
      height: 100%;
      padding-left: 70px;
    }
    .menu-right {
      width: 80%;
      height: 100%;
      margin-left: 40px;
    }
  }
  .choose-left {
    width: 10%;
    height: 85%;
    padding-top: 22px;
    font-size: 13px;
    padding-left: 50px;
  }
  .choose-right {
    width: 80%;
    height: 70%;
    display: flex;
    padding-top: 15px;
    flex-wrap: wrap;
    margin-left: 40px;
    li {
      width: 95px;
      height: 30px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(230, 241, 252, 1);
      text-align: center;
      border: 1px solid rgba(163, 208, 253, 1);
      line-height: 30px;
      text-align: center;
      color: #1989fa;
      font-size: 13px;
      margin-right: 50px;
    }
    .chooseActive {
      width: 92px;
      height: 30px;
      border-radius: 4px;
      background-color: rgba(24, 144, 255, 1);
      text-align: center;
      color: white;
      line-height: 30px;
      text-align: center;
    }
  }
}
#mains {
  width: 95%;
  margin-top: -20px;
}
.method {
  width: 100%;
  height: 100px;
  display: flex;
  background: rgba(0, 150, 136, 1);
  .method-left {
    width: 25%;
    height: 100%;
    font-size: 13px;
    left: 3px;
    top: 1664px;
    line-height: 20px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(0, 118, 255, 1);
    p {
      width: 100%;
      height: 33%;
      line-height: 23px;
      font-size: 13px;
      color: #3f51b5;
    }
    p:nth-child(3){
        color: #000;
    }
  }
  .method-right{
      color: #FFF;
      font-size: 18px;
  }
}
.talk {
  left: 3px;
  margin-top: 5px;
  width: 100%;
  height: 150px;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(63, 81, 181, 1);
  ol{
    width: 90%;
    margin-left: 5%;
    li{
      width: 100%;
      height: 25px;
      color:#555;
      font-size: 13px;
      line-height: 25px;
    }
  }
}
</style>