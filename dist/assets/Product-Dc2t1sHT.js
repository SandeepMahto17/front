import{e as f,r as x,j as s,h as g,B as N,l as c}from"./index-BskvJ3vC.js";import{B as v,S as y}from"./Banner-BIRm0sre.js";import{p,u as e}from"./useWindowScrollToTop-CzpOMlXl.js";import{C as m,R as b,a as t}from"./style-DH03fi21.js";const C=({selectedProduct:a})=>{const i=f(),[r,h]=x.useState(1),j=l=>{h(l.target.value)},n=(l,o)=>{i(g({product:l,num:o})),N.success("Product has been added to cart!")};return s.jsx("section",{className:"product-page",children:s.jsx(m,{children:s.jsxs(b,{className:"justify-content-center",children:[s.jsx(t,{md:6,children:s.jsx("img",{loading:"lazy",src:a==null?void 0:a.imgUrl,alt:""})}),s.jsxs(t,{md:6,children:[s.jsx("h2",{children:a==null?void 0:a.productName}),s.jsxs("div",{className:"rate",children:[s.jsxs("div",{className:"stars",children:[s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"})]}),s.jsxs("span",{children:[a==null?void 0:a.avgRating," ratings"]})]}),s.jsxs("div",{className:"info",children:[s.jsxs("span",{className:"price",children:["$",a==null?void 0:a.price]}),s.jsxs("span",{children:["category:",a==null?void 0:a.category]})]}),s.jsx("p",{children:a==null?void 0:a.shortDesc}),s.jsx("input",{className:"qty-input",type:"number",placeholder:"Qty",value:r,onChange:j}),s.jsx("button",{"aria-label":"Add",type:"submit",className:"add",onClick:()=>n(a,r),children:"Add To Cart"})]})]})})})},S=({selectedProduct:a})=>{const[i,r]=x.useState("desc");return s.jsx("section",{className:"product-reviews",children:s.jsxs(m,{children:[s.jsxs("ul",{children:[s.jsx("li",{style:{color:i==="desc"?"black":"#9c9b9b"},onClick:()=>r("desc"),children:"Description"}),s.jsxs("li",{style:{color:i==="rev"?"black":"#9c9b9b"},onClick:()=>r("rev"),children:["Reviews (",a==null?void 0:a.reviews.length,")"]})]}),i==="desc"?s.jsx("p",{children:a==null?void 0:a.description}):s.jsx("div",{className:"rates",children:a==null?void 0:a.reviews.map(h=>s.jsxs("div",{className:"rate-comment",children:[s.jsx("span",{children:"Jhon Doe"}),s.jsxs("span",{children:[h.rating," (rating)"]}),s.jsx("p",{children:h.text})]},h.rating))})]})})},I=()=>{const{id:a}=c(),[i,r]=x.useState(p.filter(n=>parseInt(n.id)===parseInt(a))[0]),[h,j]=x.useState([]);return x.useEffect(()=>{window.scrollTo(0,0),r(p.filter(n=>parseInt(n.id)===parseInt(a))[0]),j(p.filter(n=>n.category===(i==null?void 0:i.category)&&n.id!==(i==null?void 0:i.id)))},[i,a]),e(),s.jsx(s.Fragment,{children:s.jsxs(x.Fragment,{children:[s.jsx(v,{title:i==null?void 0:i.productName}),s.jsx(C,{selectedProduct:i}),s.jsx(S,{selectedProduct:i}),s.jsxs("section",{className:"related-products",children:[s.jsx(m,{children:s.jsx("h3",{children:"You might also like"})}),s.jsx(y,{productItems:h})]})]})})};export{I as default};
