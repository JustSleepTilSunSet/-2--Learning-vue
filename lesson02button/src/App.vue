<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <CustomBtn></CustomBtn>
    <CustomBtn02 @generateAnswerByComponent = "generateAnswer"></CustomBtn02>
  </div>
</template>

<script>
import CustomBtn from './components/customBtn.vue';
import CustomBtn02 from './components/customBtn02.vue';
/**
 * 1. 兄弟元件互傳底板
 * 2. 子元件傳到父原件
 */
export default {
  name: 'App',
  components:{//定義子元件集合
    CustomBtn,
    CustomBtn02
  },
  methods: {
    generateAnswer(event) { //定義父元件方法
      console.log(event);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
