<template>
    <div>
        <label> 輸入四位數字 </label>
        <br/>
        <label> 使用者輸入 </label>
        <input v-model="userAnswer">
        <p> 您的猜測答案: {{ userAnswer }} </p>
        <button v-on:click="clickEvent" > {{btnName}} </button>
    </div>
</template>
<script>
    import * as GameRule from './models/gameOperation';

    export default{
    name: 'userInput',
    data(){
        return{
            userAnswer:"default",
            btnName:"提交答案"
        }
    },
    methods: {
        clickEvent(event) {
            //to-do: alert button listener.
            alert('已經提交答案');
            console.log(`userAnswer: ${this.userAnswer}`);
            this.$emit("getUserAnswerByComponent", this.userAnswer);
        }
    },
    updated(){
        let contextStartIndex = 0;
        if(this.userAnswer.length > 4){
            this.userAnswer = this.userAnswer.substring(0,4);
        }
        let validInput = GameRule.isValidQuestion(this.userAnswer);
        if(!validInput){
            alert("不合理的輸入！！");
            let reverseContext = this.userAnswer+""; 
            this.userAnswer = reverseContext.slice(contextStartIndex,reverseContext.length-1);
        }
    }
  } 
</script>
