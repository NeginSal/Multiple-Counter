(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),r=n.n(s),i=n(7),u=n.n(i),a=(n(14),n(2)),j=n(3),o=n(5),b=n(4),l=(n(15),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{class:"header",children:Object(c.jsx)("h2",{children:Object(c.jsx)("a",{href:"#default",children:" Multiple Counter"})})})}}]),n}(s.Component)),h=(n(16),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={counter:0},c}return Object(j.a)(n,[{key:"OnIncrement",value:function(){this.setState({counter:this.state.counter+1})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"counter-box",children:[Object(c.jsx)("h1",{children:this.state.counter}),Object(c.jsx)("button",{class:"btn0",onClick:this.OnIncrement.bind(this),children:"Run"})]})}}]),n}(s.Component)),O=(n(17),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={isClicked:!1,counterAmount:0},c}return Object(j.a)(n,[{key:"CreateCounter",value:function(){this.setState({isClicked:!0,counterAmount:this.state.counterAmount+1})}},{key:"render",value:function(){for(var t=[],e=0;e<this.state.counterAmount;e+=1)t.push(Object(c.jsx)(h,{},e));return Object(c.jsxs)("div",{className:"addcounter",children:[Object(c.jsxs)("center",{children:[Object(c.jsx)("input",{className:"txt",type:"text",value:""}),Object(c.jsx)("button",{class:"btn4",onClick:this.CreateCounter.bind(this),children:" Add Counter "})]}),Object(c.jsx)("center",{children:t})]})}}]),n}(s.Component)),d=(n(18),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState({count:c.state.count+1})},c.state={count:0},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App1",children:[Object(c.jsxs)("p",{class:"p1",children:["Step:1",Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:Object(c.jsx)("h1",{children:this.state.count})})]}),Object(c.jsx)("button",{class:"btn1",onClick:this.increment,children:"Run"})]})}}]),n}(s.Component)),x=(n(19),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState({count:c.state.count+3})},c.state={count:0},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App2",children:[Object(c.jsxs)("p",{class:"p2",children:["Step:3",Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:Object(c.jsx)("h1",{children:this.state.count})})]}),Object(c.jsx)("button",{class:"btn2",onClick:this.increment,children:"Run"})]})}}]),n}(s.Component)),f=(n(20),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState({count:c.state.count-2.6})},c.state={count:0},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App3",children:[Object(c.jsxs)("p",{class:"p3",children:["Step:-2",Object(c.jsx)("hr",{}),Object(c.jsx)("b",{children:Object(c.jsx)("h1",{children:this.state.count})})]}),Object(c.jsx)("button",{class:"btn3",onClick:this.increment,children:"Run"})]})}}]),n}(s.Component)),p=n(8),v=n.n(p),m=(n(27),function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(O,{}),Object(c.jsx)(d,{}),Object(c.jsx)(x,{}),Object(c.jsx)(f,{}),Object(c.jsx)(v.a,{})]})}}]),n}(s.Component)),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),r(t),i(t)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),C()}],[[28,1,2]]]);
//# sourceMappingURL=main.22cb49d2.chunk.js.map