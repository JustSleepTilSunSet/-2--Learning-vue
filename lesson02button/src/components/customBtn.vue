<template>
    <div>
        <button v-on:click="clickEvent" >{{name}}</button>
        <div v-if="showAnswer">{{answer}}</div>
    </div>
</template>
<script>
    import answerBridge from './models/answerBridge';
    export default{
    name: 'customBtn',
    data(){
        return{
            name:"顯示答案",
            showAnswer: false,
            answer:4321
        }
    },
    methods: {
      clickEvent(event) {
        let btnNameTable = {
            [true]:"顯示答案",
            [false]:"隱藏答案"
        } 
        // `this` inside methods points to the current active instance.
        // ref:https://vuejs.org/guide/essentials/event-handling.html#method-handlers
        // `event` is the native DOM event
        if (event) {
        //   alert(event.target.tagName)
            this.name = btnNameTable[this.showAnswer];
            this.showAnswer=!this.showAnswer;
        }
      }
    },
    mounted(){//掛載的時候訂閱事件
      answerBridge.$on("generateAnswerByComponent", (e) => {
        console.log(e);
        this.answer = e;
      })
    }
  } 
</script>
