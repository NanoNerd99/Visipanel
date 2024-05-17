import{r as j,j as e,G as n,S as l,a7 as d,aq as E,ar as F,aa as A,B as I,T as x,as as g,at as k}from"./index-DZH-vqNu.js";import{F as q,c as W,a as u,E as C,b as R,A as L}from"./EyeInvisibleOutlined-n6yBSHgV.js";import{I as p,F as o,L as y,B as D}from"./Link-CF52p6VW.js";const N=s=>new RegExp(/[0-9]/).test(s),M=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),T=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),$=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},z=s=>{let r=0;return s.length>5&&(r+=1),s.length>7&&(r+=1),N(s)&&(r+=1),T(s)&&(r+=1),M(s)&&(r+=1),r};function G(){const[s,r]=j.useState(),[h,b]=j.useState(!1),v=()=>{b(!h)},P=i=>{i.preventDefault()},f=i=>{const t=z(i);r($(t))};return j.useEffect(()=>{f("")},[]),e.jsx(e.Fragment,{children:e.jsx(q,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:()=>{console.log("hi")}},validationSchema:W().shape({firstname:u().max(255).required("First Name is required"),lastname:u().max(255).required("Last Name is required"),email:u().email("Must be a valid email").max(255).required("Email is required"),password:u().max(255).required("Password is required")}),children:({errors:i,handleBlur:t,handleChange:m,handleSubmit:S,isSubmitting:B,touched:a,values:c})=>e.jsx("form",{noValidate:!0,onSubmit:S,children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsxs(n,{item:!0,xs:12,md:6,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(d,{id:"firstname-login",type:"firstname",value:c.firstname,name:"firstname",onBlur:t,onChange:m,placeholder:"John",fullWidth:!0,error:!!(a.firstname&&i.firstname)})]}),a.firstname&&i.firstname&&e.jsx(o,{error:!0,id:"helper-text-firstname-signup",children:i.firstname})]}),e.jsxs(n,{item:!0,xs:12,md:6,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(d,{fullWidth:!0,error:!!(a.lastname&&i.lastname),id:"lastname-signup",type:"lastname",value:c.lastname,name:"lastname",onBlur:t,onChange:m,placeholder:"Doe",inputProps:{}})]}),a.lastname&&i.lastname&&e.jsx(o,{error:!0,id:"helper-text-lastname-signup",children:i.lastname})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"company-signup",children:"Company"}),e.jsx(d,{fullWidth:!0,error:!!(a.company&&i.company),id:"company-signup",value:c.company,name:"company",onBlur:t,onChange:m,placeholder:"Demo Inc.",inputProps:{}})]}),a.company&&i.company&&e.jsx(o,{error:!0,id:"helper-text-company-signup",children:i.company})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(d,{fullWidth:!0,error:!!(a.email&&i.email),id:"email-login",type:"email",value:c.email,name:"email",onBlur:t,onChange:m,placeholder:"demo@company.com",inputProps:{}})]}),a.email&&i.email&&e.jsx(o,{error:!0,id:"helper-text-email-signup",children:i.email})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"password-signup",children:"Password"}),e.jsx(d,{fullWidth:!0,error:!!(a.password&&i.password),id:"password-signup",type:h?"text":"password",value:c.password,name:"password",onBlur:t,onChange:w=>{m(w),f(w.target.value)},endAdornment:e.jsx(E,{position:"end",children:e.jsx(F,{"aria-label":"toggle password visibility",onClick:v,onMouseDown:P,edge:"end",color:"secondary",children:h?e.jsx(C,{}):e.jsx(R,{})})}),placeholder:"******",inputProps:{}})]}),a.password&&i.password&&e.jsx(o,{error:!0,id:"helper-text-password-signup",children:i.password}),e.jsx(A,{fullWidth:!0,sx:{mt:2},children:e.jsxs(n,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(n,{item:!0,children:e.jsx(I,{sx:{bgcolor:s==null?void 0:s.color,width:85,height:8,borderRadius:"7px"}})}),e.jsx(n,{item:!0,children:e.jsx(x,{variant:"subtitle1",fontSize:"0.75rem",children:s==null?void 0:s.label})})]})})]}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(x,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Privacy Policy"})]})}),i.submit&&e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{error:!0,children:i.submit})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(k,{children:e.jsx(D,{disableElevation:!0,disabled:B,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})})}function J(){return e.jsx(L,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,children:e.jsxs(l,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(x,{variant:"h3",children:"Sign up"}),e.jsx(x,{component:g,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(G,{})})]})})}export{J as default};
