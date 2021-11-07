(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(16),o=n.n(a),r=(n(21),n(22),n(3)),i=n(4),l=n(6),d=n(5),j=n(2),u=n(8),h=n(0),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark navbar-style",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/#",children:"eCommerce"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{to:"/",className:"nav-link",children:"Login"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{to:"/dashboard",className:"nav-link",children:"Dashboard"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{to:"/cart",className:"nav-link",children:"Shopping Cart"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.b,{to:"/customers",className:"nav-link",children:"Customers"})})]})})]})})})}}]),n}(c.Component),b=n(10),m=n.n(b),O=n(13),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).onLoginClick=Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c.state),e.next=3,fetch("https://my-first-react-ecommerce-app.herokuapp.com/users?email=".concat(c.state.email,"&password=").concat(c.state.password),{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),n.length>0?(console.log(n),c.setState({message:Object(h.jsx)("span",{className:"text-success",children:"Successfully logged-in!"})})):c.setState({message:Object(h.jsx)("span",{className:"text-danger",children:"Invalid login, please try again!"})});case 9:case"end":return e.stop()}}),e)}))),c.state={email:"",password:"",message:""},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"m-2 p-2 border-bottom",children:"Login"}),Object(h.jsxs)("div",{className:"form-group form-row m-2",children:[Object(h.jsx)("label",{className:"col-lg-4",children:"Email:"}),Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})]}),Object(h.jsxs)("div",{className:"form-group form-row m-2",children:[Object(h.jsx)("label",{className:"col-lg-4",children:"Password:"}),Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})]}),Object(h.jsxs)("div",{className:"m-2",children:[this.state.message,Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:this.onLoginClick,children:"Login"})]})]})}}]),n}(c.Component),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("h4",{children:"Dashboard"})}}]),n}(c.Component),f=n(14),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),c=t.call(this,e),console.log("constructor - Product"),c.state={product:c.props.product},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log("render - Product"),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"card m-2",children:[Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"text-muted",children:["# ",this.state.product.id,Object(h.jsx)("span",{className:"pull-right hand-icon",onClick:function(){e.props.onDelete(e.state.product)},children:Object(h.jsx)("i",{className:"fa fa-times"})})]}),Object(h.jsx)("h5",{className:"pt-2 border-top",children:this.state.product.productName}),Object(h.jsxs)("div",{children:["$",this.state.product.price]})]}),Object(h.jsxs)("div",{className:"card-footer",children:[Object(h.jsxs)("div",{className:"pull-left",children:[Object(h.jsx)("span",{className:"badge text-dark",children:this.state.product.quantity}),Object(h.jsxs)("div",{className:"btn-group mb-2",children:[Object(h.jsx)("button",{className:"btn btn-outline-success",onClick:function(){e.props.onIncrement(e.state.product,10)},children:"+"}),Object(h.jsx)("button",{className:"btn btn-outline-success",onClick:function(){e.props.onDecrement(e.state.product,0)},children:"-"})]})]}),Object(h.jsx)("div",{className:"pull-right",children:this.props.children})]})]})})}},{key:"componentDidMount",value:function(){console.log("componentDidMount - Product")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate - Product")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount - Product")}}]),n}(c.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),console.log("constructor - ShoppingCart"),(c=t.call(this,e)).componentDidMount=Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("componentDidMount - ShoppingCart"),e.next=3,fetch("https://my-first-react-ecommerce-app.herokuapp.com/products",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c.setState({products:n});case 8:case"end":return e.stop()}}),e)}))),c.handleIncrement=function(e,t){var n=Object(f.a)(c.state.products),s=n.indexOf(e);n[s].quantity<t&&(n[s].quantity++,c.setState({products:n}))},c.handleDecrement=function(e,t){var n=Object(f.a)(c.state.products),s=n.indexOf(e);n[s].quantity>t&&(n[s].quantity--,c.setState({products:n}))},c.handleDelete=function(e){var t=Object(f.a)(c.state.products),n=t.indexOf(e);window.confirm("Are you sure to delete?")&&(t.splice(n,1),c.setState({products:t}))},c.state={products:[]},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log("render - ShoppingCart"),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"m-2",children:"Shopping Cart"}),Object(h.jsx)("div",{className:"row",children:this.state.products.map((function(t){return Object(h.jsx)(g,{product:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete,children:Object(h.jsx)("button",{className:"btn btn-primary",children:"Buy Now"})},t.id)}))})]})}},{key:"componentDidUpdate",value:function(e,t){e.x!==this.props.x&&console.log("ComponentDidUpdate - ShoppingCart",e,t,this.props,this.state)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount - ShoppingCart")}}]),n}(c.Component),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={pageTitle:"Customers",customersCount:5,customers:[{id:1,name:"Scott",phone:"123-456",address:{city:"Elista"},photo:"https://picsum.photos/id/1010/60"},{id:2,name:"Victoria",phone:"789-101",address:{city:"London"},photo:"https://picsum.photos/id/1011/60"},{id:3,name:"Jamie",phone:"121-314",address:{city:"Stockholm"},photo:"https://picsum.photos/id/1012/60"},{id:4,name:"Timofey",phone:null,address:{city:"New York"},photo:"https://picsum.photos/id/1013/60"},{id:5,name:"Sophie",phone:null,address:{city:"Edinburgh"},photo:"https://picsum.photos/id/1014/60"}]},e.onRefreshClick=function(){e.setState({customersCount:7})},e.getPhoneToRender=function(e){return e||Object(h.jsx)("div",{className:"bg-warning p-2 text-center",children:"No phone"})},e.getCustomerRow=function(){return e.state.customers.map((function(t,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.id}),Object(h.jsxs)("td",{children:[Object(h.jsx)("img",{src:t.photo,alt:"customer pic"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){e.onChangePicClick(t,n)},children:"Change Picture"})})]}),Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:e.getPhoneToRender(t.phone)}),Object(h.jsx)("td",{children:t.address.city})]},t.id)}))},e.onChangePicClick=function(t,n){var c=e.state.customers;c[n].photo="https://picsum.photos/id/104/60",e.setState({customers:c})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h4",{className:"m-1 p-1",children:[this.state.pageTitle,Object(h.jsx)("span",{className:"badge badge-secondary m-2 text-primary",children:this.state.customersCount}),Object(h.jsx)("button",{className:"btn btn-info",onClick:this.onRefreshClick,children:"Refresh"})]}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Photo"}),Object(h.jsx)("th",{children:"Customer Name"}),Object(h.jsx)("th",{children:"Phone"}),Object(h.jsx)("th",{children:"City"})]})}),Object(h.jsx)("tbody",{children:this.getCustomerRow()})]})]})}}]),n}(c.Component),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h4",{children:"Page not found"})})}}]),n}(c.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",exact:!0,element:Object(h.jsx)(x,{})}),Object(h.jsx)(j.a,{path:"/dashboard",exact:!0,element:Object(h.jsx)(v,{})}),Object(h.jsx)(j.a,{path:"/cart",exact:!0,element:Object(h.jsx)(N,{})}),Object(h.jsx)(j.a,{path:"/customers",exact:!0,element:Object(h.jsx)(y,{})}),Object(h.jsx)(j.a,{path:"*",element:Object(h.jsx)(C,{})})]})})]})}}]),n}(c.Component);n(25);o.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8c916cd1.chunk.js.map