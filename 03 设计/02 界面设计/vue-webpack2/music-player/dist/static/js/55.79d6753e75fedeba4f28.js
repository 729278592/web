webpackJsonp([55,61],{116:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{hide:!0,list:[]}},ready:function(){document.title="商铺评价记录",this.$http.get("../../static/data/shopsCommentList.json").then(function(s){this.list=s.data},function(s){})},methods:{onShow:function(){this.hide=!this.hide},returnPage:function(){window.history.go(-1)}}}},191:function(s,t){s.exports=' <div class=hd> <a> <a class=return @click=returnPage()></a> </a> 家得利 <div class="right nav_block"> <a v-link="\'/user/shopCart\'" class=shop_cat></a> <a class=dot_block @click.stop=onShow></a> <ul class=nav_link :class="{\'hide\':hide}"> <li> <a v-link="\'/user/myMessage\'"> 消息 </a> </li> <li> <a v-link="\'/home/index\'"> 首页 </a> </li> </ul> </div> </div> <div class="bd absolute pt"> <ul class="entryList mt0 style"> <li v-for="commentList in list"> <div class="weui_cells mt0 bt0"> <div class="weui_cell style3"> <div class="weui_cell_bd weui_cell_primary"> <p>{{commentList.phone}}</p> </div> <div class=weui_cell_ft>{{commentList.commentTime}}</div> </div> </div> <div> <div class="couponImg style" v-html=commentList.img> </div> <div class=inforList> <p class=clearfix> <span class="left shopsName">{{commentList.shoppingName}}</span> </p> <p> <span>{{commentList.color}}</span> </p> <p class=clearfix> <span class="left shopsName">{{commentList.commentType}}</span> </p> </div> </div> <div class="shopsInfor style"> {{commentList.commentContent}} </div> </li> </ul> </div> '},251:function(s,t,i){var e,o;e=i(116),o=i(191),s.exports=e||{},s.exports.__esModule&&(s.exports=s.exports["default"]),o&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=o)}});
//# sourceMappingURL=55.79d6753e75fedeba4f28.js.map