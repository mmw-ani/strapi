"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8571],{28571:(ae,T,e)=>{e.r(T),e.d(T,{default:()=>D});var i=e(67294),R=e(86896),x=e(7681),F=e(54574),H=e(19270),P=e(63428),M=e(96404),A=e(45697),n=e.n(A),g=e(71997);const B=g.iv`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 1.68em;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 1.36em;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.15em;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: .75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    blockquote {
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`,O=g.iv`
`,N=g.iv`
  .ck {
    --ck-color-toolbar-background: rgb(24, 24, 38);
    --ck-color-text: rgb(165, 165, 186);
    --ck-color-editor-base-text: rgb(255, 255, 255);
    --ck-color-toolbar-border: rgb(74, 74, 106);
    --ck-color-base-border: rgb(74, 74, 106);
    --ck-color-base-background: rgb(33, 33, 52);
    --ck-color-button-default-background: rgb(33, 33, 52);
    --ck-color-list-button-hover-background: rgb(24, 24, 38);
    --ck-color-button-default-hover-background: rgb(33, 33, 52);
    --ck-color-button-on-background: rgb(33, 33, 52);
    --ck-color-button-on-hover-background: rgb(33, 33, 52);
    --ck-color-button-default-active-background: rgb(33, 33, 52);
  }
  .ck-word-count {
    color: rgb(165, 165, 186)
  }
