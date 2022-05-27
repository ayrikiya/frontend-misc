let view = new Vue({
    el: '#app',
    data:{
      open: false
    },
    template:`
      <div>
          <button v-on:click="toggle">点我</button>
          <div v-if="open">
            你好
          </div>
      </div>
    `,
    methods: {
      toggle(){
        this.open = !this.open
      }
    }
  })