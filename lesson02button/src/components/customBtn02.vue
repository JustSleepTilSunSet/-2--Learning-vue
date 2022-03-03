<template>
    <div>
        <button v-on:click="clickEvent" >{{name}}</button>
    </div>
</template>
<script>
    import answerBridge from './models/answerBridge';

    export default{
    name: 'customBtn02',
    data(){
        return{
            answer: 476674,
            name:"產生答案"
        }
    },
    methods: {
      clickEvent(event) {
          alert('答案更新了!');
          answerBridge.$emit("generateAnswerByComponent",this.answer);
          this.$emit("generateAnswerByComponent", this.answer);
      }
    }
  } 
</script>
