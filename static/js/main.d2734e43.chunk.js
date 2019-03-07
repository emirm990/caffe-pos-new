(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),s=a(2),i=a(3),c=a(6),m=a(4),u=a(5),p=a(9),d=a(8),h=a(16),f=(a(35),a(36),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card-container hoverable"},this.props.amount?l.a.createElement("button",{className:"btn waves-effect waves-light red hoverable",onClick:this.props.decreaseAmount},"X"):null,l.a.createElement("div",{className:"card cursor-pointer"},l.a.createElement("div",{className:"card-image",onClick:this.props.increaseAmount},l.a.createElement("img",{src:this.props.src,alt:this.props.title}),l.a.createElement("span",{className:"card-title teal lighten-1"},this.props.title)),l.a.createElement("div",{className:"card-content",onClick:this.props.increaseAmount},l.a.createElement("p",null,this.props.content),l.a.createElement("p",null,this.props.price," KM"," ",this.props.amount?l.a.createElement("span",null,l.a.createElement("span",null,"x ",this.props.amount),l.a.createElement("span",null," Total: ",this.props.total," KM ")):null)),l.a.createElement("div",{onClick:this.onOpenModal,className:"card-action cursor-pointer"},l.a.createElement("a",{className:"details-link"},"Details")))),l.a.createElement(h.a,{open:e,onClose:this.onCloseModal,center:!0,closeOnEsc:!0,closeOnOverlayClick:!0},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image margin-top"},l.a.createElement("img",{src:this.props.src,alt:this.props.title}),l.a.createElement("span",{className:"card-title teal lighten-1"},this.props.title)),l.a.createElement("div",{className:"card-content"},l.a.createElement("p",null,this.props.details)))))}}]),t}(n.Component)),E=function(e){return l.a.createElement("div",null,e.amount?l.a.createElement("p",null,e.item,l.a.createElement("span",null," x ",e.amount),l.a.createElement("span",null," = ",e.total," KM")):null)},b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getSum",value:function(e,t){return e+t}},{key:"render",value:function(){var e=this.props.list.reduce(function(e,t){return{total:e.total+t.total}});return l.a.createElement("div",null,this.props.list.map(function(e){return l.a.createElement(E,{key:e.title,item:e.title,amount:e.amount,total:e.total})}),e.total?l.a.createElement("p",{className:"collection-item no-padding-left border-top text-bold"},"Total: ",e.total," KM"):null)}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={items:[{id:0,src:"./img/coffe.jpg",title:"Coffe",content:"Hot Coffe",type:"Hot Drinks",price:1.5,amount:0,total:0,details:"Coffee the traditional way. A single shot of the strong, rich Signature Blend topped with the smoothest espresso crema you'll find anywhere. Served with a side of water."},{id:1,src:"./img/tea.jpg",title:"Tea",content:"Cup of Tea",type:"Hot Drinks",price:2,amount:0,total:0,details:"A fresh, fruity and complex flavor. This exotic medley has an enticing floral aroma with high notes of summer ripened mangoes and passion fruit."},{id:2,src:"./img/beer.jpg",title:"Beer",type:"Cold Drinks",content:"Cold Beer",price:3,amount:0,total:0,details:"An English style bitter with lots of Fuggle hops. A beautifully balanced beer from start to finish with loads of flavour. A rich amber colour, good balance of hops, citrusy hops and caramel on the nose."}],searchResults:[]},a.increaseAmount=function(e){return function(t){var n=Object(p.a)({},a.state);n.items[e.id].amount+=1,n.items[e.id].total=n.items[e.id].amount*n.items[e.id].price,a.setState(Object(p.a)({},n))}},a.decreaseAmount=function(e){return function(t){var n=Object(p.a)({},a.state);n.items[e.id].amount>0&&(n.items[e.id].amount-=1,n.items[e.id].total=n.items[e.id].amount*n.items[e.id].price,a.setState(Object(p.a)({},n)))}},a.search=a.search.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"search",value:function(e){var t=e.target.value,a=new RegExp(t,"i"),n=this.state.items.filter(function(e){return a.test(e.type)||a.test(e.title)});this.setState({searchResults:n})}},{key:"render",value:function(){var e=this,t=this.state.items;return t=this.state.searchResults.length?this.state.searchResults:this.state.items,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field container"},l.a.createElement("input",{id:"search",type:"text",onChange:this.search}),l.a.createElement("label",{htmlFor:"search"},"search")),l.a.createElement("ul",{className:"collection col s8 m8 l9 xl10"},t.map(function(t){return l.a.createElement("li",{className:"collection-item col s12 m6 l3 xl3",key:t.id},l.a.createElement(f,{increaseAmount:e.increaseAmount(t),decreaseAmount:e.decreaseAmount(t),id:t.id,src:t.src,title:t.title,content:t.content,price:t.price,amount:t.amount,total:t.total,details:t.details}))})),l.a.createElement("div",{className:"total collection col s4 m4 l3 xl2"},l.a.createElement("p",{className:"collection-item no-padding-left text-bold"},"Order: "),l.a.createElement(b,{list:t})))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(v,null)}}]),t}(n.Component);a(37),a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d2734e43.chunk.js.map