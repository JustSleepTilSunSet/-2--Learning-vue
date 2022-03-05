<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <userInput @getUserAnswerByComponent = "getUserAnswer"></userInput>
    <CustomBtn></CustomBtn>
    <CustomBtn02 @generateAnswerByComponent = "generateAnswer"></CustomBtn02>
    {{publishedBooksMessage}}
  </div>
</template>

<script>
import CustomBtn from './components/customBtn.vue';
import CustomBtn02 from './components/customBtn02.vue';
import userInput from './components/userInput.vue';
import * as GameRule from './components/models/gameOperation';
/**
 * 1. 兄弟元件互傳底板
 * 2. 子元件傳到父原件
 */
export default {
  name: 'App',
  data(){
    return{
        question:"",
        userAnswer:""
    }
  },
  components:{//定義子元件集合
    CustomBtn,
    CustomBtn02,
    userInput
  },
  methods: {
    generateAnswer(question) { //定義父元件方法
      this.question = question;
      console.log('get question in main ',question);
    },
    getUserAnswer(userAnswer){
      this.userAnswer = userAnswer;
      console.log("userAnswer in main: ",userAnswer);
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      console.log(`${this.question+""} , ${this.userAnswer+""}`);
      if(this.question+""==''){
        alert('先產生答案吧！');
        return "先產生答案吧！";
      }
      return JSON.stringify(GameRule.guessResult(this.question+"",this.userAnswer+""),null,2);
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
