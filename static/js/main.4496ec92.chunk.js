(this.webpackJsonpverstka=this.webpackJsonpverstka||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(3),c=n.n(a),r=(n(12),n(4)),l=n(5),d=n(7),o=n(6),u=(n(13),n(14),n(0));var m=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"title",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0437\u0430\u0439\u043c\u0430 \u043f\u043e\u0434 \u041f\u0422\u0421"})})};n(16);var b=function(e){var t=["sub_title_change_items ","sub_title_change_items "];return t[e.boolSub?0:1]+="alteration",Object(u.jsxs)("div",{className:"sub_title",children:[Object(u.jsx)("div",{className:"sub_title_title",children:"\u0422\u0438\u043f \u043f\u043b\u0430\u0442\u0435\u0436\u0430"}),Object(u.jsxs)("div",{className:"sub_title_change",children:[Object(u.jsx)("div",{className:t[0],onClick:e.toClicker.bind(this,"subTitle1"),children:"\u0414\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"}),Object(u.jsx)("div",{className:t[1],onClick:e.toClicker.bind(this,"subTitle2"),children:"\u0410\u043d\u043d\u0443\u0438\u0442\u0435\u0432\u043d\u044b\u0439"})]})]})};n(17);var j=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"range",children:[Object(u.jsxs)("div",{className:"range_text",children:[Object(u.jsx)("div",{className:"range_text_items",children:"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u0439\u043c\u0430"}),Object(u.jsx)("div",{className:"range_text_items",children:e.toCurrency(e.range[0].cost)})]}),Object(u.jsx)("input",{type:"range",style:{background:"-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b "+e.range[0].styleBG+"%, #d7d8dc "+e.range[0].styleBG+"%, #d7d8dc 100%)"},className:"range_sub",min:"15000",max:"1000000",defaultValue:"138000",id:"range1",onChange:e.changeRange}),Object(u.jsxs)("div",{className:"range_sub_items",children:[Object(u.jsxs)("div",{className:"range_sub_item",children:["\u043e\u0442 ",e.toCurrency(15e3)]}),Object(u.jsxs)("div",{className:"range_sub_item",children:["\u0434\u043e ",e.toCurrency(1e6)]})]})]}),Object(u.jsxs)("div",{className:"range",children:[Object(u.jsxs)("div",{className:"range_text",children:[Object(u.jsx)("div",{className:"range_text_items",children:"\u0421\u0440\u043e\u043a \u0437\u0430\u0439\u043c\u0430"}),Object(u.jsx)("div",{className:"range_text_items",children:e.range[1].cost<5?e.range[1].cost+" \u043c\u0435\u0441\u044f\u0446\u0430":e.range[1].cost+" \u043c\u0435\u0441\u044f\u0446\u0435\u0432"})]}),Object(u.jsx)("input",{type:"range",style:{background:"-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b "+e.range[1].styleBG+"%, #d7d8dc "+e.range[1].styleBG+"%, #d7d8dc 100%)"},className:"range_sub",min:"2",max:"12",defaultValue:"8",id:"range2",onChange:e.changeRange}),Object(u.jsxs)("div",{className:"range_sub_items",children:[Object(u.jsx)("div",{className:"range_sub_item",children:"\u043e\u0442 2 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}),Object(u.jsx)("div",{className:"range_sub_item",children:"\u0434\u043e 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"})]})]})]})};n(18);var h=function(e){var t;return t=e.opacityBtn?"visible":"hidden",Object(u.jsxs)("div",{className:"main_side",children:[Object(u.jsxs)("div",{className:"main_side_items",children:[Object(u.jsxs)("div",{className:"main_side_item",children:[Object(u.jsx)("div",{className:"main_side_item_title",children:"\u0421\u0442\u0430\u0432\u043a\u0430"}),Object(u.jsx)("div",{className:"main_side_item_info",children:"2.7%"})]}),Object(u.jsxs)("div",{className:"main_side_item",children:[Object(u.jsx)("div",{className:"main_side_item_title",children:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436"}),Object(u.jsx)("div",{className:"main_side_item_info",id:"currency",children:e.toCurrency(e.mainCost())})]})]}),Object(u.jsx)("button",{className:"main_side_submit",onClick:e.cliked_btn,children:"\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(u.jsx)("div",{className:"main_side_info main_info",children:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0437\u0430\u0439\u043c\u0430 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439"}),Object(u.jsxs)("div",{className:"alert",style:{opacity:e.opacityBtn,visibility:t},children:[Object(u.jsx)("i",{className:"fa fa-check-square-o","aria-hidden":"true"}),"\u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"]})]})},g=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).toCurrency=function(e){return new Intl.NumberFormat("ru-RU",{currency:"rub",style:"currency",minimumFractionDigits:0}).format(e)},e.changeRange=function(t){var n;n="range1"===t.target.id?0:1;var s=e.state.range;s[n].styleBG=n?100*(t.target.value-2)/10:100*(t.target.value-15e3)/985e3,s[n].cost=t.target.value,e.setState({range:s})},e.toClicker=function(t){var n;n="subTitle1"===t?1:0,e.setState({subTitle:n})},e.mainCost=function(){return(e.state.subTitle?Number(.027*e.state.range[0].cost):Number(.027*e.state.range[0].cost*Math.pow(1.027,e.state.range[1].cost)/(Math.pow(1.027,e.state.range[1].cost)-1))).toFixed()},e.opacityBtnFunc=function(){e.setState({opacityBtn:1});var t=setInterval((function(){e.setState({opacityBtn:0}),clearInterval(t),t=null}),1e3)},e.state={width:window.innerWidth,opacityBtn:0,subTitle:1,range:[{styleBG:13.5,cost:138e3},{styleBG:60,cost:8}]},e.updateDimensions=function(){e.setState({width:window.innerWidth})},e}return Object(l.a)(n,[{key:"render",value:function(){var e;return e=this.state.width/1520>1?this.state.width/1520:1,Object(u.jsxs)("div",{className:"main",style:{zoom:e},children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"sub_main",children:[Object(u.jsxs)("div",{className:"sub_main_items",children:[Object(u.jsx)(b,{toClicker:this.toClicker,boolSub:this.state.subTitle}),Object(u.jsx)(j,{toCurrency:this.toCurrency,changeRange:this.changeRange,range:this.state.range}),Object(u.jsx)("div",{className:"main_info main_info_mar",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u0439\u043c\u0430 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f, \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"})]}),Object(u.jsx)("div",{className:"sub_main_items",children:Object(u.jsx)(h,{toCurrency:this.toCurrency,mainCost:this.mainCost,cliked_btn:this.opacityBtnFunc,opacityBtn:this.state.opacityBtn})})]})]})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}}]),n}(s.Component),_=g,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.4496ec92.chunk.js.map