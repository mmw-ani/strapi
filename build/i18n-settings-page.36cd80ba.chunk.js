"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3552],{72751:(F,S,t)=>{t.r(S),t.d(S,{default:()=>Ue});var e=t(67294),d=t(87631),T=t(45697),i=t.n(T),p=t(86896),Z=t(185),L=t(53979),C=t(29728),B=t(49066),I=t(89722),W=t(96315),z=t(86031),u=t(8181),a=t(57813),f=t(14916),v=t(85018),h=t(42866),x=t(24969),E=t(75515),j=t(59946),U=t(82777),R=t(11047),A=t(77296),w=t(70004),k=t(41580),P=t(42761),q=t(36856),H=t(87561);const _=(0,H.Ry)().shape({code:(0,H.Z_)().required(),displayName:(0,H.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(d.I0.required)});var K=t(86706),$=t(7982);const re=()=>{const[n,s]=(0,e.useState)(!1),o=(0,K.I0)(),l=(0,d.lm)(),{put:c}=(0,d.kY)();return{isEditing:n,editLocale:async(m,g)=>{try{s(!0);const{data:y}=await c(`/i18n/locales/${m}`,g);l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.edit.success")}}),o({type:$.OT,editedLocale:y})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}};var ee=t(11276),V=t(74571),me=t(40619),ue=t(82562),te=t(16364),ge=t(88767),fe=t(14087);const ae=()=>{const{formatMessage:n}=(0,p.Z)(),{notifyStatus:s}=(0,fe.G)(),o=(0,d.lm)(),{get:l}=(0,d.kY)(),{isLoading:c,data:r}=(0,ge.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:m}=await l("/i18n/iso-locales");return s(n({id:(0,a.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),m}catch{return o({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:r,isLoading:c}},le=({locale:n})=>{const{formatMessage:s}=(0,p.Z)(),{values:o,handleChange:l,errors:c}=(0,f.u6)(),{defaultLocales:r,isLoading:m}=ae(),g=!m&&r.find(y=>y.code===n.code);return e.createElement(ee.r,{gap:4},e.createElement(V.P,{col:6},e.createElement(me.P,{label:s({id:(0,a.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:g?.code||n.code,disabled:!0},e.createElement(ue.W,{value:g?.code||n.code},g?.name||n.code))),e.createElement(V.P,{col:6},e.createElement(te.o,{name:"displayName",label:s({id:(0,a.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,a.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?s({id:(0,a.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:l})))},ve=le;le.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}).isRequired};var ne=t(36213);const se=({isDefaultLocale:n})=>{const{values:s,setFieldValue:o}=(0,f.u6)(),{formatMessage:l}=(0,p.Z)();return e.createElement(ne.X,{name:"isDefault",hint:l({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!s.isDefault),value:s.isDefault,disabled:n},l({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};se.propTypes={isDefaultLocale:i().bool.isRequired};const he=se,G=({locale:n,onClose:s})=>{const{refetchPermissions:o}=(0,d.vn)(),{isEditing:l,editLocale:c}=re(),{formatMessage:r}=(0,p.Z)(),m=async({displayName:g,isDefault:y})=>{await c(n.id,{name:g,isDefault:y}),await o()};return e.createElement(h.P,{onClose:s,labelledBy:"edit-locale-title"},e.createElement(f.J9,{initialValues:{code:n?.code,displayName:n?.name||"",isDefault:Boolean(n?.isDefault)},onSubmit:m,validationSchema:_},e.createElement(d.l0,null,e.createElement(x.x,null,e.createElement(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},r({id:(0,a.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(j.f,null,e.createElement(U.v,{label:r({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(E.Z,{as:"h2"},r({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(A.m,null,e.createElement(A.O,null,r({id:(0,a.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(A.O,null,r({id:(0,a.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(w.i,null),e.createElement(k.x,{paddingTop:7,paddingBottom:7},e.createElement(P.n,null,e.createElement(P.x,null,e.createElement(ve,{locale:n})),e.createElement(P.x,null,e.createElement(he,{isDefaultLocale:Boolean(n&&n.isDefault)})))))),e.createElement(q.m,{startActions:e.createElement(C.z,{variant:"tertiary",onClick:s},r({id:"app.components.Button.cancel"})),endActions:e.createElement(C.z,{type:"submit",startIcon:e.createElement(v.Z,null),disabled:l},r({id:"global.save"}))}))))};G.defaultProps={locale:void 0},G.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}),onClose:i().func.isRequired};const Ee=G,pe=()=>{const[n,s]=(0,e.useState)(!1),o=(0,K.I0)(),l=(0,d.lm)(),{del:c}=(0,d.kY)();return{isDeleting:n,deleteLocale:async m=>{try{s(!0),await c(`/i18n/locales/${m}`),l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.delete.success")}}),o({type:$.HC,id:m})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},Y=({localeToDelete:n,onClose:s})=>{const{isDeleting:o,deleteLocale:l}=pe(),c=Boolean(n),r=()=>l(n.id).then(s);return e.createElement(d.QH,{isConfirmButtonLoading:o,onConfirm:r,onToggleDialog:s,isOpen:c})};Y.defaultProps={localeToDelete:void 0},Y.propTypes={localeToDelete:i().shape({id:i().number.isRequired}),onClose:i().func.isRequired};const ye=Y;var Le=t(27361),Ce=t.n(Le);const xe=()=>{const[n,s]=(0,e.useState)(!1),o=(0,K.I0)(),l=(0,d.lm)(),{post:c}=(0,d.kY)();return{isAdding:n,addLocale:async m=>{s(!0);try{const{data:g}=await c("/i18n/locales",m);l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.create.success")}}),o({type:$.xz,newLocale:g})}catch(g){const y=Ce()(g,"response.payload.message",null);throw y&&y.includes("already exists")?l({type:"warning",message:{id:(0,a.O)("Settings.locales.modal.create.alreadyExist")}}):l({type:"warning",message:{id:"notification.error"}}),g}finally{s(!1)}}}};var Me=t(29178),Se=t(90608);const Q=e.memo(({value:n,onClear:s,onLocaleChange:o,error:l})=>{const{formatMessage:c}=(0,p.Z)(),{defaultLocales:r,isLoading:m}=ae(),{locales:g}=(0,u.Z)(),y=(r||[]).map(M=>({label:M.name,value:M.code})).filter(({value:M})=>{const D=g.find(({code:N})=>N===M);return!D||D.code===n}),b=n||"";return e.createElement(Me.hQ,{"aria-busy":m,error:l,label:c({id:(0,a.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:b,onClear:n?s:void 0,onChange:M=>{const D=y.find(N=>N.value===M);D&&o({code:D.value,displayName:D.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"})},y.map(M=>e.createElement(Se.O,{value:M.value,key:M.value},M.label)))});Q.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},Q.propTypes={error:i().string,onClear:i().func,onLocaleChange:i().func,value:i().string};const Oe=Q,De=()=>{const{formatMessage:n}=(0,p.Z)(),{values:s,handleChange:o,setFieldValue:l,errors:c}=(0,f.u6)(),r=(0,e.useCallback)(g=>{l("displayName",g.displayName),l("code",g.code)},[l]),m=(0,e.useCallback)(()=>{l("displayName",""),l("code","")},[l]);return e.createElement(ee.r,{gap:4},e.createElement(V.P,{col:6},e.createElement(Oe,{error:c.code,value:s.code,onLocaleChange:r,onClear:m})),e.createElement(V.P,{col:6},e.createElement(te.o,{name:"displayName",label:n({id:(0,a.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?n({id:(0,a.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:o})))},Te=()=>{const{values:n,setFieldValue:s}=(0,f.u6)(),{formatMessage:o}=(0,p.Z)();return e.createElement(ne.X,{hint:o({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!n.isDefault),value:n.isDefault},o({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},be={code:"",displayName:"",isDefault:!1},oe=({onClose:n})=>{const{isAdding:s,addLocale:o}=xe(),{formatMessage:l}=(0,p.Z)(),{refetchPermissions:c}=(0,d.vn)(),r=async m=>{await o({code:m.code,name:m.displayName,isDefault:m.isDefault}),await c()};return e.createElement(h.P,{onClose:n,labelledBy:"add-locale-title"},e.createElement(f.J9,{initialValues:be,onSubmit:r,validationSchema:_,validateOnChange:!1},e.createElement(d.l0,null,e.createElement(x.x,null,e.createElement(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},l({id:(0,a.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(j.f,null,e.createElement(U.v,{label:l({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(E.Z,{as:"h2",variant:"beta"},l({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(A.m,null,e.createElement(A.O,null,l({id:(0,a.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(A.O,null,l({id:(0,a.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(w.i,null),e.createElement(k.x,{paddingTop:7,paddingBottom:7},e.createElement(P.n,null,e.createElement(P.x,null,e.createElement(De,null)),e.createElement(P.x,null,e.createElement(Te,null)))))),e.createElement(q.m,{startActions:e.createElement(C.z,{variant:"tertiary",onClick:n},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(C.z,{type:"submit",startIcon:e.createElement(v.Z,null),disabled:s},l({id:"global.save",defaultMessage:"Save"}))}))))};oe.propTypes={onClose:i().func.isRequired};const Be=oe;var Re=t(38939),Ae=t(8060),ie=t(79031),O=t(37909),Pe=t(63237),Ze=t(15234),ce=t(12028),je=t(4585),Ne=t(20022);const X=({locales:n,onDeleteLocale:s,onEditLocale:o})=>{const{formatMessage:l}=(0,p.Z)();return e.createElement(Re.i,{colCount:4,rowCount:n.length+1},e.createElement(Ae.h,null,e.createElement(ie.Tr,null,e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.id")}))),e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.displayName")}))),e.createElement(O.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.default-locale")}))),e.createElement(O.Th,null,e.createElement(Pe.T,null,"Actions")))),e.createElement(Ze.p,null,n.map(c=>e.createElement(ie.Tr,{key:c.id,...(0,d.X7)({fn:()=>o(c),condition:o})},e.createElement(O.Td,null,e.createElement(E.Z,{textColor:"neutral800"},c.id)),e.createElement(O.Td,null,e.createElement(E.Z,{textColor:"neutral800"},c.name)),e.createElement(O.Td,null,e.createElement(E.Z,{textColor:"neutral800"},c.isDefault?l({id:(0,a.O)("Settings.locales.default")}):null)),e.createElement(O.Td,null,e.createElement(R.k,{gap:1,justifyContent:"flex-end",...d.UW},o&&e.createElement(ce.h,{onClick:()=>o(c),label:l({id:(0,a.O)("Settings.list.actions.edit")}),icon:e.createElement(je.Z,null),noBorder:!0}),s&&!c.isDefault&&e.createElement(ce.h,{onClick:()=>s(c),label:l({id:(0,a.O)("Settings.list.actions.delete")}),icon:e.createElement(Ne.Z,null),noBorder:!0})))))))};X.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},X.propTypes={locales:i().array,onDeleteLocale:i().func,onEditLocale:i().func};const Fe=X,J=({canUpdateLocale:n,canDeleteLocale:s,onToggleCreateModal:o,isCreating:l})=>{const[c,r]=(0,e.useState)(),[m,g]=(0,e.useState)(),{locales:y}=(0,u.Z)(),{formatMessage:b}=(0,p.Z)();(0,d.go)();const M=()=>r(void 0),D=s?r:void 0,N=()=>g(void 0),Ve=n?g:void 0;return e.createElement(Z.o,{tabIndex:-1},e.createElement(L.T,{primaryAction:e.createElement(C.z,{startIcon:e.createElement(W.Z,null),onClick:o,size:"S"},b({id:(0,a.O)("Settings.list.actions.add")})),title:b({id:(0,a.O)("plugin.name")}),subtitle:b({id:(0,a.O)("Settings.list.description")})}),e.createElement(B.D,null,y?.length>0?e.createElement(Fe,{locales:y,onDeleteLocale:D,onEditLocale:Ve}):e.createElement(I.x,{icon:e.createElement(z.Z,{width:void 0,height:void 0}),content:b({id:(0,a.O)("Settings.list.empty.title")}),action:o?e.createElement(C.z,{variant:"secondary",startIcon:e.createElement(W.Z,null),onClick:o},b({id:(0,a.O)("Settings.list.actions.add")})):null})),l&&e.createElement(Be,{onClose:o}),m&&e.createElement(Ee,{onClose:N,locale:m}),e.createElement(ye,{localeToDelete:c,onClose:M}))};J.defaultProps={onToggleCreateModal:void 0},J.propTypes={canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired,onToggleCreateModal:i().func,isCreating:i().bool.isRequired};const Ie=J,de=({canReadLocale:n,canCreateLocale:s,canDeleteLocale:o,canUpdateLocale:l})=>{const[c,r]=(0,e.useState)(!1),m=s?()=>r(g=>!g):void 0;return n?e.createElement(Ie,{canUpdateLocale:l,canDeleteLocale:o,onToggleCreateModal:m,isCreating:c}):null};de.propTypes={canReadLocale:i().bool.isRequired,canCreateLocale:i().bool.isRequired,canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired};const We=de;var ze=t(2135);const Ue=()=>{const{isLoading:n,allowedActions:{canRead:s,canUpdate:o,canCreate:l,canDelete:c}}=(0,d.ss)(ze.Z);return n?null:e.createElement(We,{canReadLocale:s,canCreateLocale:l,canUpdateLocale:o,canDeleteLocale:c})}},90608:(F,S,t)=>{t.d(S,{O:()=>d});var e=t(29178);const d=e.Wx},49066:(F,S,t)=>{t.d(S,{D:()=>T});var e=t(85893),d=t(41580);const T=({children:i})=>(0,e.jsx)(d.x,{paddingLeft:10,paddingRight:10,children:i})},53979:(F,S,t)=>{t.d(S,{T:()=>I});var e=t(85893),d=t(67294),T=t(71997);const i=u=>{const a=(0,d.useRef)(null),[f,v]=(0,d.useState)(!0),h=([x])=>{v(x.isIntersecting)};return(0,d.useEffect)(()=>{const x=a.current,E=new IntersectionObserver(h,u);return x&&E.observe(a.current),()=>{x&&E.disconnect()}},[a,u]),[a,f]};var p=t(79698);const Z=(u,a)=>{const f=(0,p.W)(a);(0,d.useLayoutEffect)(()=>{const v=new ResizeObserver(f);return Array.isArray(u)?u.forEach(h=>{h.current&&v.observe(h.current)}):u.current&&v.observe(u.current),()=>{v.disconnect()}},[u,f])};var L=t(41580),C=t(11047),B=t(75515);const I=u=>{const a=(0,d.useRef)(null),[f,v]=(0,d.useState)(null),[h,x]=i({root:null,rootMargin:"0px",threshold:0});return Z(h,()=>{h.current&&v(h.current.getBoundingClientRect())}),(0,d.useEffect)(()=>{a.current&&v(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:f?.height},ref:h,children:x&&(0,e.jsx)(z,{ref:a,...u})}),!x&&(0,e.jsx)(z,{...u,sticky:!0,width:f?.width})]})};I.displayName="HeaderLayout";const W=(0,T.ZP)(L.x)`
  width: ${({width:u})=>u?`${u/16}rem`:void 0};
  z-index: ${({theme:u})=>u.zIndices[1]};
`,z=d.forwardRef(({navigationAction:u,primaryAction:a,secondaryAction:f,subtitle:v,title:h,sticky:x,width:E,...j},U)=>{const R=typeof v=="string";return x?(0,e.jsx)(W,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:E,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(C.k,{justifyContent:"space-between",children:[(0,e.jsxs)(C.k,{children:[u&&(0,e.jsx)(L.x,{paddingRight:3,children:u}),(0,e.jsxs)(L.x,{children:[(0,e.jsx)(B.Z,{variant:"beta",as:"h1",...j,children:h}),R?(0,e.jsx)(B.Z,{variant:"pi",textColor:"neutral600",children:v}):v]}),f?(0,e.jsx)(L.x,{paddingLeft:4,children:f}):null]}),(0,e.jsx)(C.k,{children:a?(0,e.jsx)(L.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(L.x,{ref:U,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?(0,e.jsx)(L.x,{paddingBottom:2,children:u}):null,(0,e.jsxs)(C.k,{justifyContent:"space-between",children:[(0,e.jsxs)(C.k,{minWidth:0,children:[(0,e.jsx)(B.Z,{as:"h1",variant:"alpha",...j,children:h}),f?(0,e.jsx)(L.x,{paddingLeft:4,children:f}):null]}),a]}),R?(0,e.jsx)(B.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:v}):v]})})},185:(F,S,t)=>{t.d(S,{o:()=>p});var e=t(85893),d=t(71997),T=t(41580);const i=(0,d.ZP)(T.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,p=({labelledBy:Z="main-content-title",...L})=>(0,e.jsx)(i,{"aria-labelledby":Z,as:"main",id:"main-content",tabIndex:-1,...L})}}]);
