webpackJsonp([38,61],{150:function(s,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{hide:!0,list:[]}},ready:function(){document.title="个人信息",this.$http.get("../../static/data/personInfor.json").then(function(s){this.list=s.data},function(s){})},methods:{onShow:function(){this.hide=!this.hide},returnPage:function(){window.history.go(-1)}}}},225:function(s,e){s.exports=' <div class=hd> <a> <a class=return @click=returnPage()></a> </a> 家得利 <div class="right nav_block"> <a v-link="\'/user/shopCart\'" class=shop_cat></a> <a class=dot_block @click.stop=onShow></a> <ul class=nav_link :class="{\'hide\':hide}"> <li> <a v-link="\'/user/myMessage\'"> 消息 </a> </li> <li> <a v-link="\'/home/index\'"> 首页 </a> </li> </ul> </div> </div> <div class="bd absolute pd48" v-for="personList in list"> <div style="background: #fff;padding:0.1rem 0"> <img :src=personList.personImg alt="" class=portrait /> </div> <div class="weui_cells weui_cells_access mt0"> <a class=weui_cell v-link="\'/user/modifyName\'"> <div class="weui_cell_bd weui_cell_primary"> <p> <span class="span_icon spa_person"></span> <span class=text> 昵称 </span> </p> </div> <div class=weui_cell_ft>{{personList.personName}}</div> </a> <a class=weui_cell v-link="\'/user/modifyPhone\'"> <div class="weui_cell_bd weui_cell_primary"> <p> <span class="span_icon spa_phone"></span> <span class=text> {{personList.phone}} </span> </p> </div> <div class=weui_cell_ft>15024545454</div> </a> <a class=weui_cell v-link="\'/user/modifySex\'"> <div class="weui_cell_bd weui_cell_primary"> <p> <span class="span_icon spa_sex"></span> <span class=text> 性别 </span> </p> </div> <div class=weui_cell_ft> {{personList.sex}} </div> </a> <a class=weui_cell v-link="\'/user/modifyAddress\'"> <div class="weui_cell_bd weui_cell_primary"> <p> <span class="span_icon spa_address"></span> <span class=text> 所在地 </span> </p> </div> <div class=weui_cell_ft> {{personList.addressInfor}} </div> </a> <a class=weui_cell v-link="\'/user/modifyPassword\'"> <div class="weui_cell_bd weui_cell_primary"> <p> <span class="span_icon spa_lock"></span> <span class=text> 修改密码 </span> </p> </div> <div class=weui_cell_ft>{{personList.personPassword}}</div> </a> </div> </div> <div class="weui_btn_area fixed"> <a class="weui_btn b0 weui_btn_primary">退出登录</a> </div> '},285:function(s,e,a){var i,l;i=a(150),l=a(225),s.exports=i||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)}});
//# sourceMappingURL=38.89e1d860642d2d2e8a29.js.map