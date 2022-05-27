let view = new Vue({
  el: '#app',
  data:{
    selected: 'a',
    tabs: [
      {name: 'a', content: 'aaa'},
      {name: 'b', content: 'bbb'},
      {name: 'c', content: 'ccc'},
    ]
  },
  template:`
<div>
    <ol>
      <li v-for="tab in tabs"
        v-on:click="selected = tab.name"
        v-bind:class="{active: tab.name === selected}"
      >{{ tab.name }}</li>
    </ol>
    <ol>
      <li v-for="tab in tabs"
        v-show="selected === tab.name"
      >{{ tab.content }}</li>
      
    </ol>
</div>
  `,
  methods: {
    
  }
})