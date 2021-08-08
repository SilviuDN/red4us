(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(24),o=n.n(s),r=(n(72),n(73),n(2)),i=n(9),h=n(106),l=n(11),j=n(1),d=function(){return Object(j.jsxs)(h.a,{children:[Object(j.jsx)("h1",{children:"IndexPage"}),Object(j.jsx)(l.b,{to:"phones/",className:"btn btn-primary",children:"Phones"}),Object(j.jsx)(l.b,{className:"btn btn-success",to:"phones/new",children:"New Phone"})]})},p=n(15),u=n(21),b=n(23),m=n(22),O=n(107),x=n(109),g=n(108),f=n(37),v=n.n(f),P=function e(){var t=this;Object(p.a)(this,e),this.getPhones=function(){return t.app.get("/")},this.getPhone=function(e){return t.app.get("phone/".concat(e))},this.newPhone=function(e){return t.app.post("/new",e)},this.editPhone=function(e,n){return t.app.put("/edit/".concat(e),n)},this.app=v.a.create({baseURL:"https://red4us.herokuapp.com/api/phones"})},N=n(65),C=n(113),y=function(e,t){return e.length>t?e.slice(0,t-1)+"...":e},w=(n(62),function(e){var t=e.name,n=e.description,a=e.imageFileName,c=e._id;return Object(j.jsx)(N.a,{md:4,children:Object(j.jsxs)(C.a,{className:"cardImage",children:[Object(j.jsx)(C.a.Img,{variant:"top",src:a,className:"phoneCardImage"}),Object(j.jsxs)(C.a.Body,{children:[Object(j.jsx)(C.a.Title,{children:t}),Object(j.jsx)(C.a.Text,{children:y(n,70)}),Object(j.jsx)(l.b,{to:"/phones/".concat(c),children:Object(j.jsx)(O.a,{variant:"primary",children:"Phone Details"})})]})]})})}),I=(n(101),function(e){var t=e.size,n={width:t,height:t};return Object(j.jsx)("div",{className:"spinner",style:n})}),S=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.loadPhones()},e.state={phones:void 0,modal:!1},e.phonesService=new P,e}return Object(u.a)(n,[{key:"loadPhones",value:function(){var e=this;this.phonesService.getPhones().then((function(t){return e.setState({phones:t.data,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return void 0===this.state.phones?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{size:60}),Object(j.jsx)("h1",{children:"The list goes here..."})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("hr",{}),Object(j.jsx)(g.a,{children:this.state.phones.map((function(e){return Object(j.jsx)(w,Object(r.a)({},e),e._id)}))})]})}}]),n}(a.Component),k=n(8),F=n(110),M=function e(){var t=this;Object(p.a)(this,e),this.uploadimage=function(e){return t.app.post("/image",e)},this.app=v.a.create({baseURL:"https://red4us.herokuapp.com/api/upload"})},L=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState({phone:Object(r.a)(Object(r.a)({},e.state.phone),{},Object(k.a)({},a,c))})},e.handleFormSubmit=function(t){t.preventDefault(),e.phonesService.newPhone(e.state.phone).then((function(t){e.setState({phone:{name:"",manufacturer:"",description:"",color:"",price:"",imageFileName:"",screen:"",processor:"",ram:""},loading:!1}),e.props.refreshPhonesPage&&e.props.refreshPhonesPage(),e.props.closeNewPhoneModal&&e.props.closeNewPhoneModal(),e.props.history&&e.props.history.push("/phones")})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){e.setState({loading:!0});var n=new FormData;n.append("imageData",t.target.files[0]),e.uploadsService.uploadimage(n).then((function(t){return e.setState({phone:Object(r.a)(Object(r.a)({},e.state.phone),{},{imageFileName:t.data.cloudinary_url}),loading:!1})})).catch((function(e){return console.log(e)}))},e.state={phone:{name:void 0,manufacturer:void 0,description:void 0,color:void 0,price:void 0,imageFileName:void 0,screen:void 0,processor:void 0,ram:void 0},loading:!1},e.phonesService=new P,e.uploadsService=new M,e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(h.a,{children:[Object(j.jsx)(l.b,{className:"btn btn-success",to:"/",children:"Index Page"}),Object(j.jsx)(l.b,{to:"/phones",className:"btn btn-primary",children:"Phones"}),Object(j.jsxs)(F.a,{onSubmit:this.handleFormSubmit,children:[Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"name",children:[Object(j.jsx)(F.a.Label,{children:"Name"}),Object(j.jsx)(F.a.Control,{name:"name",type:"text",placeholder:"Product name",value:this.state.phone.name,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"manufacturer",children:[Object(j.jsx)(F.a.Label,{children:"Manufacturer"}),Object(j.jsx)(F.a.Control,{name:"manufacturer",type:"text",placeholder:"Product manufacturer",value:this.state.phone.manufacturer,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"description",children:[Object(j.jsx)(F.a.Label,{children:"Description"}),Object(j.jsx)(F.a.Control,{name:"description",type:"text",placeholder:"Product description",value:this.state.phone.description,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"color",children:[Object(j.jsx)(F.a.Label,{children:"Color"}),Object(j.jsx)(F.a.Control,{name:"color",type:"text",placeholder:"Product color",value:this.state.phone.color,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"price",children:[Object(j.jsx)(F.a.Label,{children:"Price"}),Object(j.jsx)(F.a.Control,{name:"price",type:"number",placeholder:"Product price",value:this.state.phone.price,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"imageFile",children:[Object(j.jsx)(F.a.Label,{children:"Image:"}),Object(j.jsx)(F.a.Control,{name:"imageFile",type:"file",onChange:this.handleFileUpload})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"screen",children:[Object(j.jsx)(F.a.Label,{children:"Screen"}),Object(j.jsx)(F.a.Control,{name:"screen",type:"text",placeholder:"Product screen",value:this.state.phone.screen,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"processor",children:[Object(j.jsx)(F.a.Label,{children:"Processor"}),Object(j.jsx)(F.a.Control,{name:"processor",type:"text",placeholder:"Product processor",value:this.state.phone.processor,onChange:this.handleInputChange})]}),Object(j.jsxs)(F.a.Group,{className:"mb-3",controlId:"ram",children:[Object(j.jsx)(F.a.Label,{children:"Ram"}),Object(j.jsx)(F.a.Control,{name:"ram",type:"number",placeholder:"Product ram",value:this.state.phone.ram,onChange:this.handleInputChange})]}),Object(j.jsxs)(O.a,{variant:"primary",type:"submit",disabled:this.state.loading,children:[this.state.loading?Object(j.jsx)(I,{size:30}):null,this.state.loading?"Uploading image":"Add New Product"]})]})]})}}]),n}(a.Component),G=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).closeNewPhoneModal=function(){e.setState({modal:!1})},e.openNewPhoneModal=function(){e.setState({modal:!0})},e.refreshPhonesPage=function(){var t,n;null===(t=e.props)||void 0===t||null===(n=t.history)||void 0===n||n.push("/phones")},e.state={modal:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(h.a,{children:[Object(j.jsx)(O.a,{variant:"secondary",onClick:this.openNewPhoneModal,children:"New Phone Modal"}),Object(j.jsx)(S,{},this.state.modal),Object(j.jsxs)(x.a,{show:this.state.modal,onHide:this.closeNewPhoneModal,children:[Object(j.jsx)(x.a.Header,{closeButton:!0,children:Object(j.jsx)(x.a.Title,{children:"New Phone"})}),Object(j.jsx)(x.a.Body,{children:Object(j.jsx)(L,{closeNewPhoneModal:this.closeNewPhoneModal,refreshPhonesPage:this.refreshPhonesPage})}),Object(j.jsxs)(x.a.Footer,{children:[Object(j.jsx)(O.a,{variant:"secondary",onClick:this.closeNewPhoneModal,children:"Close"}),Object(j.jsx)(O.a,{variant:"primary",onClick:this.closeNewPhoneModal,children:"Save Changes"})]})]})]})}}]),n}(a.Component),T=function(e){var t=e.name,n=e.manufacturer,a=e.description,c=e.color,s=e.price,o=e.screen,r=e.processor,i=e.ram,h=e.imageFileName;e._id;return Object(j.jsxs)(N.a,{md:{span:4,offset:4},children:[Object(j.jsxs)(C.a,{children:[Object(j.jsx)(C.a.Img,{variant:"top",src:h}),Object(j.jsxs)(C.a.Body,{children:[Object(j.jsx)(C.a.Title,{children:t}),Object(j.jsxs)(C.a.Subtitle,{children:[n," | Price:",Object(j.jsxs)("span",{className:"strikethrough",children:["  $",(1.15*s).toFixed(0),"  "]}),"$",s]}),Object(j.jsx)("hr",{}),Object(j.jsx)(C.a.Text,{children:a}),Object(j.jsxs)(C.a.Text,{className:"text-muted",children:[o," | ",r," | ",i," | ",c]})]})]}),Object(j.jsx)(l.b,{to:"/phones/",children:Object(j.jsx)(O.a,{size:"lg",variant:"primary",children:"Back to Phones list"})}),Object(j.jsx)(l.b,{className:"btn btn-primary lg",to:"/",children:"Back to Index"})]})},B=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={phone:void 0},e.phonesService=new P,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.phone_id;console.log(t),this.phonesService.getPhone(t).then((function(t){return e.setState({phone:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.phone?Object(j.jsx)(T,Object(r.a)({},this.state.phone)):Object(j.jsx)("h2",{children:"Getting phone info"})}}]),n}(a.Component),D=function(){return Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,render:function(){return Object(j.jsx)(d,{})}}),Object(j.jsx)(i.a,{path:"/phones",exact:!0,render:function(){return Object(j.jsx)(G,{})}}),Object(j.jsx)(i.a,{path:"/phones/new",render:function(){return Object(j.jsx)(L,{})}}),Object(j.jsx)(i.a,{path:"/phones/:phone_id",render:function(e){return Object(j.jsx)(B,Object(r.a)({},e))}})]})},U=n(112),_=n(111),z=(n(63),function(){return Object(j.jsx)(U.a,{bg:"light",expand:"md",fixed:"top",className:"navbarMenu",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(U.a.Brand,{href:"#home",children:"red4me"}),Object(j.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsxs)(U.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:[Object(j.jsxs)(_.a,{className:"me-auto",children:[Object(j.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"}),Object(j.jsx)(l.b,{to:"/phones",className:"nav-link",children:"Phones"})]}),Object(j.jsxs)(_.a,{className:"mr-auto",children:[Object(j.jsx)(_.a.Link,{href:"#home",children:"SignUp"}),Object(j.jsx)(_.a.Link,{href:"#link",children:"LogIn"})]})]})]})})}),H=function(){return Object(j.jsx)("footer",{className:"myUglyFooter",children:"This is a fake Phones App and pourchase intents should not be made."})};var R=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z,{}),Object(j.jsx)(D,{}),Object(j.jsx)(H,{})]})};o.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(R,{})})}),document.getElementById("root"))},62:function(e,t,n){},63:function(e,t,n){},72:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.59f66d8b.chunk.js.map