(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),o=a.n(c),i=a(3),r=a(4),s=a(6),m=a(5),u=a(7),d=a(2),p=a(1),h=(a(16),function(e){return l.a.createElement("div",{className:"card-container hoverable"},e.amount?l.a.createElement("button",{className:"btn waves-effect waves-light red hoverable",onClick:e.decreaseAmount},"X"):null,l.a.createElement("div",{className:"card",onClick:e.handleClick},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.src,alt:e.title}),l.a.createElement("span",{className:"card-title"},e.title)),l.a.createElement("div",{className:"card-content"},l.a.createElement("p",null,e.content),l.a.createElement("p",null,e.price," KM"," ",e.amount?l.a.createElement("span",null,l.a.createElement("span",null,"x ",e.amount),l.a.createElement("span",null," Total: ",e.total," KM ")):null))))}),f=function(e){return l.a.createElement("div",null,e.amount?l.a.createElement("p",null,e.item,l.a.createElement("span",null," x ",e.amount),l.a.createElement("span",null," = ",e.total," KM")):null)},E=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={items:[{id:0,src:"./img/coffe.jpg",title:"Coffe",content:"Hot Coffe",type:"Hot Drinks",price:1.5,amount:0,total:0},{id:1,src:"./img/tea.jpg",title:"Tea",content:"Cup of Tea",type:"Hot Drinks",price:2,amount:0,total:0},{id:2,src:"./img/beer.jpg",title:"Beer",type:"Cold Drinks",content:"Cold Beer",price:3,amount:0,total:0}],searchResults:[]},a.increaseAmount=function(e){return function(t){var n=Object(d.a)({},a.state);n.items[e.id].amount+=1,n.items[e.id].total=n.items[e.id].amount*n.items[e.id].price,console.log(n),a.setState(Object(d.a)({},n))}},a.decreaseAmount=function(e){return function(t){var n=Object(d.a)({},a.state);n.items[e.id].amount>0&&(n.items[e.id].amount-=1,n.items[e.id].total=n.items[e.id].amount*n.items[e.id].price,console.log(n),a.setState(Object(d.a)({},n)))}},a.search=a.search.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getSum",value:function(e,t){return e+t}},{key:"search",value:function(e){var t=e.target.value,a=new RegExp(t,"i"),n=this.state.items.filter(function(e){return a.test(e.type)||a.test(e.title)});this.setState({searchResults:n})}},{key:"render",value:function(){var e=this,t=this.state.items;t=this.state.searchResults.length?this.state.searchResults:this.state.items;var a=this.state.items,n=a.reduce(function(e,t){return{total:e.total+t.total}});return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field container"},l.a.createElement("input",{id:"search",type:"text",onChange:this.search}),l.a.createElement("label",{htmlFor:"search"},"search")),l.a.createElement("ul",{className:"collection col s8 m8 l9 xl10"},t.map(function(t){return l.a.createElement("li",{className:"collection-item col s12 m6 l3 xl3",key:t.id},l.a.createElement(h,{handleClick:e.increaseAmount(t),decreaseAmount:e.decreaseAmount(t),id:t.id,src:t.src,title:t.title,content:t.content,price:t.price,amount:t.amount,total:t.total}))})),l.a.createElement("div",{className:"total collection col s4 m4 l3 xl2"},l.a.createElement("p",{className:"collection-item no-padding-left text-bold"},"Order: "),a.map(function(e){return l.a.createElement(f,{key:e.title,item:e.title,amount:e.amount,total:e.total})}),n.total?l.a.createElement("p",{className:"collection-item no-padding-left border-top text-bold"},"Total: ",n.total," KM"):null))}}]),t}(n.Component)),b=function(){return l.a.createElement(E,null)},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(b,null)}}]),t}(n.Component);a(18),a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.1c2802c6.chunk.js.map