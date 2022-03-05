<template>
    <div>
        <button v-on:click="clickEvent" >{{name}}</button>
    </div>
</template>
<script>
    import answerBridge from './models/answerBridge';
    import * as GameQuestion from './models/generateQuestion';
    import * as GameRule from './models/gameOperation';

    export default{
    name: 'customBtn02',
    data(){
        return{
            answer: "default",
            name:"產生答案"
        }
    },
    methods: {
      clickEvent(event) {
          alert('答案更新了!');
          let question = GameQuestion.generateQuestion();
          while(!GameRule.isValidQuestion(question+"")){
            question = GameQuestion.generateQuestion();
          }
          this.answer = question;
          answerBridge.$emit("generateAnswerByComponent",this.answer);
          this.$emit("generateAnswerByComponent", this.answer);
      }
    }
  } 
</script>
