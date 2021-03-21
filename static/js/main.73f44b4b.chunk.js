(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={searchForm:"searchForm_searchForm__3odRv",searchForm__title:"searchForm_searchForm__title__2qYMl"}},13:function(t,e,n){t.exports={container:"container_container__2LSvJ"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(15),i=n(2),l=n(3),u=n(5),h=n(4),m=n(13),b=n.n(m),d=n(0),j=function(t){var e=t.children;return Object(d.jsxs)("div",{className:b.a.container,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(d.Fragment,{children:e})]})},_=n(14),f=n(10),O=n.n(f),p=n(6),v=n.n(p),C=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.onSubmit)({id:O.a.generate(),name:a,number:c}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=O.a.generate();return Object(d.jsxs)("form",{className:v.a.addContactForm,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{htmlFor:a,className:v.a.addContactForm__label,children:[Object(d.jsx)("h3",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:a,value:e,onChange:this.handleChange})]}),Object(d.jsxs)("label",{htmlFor:a,className:v.a.addContactForm__label,children:[Object(d.jsx)("h3",{children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",id:a,value:n,onChange:this.handleChange})]}),Object(d.jsx)("button",{className:v.a.addContactForm__button,type:"submit",children:Object(d.jsx)("span",{children:"Add contact"})})]})}}]),n}(a.Component),x=n(7),g=n.n(x),F=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.children,a=t.onClick;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:g.a.contacts__title,children:"Contacts"}),Object(d.jsx)(d.Fragment,{children:n}),Object(d.jsx)("ul",{className:g.a.contacts__list,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(d.jsxs)("li",{className:g.a.list__item,children:[n,": ",c,Object(d.jsx)("button",{id:e,className:g.a.list__button,type:"button",onClick:a,children:"Delete"})]},e)}))})]})}}]),n}(a.Component),y=n(11),S=n.n(y),k=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleSubmit=function(t){t.preventDefault()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onChange;return Object(d.jsx)("form",{className:S.a.searchForm,onSubmit:this.handleSubmit,children:Object(d.jsxs)("label",{children:[Object(d.jsx)("h3",{className:S.a.searchForm__title,children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",value:e,onChange:n})]})})}}]),n}(a.Component),N=(n(29),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.getAndAddContact=function(e){t.isContactExist(e)&&t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t.isContactExist=function(e){var n=t.state.contacts,a=!0;return n.forEach((function(t){t.name.toLowerCase()===e.name.toLowerCase()&&(alert("".concat(e.name," is already in contacts")),a=!1)})),a},t.setFilterState=function(e){e.preventDefault();var n=e.currentTarget.value;t.setState({filter:n})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j,{children:[Object(d.jsx)(C,{onSubmit:this.getAndAddContact}),Object(d.jsx)(F,{contacts:e,onClick:this.deleteContact,children:Object(d.jsx)(k,{filter:t,onChange:this.setFilterState})})]})})}}]),n}(a.Component));o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={addContactForm:"form_addContactForm__kr0oT",addContactForm__label:"form_addContactForm__label__3qFDO",addContactForm__button:"form_addContactForm__button__4whYR"}},7:function(t,e,n){t.exports={contacts__title:"contactList_contacts__title__1vDtH",contacts__list:"contactList_contacts__list__1-uQu",list__item:"contactList_list__item__2K98p",list__button:"contactList_list__button__QJ9ck"}}},[[30,1,2]]]);
//# sourceMappingURL=main.73f44b4b.chunk.js.map