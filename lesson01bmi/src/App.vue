<template>
  <div id="app">
    <h3>Root instance!</h3>
    <div id="testinggogo">
      <h3>{{msg}}</h3>
      <label>Weight(kg):</label>
      <input id="inputWeight" type="text" v-model="weightMessage" />
      <br/>
      <label>Height(m):</label>
      <input type="text" v-model="heightMessage" />
      <br/>
      <my-component v-bind:weight="weightMessage" v-bind:height="heightMessage"></my-component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
console.log(`${Vue.version}`);

let mainVueInstance = new Vue({
  el:"#app",
  data:{
    weightMessage: 32,
    heightMessage: 34,
    msg:"這是外層元件"
  }
});
console.log(`${mainVueInstance.weightMessage}`);
Vue.component('my-component',{ //根結點
  props:['weight','height'],
  data(){
    return {
      msg:'這是內部元件'
    }
  },
  methods: {
      BMI: function (){
        const weight = Number(this.weight);
        const height = Number(this.height) / 100;
        const bmi = weight / (height * height);
        return bmi || 0;
    }
  },
  template:'<div><div>{{weight}}</div> <div>{{height}}</div> <div>{{BMI()}}</div></div>'//對應樣式
})

export default {
    name: 'App',
    components:{
      // Height,
      // Weight,
      // custombutton
    },
    data(){
      return mainVueInstance;
    },
    ins:mainVueInstance
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
