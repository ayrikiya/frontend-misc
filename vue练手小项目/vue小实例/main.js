/* jshint esversion:6*/
// 双向绑定小例
//  <input type="text" v-model="name">
//  <span v-show="name">你的名字是：{{name}}</span>
//  html里{{}}中的数据指向了vue 的js里绑定的#app下定义的data  这里是双向绑定 同时更新    input的v-model定义后可以改变data的数据
var app = new Vue({
  el: '#app',
  data: {
    name: 'A',
    age: 22,
    sex: null,
  }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
// v-for 指令
//<li v-for="food in foodList">{{food.name}}: ￥{{food.price}}</li>
var app1 = new Vue({
  el: '#app1',
  data: {
    foodList: [
        {
          name: '葱',
          price: 10,
        },
        {
          name: '姜',
          price: 5,
        },
        {
          name: '蒜',
          price: 3,
        },
    ],
  }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
//v-bind 指令   v-bind:class=""   v-bind可以省略 只保留：
//用于绑定数据和元素属性的
//   <a :class="{active: isActive}" v-bind:href="url">点我</a>
var app2 = new Vue({
  el: '#app2',
  data: {
    url: 'http://baidu.com',
    isActive: true,
  }
});

//——————————————————————————————————————————————————————————————————————————————————————————————————
//v-on 指令    和v-bind一样 也有简写 直接把v-on: 换成@
//  v-on="{mouseenter: onEnter, mouseleave: onOut}"     v-on:click="onClick"
// v-on:submit.prevent= "onSubmit"
// v-on:submit.stop= "onSubmit" 阻止冒泡事件
var app3 = new Vue({
  el: '#app3',
  methods: {
    onClick: function(){
      console.log("点击了");
    },
    onEnter:function(){
      console.log('ms enter');
    },
    onOut: function(){
      console.log('ms leave');
    },
    onSubmit: function(e){
      e.preventDefault();
      console.log('submitted');
    },
    onEnterkey:function(){
      console.log('key enter');
    },
  }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
// v-model 指令及其修饰符  修饰符   .lazy惰性更新    .trim去掉用户输入的值的前后空格  .number把输入的内容转化为数字 默认是字符串
// v-model除了在 <input type="text">中使用  还可以在<textarea>  <select>
// 单选框  v-model控制的一般是标签里的value
// <label>
//   男
//   <input type="radio" v-model="sex" value="male">
// </label>
// <label>
//   女
//   <input type="radio" v-model="sex" value="female">
// </label>
var app4 = new Vue({
  el: '#app4',
  data: {
    sex: 'male',
    checksex: [],
    article: `dsafdsgfdhgdfhsdfhdfhdfghsdfgdsfgsdgdfsgg`,
    from: '1',
    }
});

//——————————————————————————————————————————————————————————————————————————————————————————————————
// v-if v-else 指令
// <div v-if="role == 'admin'">
//   管理员你好
// </div>
// <div v-else-if="role == 'hr'">
//   简历页表
// </div>
// <div v-else>
//   您没有权限访问此页面
// </div>
var app5 = new Vue({
  el: '#app5',
  data: {
    role: 'admin'
    }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
// 计算属性
// <table>
//   <thead>
//     <th>学科</th>
//     <th>分数</th>
//   </thead>
//   <tbody>
//     <tr>
//       <td>数学</td>
//       <td><input type="text" v-model.number="math"></td>
//     </tr>
//     <tr>
//       <td>物理</td>
//       <td><input type="text" v-model.number="physics"></td>
//     </tr>
//     <tr>
//       <td>英语</td>
//       <td><input type="text" v-model.number="english"></td>
//     </tr>
//     <tr>
//       <td>总分</td>
//       <td>{{sum}}</td>
//     </tr>
//     <tr>
//       <td>平均分</td>
//       <td>{{average}}</td>
//     </tr>
//   </tbody>
// </table>
var app6 = new Vue({
  el: '#app6',
  data: {
    math: 90,
    physics: 98,
    english: 99,
  },
  computed: {
    sum: function (){
      return this.math +this.physics + this.english;
      // return parseFloat(this.math)  保险起见可以用parseFloat转一下数据类型
    },
    average: function(){
      return Math.round(this.sum / 3);

    }
  }
});
// ———————————————————————————————————————————————————————————————————————————————————————————————
// 组件！！！！！！！！！！！！
// 定义组件
// Vue.component('alert', {
//   template: '<button @click="on_click">warning warning</button>',
//   methods: {
//     on_click: function(){
//       alert('Yo..');
//     }
//   }
// });
// 定义好了 给他一个域
// new Vue({
//   el: '#seg1',
// })

// 这种方式就是全局变量一样全局可见了  需要在定义域里写component


// Vue.component('alert', );   这里就不用了

// new Vue({
//   el: '#seg1',
//   components: {
//     'alert':{
//       template: '<button @click="on_click">warning warning</button>',
//       methods: {
//         on_click: function(){
//           alert('Yo..');
//         }
//       }
//     }
//   }
// });

// 更简单的封装
var alert_component = {
  template: '<button @click="on_click">warning warning</button>',
  methods: {
    on_click: function(){
      alert('Yo..');
    }
  }
};

// new Vue({
//   el: '#seg1',
//   components: {
//     'alert': alert_component,
//   }
// });
// ____________________________________________________________________________________
// 点赞组件：
var like_component = {
  template: '<button @click="toggle_like()">⚡ {{like_count}} </button>',
  data: function(){
    return {
      like_count:10,
      liked: false,
    }
  },
  methods: {
    toggle_like: function() {
      if (!this.liked)
        this.like_count++;
      else
        this.like_count--;
      this.liked = !this.liked;
    }
  }
};
// new Vue({
//   el: '#seg1',
//   components: {
//     'alert': alert_component,
//     'like': like_component,
//   }
// });

// 比较好的方式是在html里写这个template 然后在js里传选择器就行
// 例如
// <template id="like-component-tpl">
//   <button @click="toggle_like()">⚡ {{like_count}} </button>
// </template>
//
// 然后在js里
// Vue.component('like',{
//   template: '#like-component-tpl',
//   data: function(){
//     return {
//       like_count:10,
//       liked: false,
//     }
//   },
//   methods: {
//     toggle_like: function() {
//       if (!this.liked)
//         this.like_count++;
//       else
//         this.like_count--;
//       this.liked = !this.liked;
//     }
//   }
// });
// new Vue({
//   el: '#seg1',
// });

//——————————————————————————————————————————————————————————————————————————————————————————————————
// 组件 父子通信
// <alert msg="我是传入的信息"></alert>
var alert_changable_component = {
  template: '<button @click="on_click">warning warning</button>',
  props:['msg'],
  methods: {
    on_click: function(){
      alert(this.msg);
    }
  },
};

var seg1test = new Vue({
  el: '#seg1',
  components: {
    // 'alert': alert_component,
    'like': like_component,
    'alert': alert_changable_component,
  }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
//动态改变路由
// <div id="seg3">
// <user username="whh"></user>
// </div>
var seg3 = new Vue({
  el: '#seg3',
  components: {
    'user': {
      template: `<a :href="'/user/' + username">{{username}}</a>`,
      props:['username'],
      methods: {},
    },
  }
});

//——————————————————————————————————————————————————————————————————————————————————————————————————
// 组件 子父通信
// 注意局部注册的组件在其子组件中不可用。 先声明子组件 再声明父组件
var show_component = {
  template: '<button @click="on_click()">显示余额</button>',
  methods: {
    on_click(){
      this.$emit('show-balance', {a: 1, b: 2});
    }
  }
};

var balance_component = {
  components: {
    'show': show_component,
  },
  template: `
  <div>
    <show @show-balance="show_balance"></show>
    <div v-if="show">您的余额为999999999999</div>
  </div>
  `,
  methods: {
    show_balance: function(data){
      this.show = true;
      console.log('data',data);
    }
  },
  data: function(){
    return {
      show: false,
    }
  }
};


var app7 = new Vue({
  el: '#seg2',
  components: {
    'show': show_component,
    'balance': balance_component,
  }
});
//——————————————————————————————————————————————————————————————————————————————————————————————————
// 平级组件间的通信
// 定义一个外部的 事件的调度器 调度两个component的通信
var Event = new Vue();

var huahua_component = {
  template : `
    <div>
    我huahua说:<input @keyup="on_change" v-model="i_said">
    </div>
  `,
  data: function(){
    return {
      i_said: '',
    }
  },
  methods :{
    on_change: function(){
// 触发一个事件
      Event.$emit('huahua-said-something', this.i_said);
    }

  }
};

var shuandan_component = {
  template : `
    <div>
    花花说:{{huahua_said}}
    </div>
  `,
  data: function(){
    return {
      huahua_said: '',
    }
  },
// mounted 钩子函数 垃圾程序员装逼说法 其实就是表示dom生命的一个节点 每个dom都有生命周期 这里表示初始化完成的节点 在此时做了一些事情
  mounted: function() {
    me = this;
// 监听这个事件
    Event.$on('huahua-said-something', function(data) {
// 域改变了 这里再用this 表示的是event这个调度器 这个调度器调用了这个函数 所以要在前面me = this 保存dom的this
      me.huahua_said = data;
    });
  }
};


var app8 = new Vue({
  el: '#app8',
  components: {
    'huahua': huahua_component,
    'shuandan': shuandan_component,
  }
});


//——————————————————————————————————————————————————————————————————————————————————————————————————
// filter 过滤器
Vue.filter('currency', function(val, unit){
  val = val || 0;
  unit = unit || '元';
  return val + unit;
});

var app9 = new Vue({
  el: '#app9',
  data:{
    price: 10
  }
})
