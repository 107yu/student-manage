<template>
  <div id="app">
    <!-- <Header></Header> -->
    <div class="main">
      <div>
        <router-view/>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>
<script>
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import BScroll from "better-scroll"
export default {
    data(){
        return {
           
        }
    },
    components:{
       Header,
       Sidebar
    },
    computed:{
     
    },
    methods:{
     
    },
    created(){

    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(".main")
      })
    }
}
</script>
<style lang="scss">
@import "./scss/index.scss"
</style>
