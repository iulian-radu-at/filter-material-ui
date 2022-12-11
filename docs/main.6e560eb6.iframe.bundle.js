(self.webpackChunkfilter_material_ui=self.webpackChunkfilter_material_ui||[]).push([[179],{"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotPreFilled:()=>NotPreFilled,Prefilled:()=>Prefilled,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),styles={container:{textAlign:"center",width:"100%"},icon:{fill:"#3f51b5",height:"1em",width:"1em"},iconContainer:{backgroundColor:"aqua",borderRadius:"100%",cursor:"pointer",display:"inline-flex",padding:"1ch",marginLeft:5},text:{lineHeight:"2em"}};const src_TextFilter=function TextFilter(props){var data=props.data,fields=props.fields,id=props.id,onEdit=props.onEdit,textPrefix=props.textPrefix,textSuffix=props.textSuffix,getValue=(0,react.useCallback)((function(label){return(0,lodash.isEmpty)(data)?"":data[label]}),[data]),renderField=(0,react.useCallback)((function(field,index){var and=function renderAnd(yes){return yes?"and ":""}(0!==index),name=field.name,descr=function getItems(field,value){if((0,lodash.isEmpty)(value))return field.text.all;if(!1===(0,lodash.isArray)(value))return"".concat(field.text.singular," '").concat(value,"'");if(1===(0,lodash.size)(value))return"".concat(field.text.singular," '").concat(value[0],"'");var values=(0,lodash.join)(value,"', '");return"".concat(field.text.plural," '").concat(values,"'")}(field,getValue(name));return" ".concat(and).concat(descr)}),[getValue]),fieldsText=(0,react.useMemo)((function(){return fields.map(renderField)}),[fields,renderField]),text=(0,react.useMemo)((function(){return"".concat(textPrefix).concat(fieldsText).concat(textSuffix)}),[fieldsText,textPrefix,textSuffix]);return react.createElement("div",{id,style:styles.container},react.createElement("div",null,react.createElement("span",{style:styles.text},text),react.createElement("div",{style:styles.iconContainer,onClick:onEdit},react.createElement("svg",{style:styles.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},react.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))))};var defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Grid=__webpack_require__("./node_modules/@mui/material/esm/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@mui/material/esm/Button/Button.js");const src_ApplyButton=function ApplyButton(props){return react.createElement(Button.Z,{color:"primary",onClick:props.onApply,style:props.style,variant:"contained"},"Apply")};const src_CancelButton=function CancelButton(props){return react.createElement(Button.Z,{color:"secondary",onClick:props.onCancel,style:props.style,variant:"outlined"},"Cancel")};var lib=__webpack_require__("./node_modules/react-select-material-ui/lib/index.js");const ColorsSelect=function ColorsSelectField(props){var label=props.label,name=props.name,onChange=props.onChange,noOptionsAvailable=props.noOptionsAvailable,noOptionsMatchFilter=props.noOptionsMatchFilter,options=props.options,values=props.values,handleChange=(0,react.useCallback)((function(values){var _values;values=(values=null!==(_values=values)&&void 0!==_values?_values:[]).sort(),onChange(name,values)}),[name,onChange]);return!1===(0,lodash.isEmpty)(values)&&values.sort(),react.createElement(lib.ColorsSelect,{label,onChange:handleChange,options,SelectProps:{msgNoOptionsAvailable:noOptionsAvailable,msgNoOptionsMatchFilter:noOptionsMatchFilter},defaultValues:values})};var input_material_ui_lib=__webpack_require__("./node_modules/input-material-ui/lib/index.js"),input_material_ui_lib_default=__webpack_require__.n(input_material_ui_lib);const src_InputField=function InputField(props){var label=props.label,name=props.name,onChange=props.onChange,value=props.value,handleChange=(0,react.useCallback)((function(value){return onChange(name,value)}),[name,onChange]);return react.createElement(input_material_ui_lib_default(),{label,onChange:handleChange,value})};const MultipleSelect=function MultipleSelectField(props){var label=props.label,name=props.name,noOptionsAvailable=props.noOptionsAvailable,noOptionsMatchFilter=props.noOptionsMatchFilter,onChange=props.onChange,options=props.options,values=props.values,handleChange=(0,react.useCallback)((function(values){var _values;values=(values=null!==(_values=values)&&void 0!==_values?_values:[]).sort(),onChange(name,values)}),[name,onChange]);return!1===(0,lodash.isEmpty)(values)&&values.sort(),react.createElement(lib.MultipleSelect,{label,onChange:handleChange,options,SelectProps:{msgNoOptionsAvailable:noOptionsAvailable,msgNoOptionsMatchFilter:noOptionsMatchFilter},defaultValues:values})};const SingleSelect=function SingleSelectField(props){var label=props.label,name=props.name,noOptionsAvailable=props.noOptionsAvailable,noOptionsMatchFilter=props.noOptionsMatchFilter,onChange=props.onChange,options=props.options,value=props.value,handleChange=(0,react.useCallback)((function(value){return onChange(name,null!=value?value:"")}),[name,onChange]);return react.createElement(lib.SingleSelect,{label,onChange:handleChange,options,SelectProps:{isClearable:!0,msgNoOptionsAvailable:noOptionsAvailable,msgNoOptionsMatchFilter:noOptionsMatchFilter},defaultValue:value})};var FormFilter_styles={button:{margin:10},buttons:{textAlign:"center"},container:{width:"100%"},grid:{alignItems:"flex-end"},item:{padding:10}};const src_FormFilter=function FormFilter(props){var fields=props.fields,id=props.id,onCancel=props.onCancel,onChange=props.onChange,_useState=(0,react.useState)(props.data||{}),_useState2=(0,slicedToArray.Z)(_useState,2),data=_useState2[0],setData=_useState2[1],handleChange=(0,react.useCallback)((function(field,value){return setData((function(prevData){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prevData),{},(0,defineProperty.Z)({},field,value))}))}),[]),renderFieldByType=(0,react.useCallback)((function(field){var label=field.label,name=field.name,options=field.options,text=field.text,noOptionsAvailable=text.noOptionsAvailable,noOptionsMatchFilter=text.noOptionsMatchFilter,value=data[name];switch(field.type){case TYPE.INPUT:return react.createElement(src_InputField,{label,name,onChange:handleChange,value});case TYPE.COLORS_SELECT:return react.createElement(ColorsSelect,{label,name,noOptionsAvailable,noOptionsMatchFilter,onChange:handleChange,options:options||[],values:value});case TYPE.MULTIPLE_SELECT:return react.createElement(MultipleSelect,{label,name,noOptionsAvailable,noOptionsMatchFilter,onChange:handleChange,options:options||[],values:value});case TYPE.SINGLE_SELECT:return react.createElement(SingleSelect,{label,name,noOptionsAvailable,noOptionsMatchFilter,onChange:handleChange,options:options||[],value});default:return react.createElement("div",null,field.type)}}),[data]),renderField=(0,react.useCallback)((function(field){var _getColWidth=function getColWidth(numFields){switch(numFields){case 1:return{md:12,sm:12,xs:12};case 2:return{md:6,sm:6,xs:12};case 3:return{md:4,sm:6,xs:12};default:return{md:3,sm:6,xs:12}}}((0,lodash.size)(fields)),md=_getColWidth.md,sm=_getColWidth.sm,xs=_getColWidth.xs;return react.createElement(Grid.ZP,{item:!0,key:field.name,md,sm,style:FormFilter_styles.item,xs},renderFieldByType(field))}),[fields]),renderedFields=(0,react.useMemo)((function(){return fields.map(renderField)}),[fields]),handleApply=(0,react.useCallback)((function(){return onChange(data)}),[data]);return react.createElement("div",{id,style:FormFilter_styles.container},react.createElement(Grid.ZP,{container:!0,style:FormFilter_styles.grid},renderedFields),react.createElement("div",{style:FormFilter_styles.buttons},react.createElement(src_CancelButton,{onCancel,style:FormFilter_styles.button}),react.createElement(src_ApplyButton,{onApply:handleApply,style:FormFilter_styles.button})))};var TYPE,_excluded=["onChange","textPrefix","textSuffix"];!function(TYPE){TYPE[TYPE.INPUT=0]="INPUT",TYPE[TYPE.SINGLE_SELECT=1]="SINGLE_SELECT",TYPE[TYPE.MULTIPLE_SELECT=2]="MULTIPLE_SELECT",TYPE[TYPE.COLORS_SELECT=3]="COLORS_SELECT"}(TYPE||(TYPE={}));const src_FilterMaterialUi=function FilterMaterialUi(props){var onChange=props.onChange,textPrefix=props.textPrefix,textSuffix=props.textSuffix,rest=(0,objectWithoutProperties.Z)(props,_excluded),_useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),isTextVisible=_useState2[0],setTextVisible=_useState2[1],handleEdit=(0,react.useCallback)((function(){return setTextVisible(!1)}),[]),handleShowText=(0,react.useCallback)((function(){return setTextVisible(!0)}),[]),handleChange=(0,react.useCallback)((function(data){handleShowText(),onChange(data)}),[]);return isTextVisible?react.createElement(src_TextFilter,Object.assign({},rest,{textPrefix,textSuffix,onEdit:handleEdit})):react.createElement(src_FormFilter,Object.assign({},rest,{onCancel:handleShowText,onChange:handleChange}))};var fields=[{label:"Example types",name:"types",options:["JS","JAVA","C#"],text:{all:"of any type",singular:"having the type",plural:"having the types"},type:TYPE.MULTIPLE_SELECT},{label:"Name",name:"name",text:{all:"having any name",singular:"having names containing",plural:"having names containing"},type:TYPE.INPUT},{label:"Category",name:"category",options:["Open-Source","Commercial","Educational"],text:{all:"ignoring categories",singular:"having the category",plural:"having the categories"},type:TYPE.SINGLE_SELECT},{label:"Colors",name:"colors",options:["red","green","blue","white","black","gray","yellow"],text:{all:"ignoring colors",singular:"having the color",plural:"having the colors"},type:TYPE.COLORS_SELECT}],preFilledState={types:["C#","JAVA"],name:"Green-Field",category:"Open-Source",colors:["red","yellow"]},emptyState={};const storybook_Example=function Example(props){var onChange=props.onChange,preFilled=props.preFilled,_useState=(0,react.useState)(preFilled?preFilledState:emptyState),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1],handleChange=(0,react.useCallback)((function(data){setState(data),onChange(data)}),[onChange]);return react.createElement(src_FilterMaterialUi,{textPrefix:"Display apps ",textSuffix:".",data:state,fields,onChange:handleChange})},stories={title:"FilterMaterialUi"};var style={height:20},showSelectedValue=function showSelectedValue(id){return function(values){return document.getElementById(id).textContent=JSON.stringify(values,void 0,2)}},NotPreFilled=function NotPreFilled(){return react.createElement("div",null,react.createElement(storybook_Example,{preFilled:!1,onChange:showSelectedValue("npf")}),react.createElement("div",{style}),"Selected values: ",react.createElement("span",{id:"npf"}))};NotPreFilled.storyName="not pre-filled";var Prefilled=function Prefilled(){return react.createElement("div",null,react.createElement(storybook_Example,{preFilled:!0,onChange:showSelectedValue("pf")}),react.createElement("div",{style}),"Selected values: ",react.createElement("span",{id:"pf"}))};Prefilled.storyName="prefilled"},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories.tsx":"./storybook/stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[312],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);