`,V=a=>{let o=null;switch(a){case"dark":o=N;break;case"light":o=O;break}return g.vJ`
    ${B}
    ${o}
  `};var re=e(77868),le=e(53844),de=e(98491),se=e(6378),ge=e(67564),ce=e(15535),me=e(29410),we=e(20978),ue=e(60145),be=e(99416),he=e(78590),Ce=e(29781),pe=e(5978),fe=e(56961),Ee=e(11093),ve=e(64621),Ke=e(4986),ke=e(66665),ye=e(96461),Te=e(46609),Se=e(54132),Ie=e(51207),Le=e(58174),ze=e(6653),Re=e(47655);const G=window.CKEditor5.core.Plugin,W=window.CKEditor5.ui.ButtonView,Q='<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3.6a.9.9 0 100 1.8h15.311a.9.9 0 100-1.8H4.301zm17.1 3.7A1.6 1.6 0 0123 5.9v15.5a1.6 1.6 0 01-1.6 1.6H2.6A1.601 1.601 0 011 21.4V8 5.915C1 5.03 1.716 4.3 2.6 4.3h18.8zM5.032 19.18h14.336l-3.136-3.205-1.792 1.831-4.032-4.12-5.376 5.494zm13.44-8.697c0 1.282-.985 2.289-2.24 2.289-1.254 0-2.24-1.007-2.24-2.29 0-1.281.986-2.288 2.24-2.288 1.255 0 2.24 1.007 2.24 2.289z"></path></svg>';class w extends G{strapiToggle=null;static get pluginName(){return"strapiMediaLib"}init(){this.editor.ui.componentFactory.add("strapiMediaLib",()=>{const t=new W;return t.set({label:"Media Library",icon:Q,tooltip:!0}),t.on("execute",this.toggle.bind(this)),t})}connect(o){if(typeof o!="function")throw new Error("Input parameter for toogle should be a function");this.strapiToggle=o}toggle(){if(typeof this.strapiToggle!="function")throw new Error("Strapi media library toggle function not connected. Use connect function first");this.strapiToggle()}}const u={light:{plugins:[window.CKEditor5.autoformat.Autoformat,window.CKEditor5.basicStyles.Bold,window.CKEditor5.basicStyles.Italic,window.CKEditor5.essentials.Essentials,window.CKEditor5.heading.Heading,window.CKEditor5.image.Image,window.CKEditor5.image.ImageCaption,window.CKEditor5.image.ImageStyle,window.CKEditor5.image.ImageToolbar,window.CKEditor5.image.ImageUpload,window.CKEditor5.indent.Indent,window.CKEditor5.link.Link,window.CKEditor5.list.List,window.CKEditor5.paragraph.Paragraph,window.CKEditor5.pasteFromOffice.PasteFromOffice,window.CKEditor5.table.Table,window.CKEditor5.table.TableToolbar,window.CKEditor5.table.TableColumnResize,window.CKEditor5.table.TableCaption,window.CKEditor5.wordCount.WordCount,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","insertTable","|","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]}},standard:{plugins:[window.CKEditor5.autoformat.Autoformat,window.CKEditor5.basicStyles.Bold,window.CKEditor5.basicStyles.Italic,window.CKEditor5.blockQuote.BlockQuote,window.CKEditor5.codeBlock.CodeBlock,window.CKEditor5.essentials.Essentials,window.CKEditor5.heading.Heading,window.CKEditor5.image.Image,window.CKEditor5.image.ImageCaption,window.CKEditor5.image.ImageStyle,window.CKEditor5.image.ImageToolbar,window.CKEditor5.image.ImageUpload,window.CKEditor5.indent.Indent,window.CKEditor5.link.Link,window.CKEditor5.link.LinkImage,window.CKEditor5.list.List,window.CKEditor5.mediaEmbed.MediaEmbed,window.CKEditor5.paragraph.Paragraph,window.CKEditor5.pasteFromOffice.PasteFromOffice,window.CKEditor5.table.Table,window.CKEditor5.table.TableToolbar,window.CKEditor5.table.TableColumnResize,window.CKEditor5.table.TableCaption,window.CKEditor5.wordCount.WordCount,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","mediaEmbed","blockQuote","insertTable","codeBlock","|","bulletedList","numberedList","outdent","indent"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]}},rich:{plugins:[window.CKEditor5.alignment.Alignment,window.CKEditor5.autoformat.Autoformat,window.CKEditor5.basicStyles.Bold,window.CKEditor5.basicStyles.Italic,window.CKEditor5.basicStyles.Underline,window.CKEditor5.basicStyles.Strikethrough,window.CKEditor5.basicStyles.Code,window.CKEditor5.basicStyles.Subscript,window.CKEditor5.basicStyles.Superscript,window.CKEditor5.blockQuote.BlockQuote,window.CKEditor5.codeBlock.CodeBlock,window.CKEditor5.essentials.Essentials,window.CKEditor5.font.FontSize,window.CKEditor5.font.FontFamily,window.CKEditor5.font.FontColor,window.CKEditor5.font.FontBackgroundColor,window.CKEditor5.findAndReplace.FindAndReplace,window.CKEditor5.heading.Heading,window.CKEditor5.horizontalLine.HorizontalLine,window.CKEditor5.htmlEmbed.HtmlEmbed,window.CKEditor5.image.Image,window.CKEditor5.image.ImageCaption,window.CKEditor5.image.ImageStyle,window.CKEditor5.image.ImageToolbar,window.CKEditor5.image.ImageUpload,window.CKEditor5.image.ImageResize,window.CKEditor5.indent.Indent,window.CKEditor5.indent.IndentBlock,window.CKEditor5.link.Link,window.CKEditor5.link.LinkImage,window.CKEditor5.list.List,window.CKEditor5.list.ListProperties,window.CKEditor5.list.TodoList,window.CKEditor5.mediaEmbed.MediaEmbed,window.CKEditor5.paragraph.Paragraph,window.CKEditor5.pasteFromOffice.PasteFromOffice,window.CKEditor5.removeFormat.RemoveFormat,window.CKEditor5.specialCharacters.SpecialCharacters,window.CKEditor5.specialCharacters.SpecialCharactersEssentials,window.CKEditor5.table.Table,window.CKEditor5.table.TableToolbar,window.CKEditor5.table.TableProperties,window.CKEditor5.table.TableCellProperties,window.CKEditor5.table.TableColumnResize,window.CKEditor5.table.TableCaption,window.CKEditor5.wordCount.WordCount,window.CKEditor5.highlight.Highlight,w],toolbar:{items:["undo","redo","|","findAndReplace","selectAll","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","superscript","subscript","code","removeFormat","-","link","strapiMediaLib","mediaEmbed","insertTable","horizontalLine","blockQuote","codeBlock","htmlEmbed","specialCharacters","highlight","|","alignment","|","bulletedList","numberedList","todoList","outdent","indent"],shouldNotGroupWhenFull:!0},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},image:{resizeUnit:"%",resizeOptions:[{name:"resizeImage:original",value:null,icon:"original"},{name:"resizeImage:25",value:"25",icon:"small"},{name:"resizeImage:50",value:"50",icon:"medium"},{name:"resizeImage:75",value:"75",icon:"large"}],toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","imageStyle:mobile","imageStyle:desktop","|","toggleImageCaption","imageTextAlternative","|","linkImage","|","resizeImage:25","resizeImage:50","resizeImage:75","resizeImage:original","resizeImage:desktop"],styles:{options:["inline","block","side",{name:"mobile",title:"Mobile View",className:"xl:hidden block",modelElements:["imageBlock"]},{name:"desktop",title:"Desktop View",className:"hidden xl:block",modelElements:["imageBlock"]}]}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","tableCellProperties","tableProperties","|","toggleTableCaption"]},fontSize:{options:[9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,35],supportAllValues:!1},fontFamily:{options:["default","Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif","Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif","Inter"],supportAllValues:!0},fontColor:{columns:5,documentColors:10},fontBackgroundColor:{columns:5,documentColors:10},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}}};class U{constructor(o){this.fieldConfig=o}getEditorConfig(){const o=this._getBaseConfig(),t=this.fieldConfig.maxLength;return this.fieldConfig.options.output==="Markdown"&&o.plugins.push(window.CKEditor5.markdownGfm.Markdown),t&&(o.plugins.push(window.CKEditor5.maximumLength.MaximumLength),o.maximumLength={characters:t}),o}_getBaseConfig(){const o=this.fieldConfig.options.preset;switch(o){case"light":return u.light;case"standard":return u.standard;case"rich":return u.rich;default:throw new Error("Invalid preset name "+o)}}}var b=e(81849);const h=({isOpen:a,onChange:o,onToggle:t})=>{const{components:s}=(0,b.yX)(),p=s["media-library"],f=E=>{const v=E.map(r=>({alt:r.alternativeText||r.name,url:(0,b.CR)(r.url),link:`http://127.0.0.1:1337${(0,b.CR)(r.url)}`,mime:r.mime}));o(v)};return a?i.createElement(p,{onClose:t,onSelectAssets:f}):null};h.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},h.propTypes={isOpen:n().bool,onChange:n().func,onToggle:n().func};const j=h;var $=e(72757),xe=e(3108);function S(a){const o={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};for(const t in o){const s=o[t];a=a.replaceAll(t,s)}return a}const C=({attribute:a,onChange:o,name:t,value:s,disabled:p,labelAction:f,intlLabel:E,required:v,description:r,error:J})=>{const[K,X]=(0,i.useState)(!1),{formatMessage:I}=(0,R.Z)(),{maxLengthCharacters:L,...Z}=a.options,Y=new U({options:Z,maxLength:L}).getEditorConfig(),z=(0,i.useRef)(null),q=localStorage.getItem("STRAPI_THEME"),_=V(q),[ee,oe]=(0,i.useState)(!1),k=()=>oe(l=>!l),te=l=>{let d="";l.map(m=>{if(m.mime.includes("image")){const ie=S(m.url),ne=S(m.alt);d+=`<img src="${ie}" alt="${ne}" />`}});const c=K.data.processor.toView(d),y=K.data.toModel(c);K.model.insertContent(y),k()};return i.createElement(F.g,{name:t,id:t,error:J,hint:r&&I(r)},i.createElement(x.K,{spacing:1},i.createElement(H.Q,{action:f,required:v},I(E)),i.createElement(_,null),i.createElement($.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,disabled:p,data:s,onReady:l=>{const d=l.plugins.get("WordCount");z.current.appendChild(d.wordCountContainer),l.plugins.get("strapiMediaLib").connect(k),X(l)},onChange:(l,d)=>{const c=d.getData();o({target:{name:t,value:c}}),d.plugins.get("WordCount").characters>L&&console.log("Too long")},config:Y}),i.createElement("div",{ref:z}),i.createElement(P.J,null),i.createElement(M.c,null)),i.createElement(j,{isOpen:ee,onChange:te,onToggle:k}))};C.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},C.propTypes={intlLabel:n().object.isRequired,onChange:n().func.isRequired,attribute:n().object.isRequired,name:n().string.isRequired,description:n().object,disabled:n().bool,error:n().string,labelAction:n().object,required:n().bool,value:n().string};const D=C}}]);
