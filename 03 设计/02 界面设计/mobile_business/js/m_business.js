/**
 * Created by eyohu023 on 2015/8/14.
 */




function details(){
    $(".div-group:odd").css({"background": "#fff"});
    $(".div-group:even").css({"background": "#efecec"});
    var dfa = $(".div-group .fa");
    dfa.closest(".div-group").on("click", function () {
        if ($(this).next(".order-group").css("display") == "none") {
            $(this).next(".order-group").slideDown();
            $(this).find(".fa").removeClass("fa-caret-left").addClass("fa-caret-down");
            $(this).siblings(".div-group").next(".order-group").slideUp();
            $(this).siblings(".div-group").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-left");
        }
        else {
            $(this).next(".order-group").slideUp();
            $(this).find(".fa").removeClass("fa-caret-down").addClass("fa-caret-left");
        }
    });
}
details();



$(".btn_query").on("click",function(){
    $(".details").html('<div class="div-group">'+
                           '<span class="name">1 : 陈小洁</span>'+
                           '<span class="time">15/06/03</span>'+
                           '<span class="fr">'+
                               '<span class="number">4000</span>盒'+
                               '<span>'+
                                   '<i class="fa fa-caret-left"></i>'+
                               '</span>'+
                           '</span>'+
                       '</div>'+
                       '<ul class="order-group">'+
                           '<li class="clearfix">'+
                               '<img src="images/icon1.jpg" alt=""/>'+
                               '<span class="details">'+
                                   '<p class="product relative">'+
                                       '<span>[普莉拉]</span>&nbsp;<span>防晒</span>&nbsp;<span>防晒</span>&nbsp;<span>防晒</span>'+
                                   '</p>'+
                                   '<span class="number relative">数量 : x 3000</span><br/>'+
                                   '<span class="money relative">￥ : 1058</span>'+
                               '</span>'+
                           '</li>'+
                           '<li class="clearfix">'+
                               '<img src="images/icon1.jpg" alt=""/>'+
                               '<span class="details">'+
                                   '<p class="product relative">'+
                                       '<span>[普莉拉]</span>&nbsp;<span>防晒</span>&nbsp;<span>防晒</span>&nbsp;<span>防晒</span>'+
                                   '</p>'+
                                   '<span class="number relative">数量 : x 3000</span><br/>'+
                                   '<span class="money relative">￥ : 1058</span>'+
                               '</span>'+
                           '</li>'+
                       '</ul>');
                        details();
                });




var ml = $(".menu li");
var du = $(".div-ul");
ml.each(function (i) {
    $(this).on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        du.eq(i).removeClass("hide");
        du.eq(i).siblings(".div-ul").addClass("hide");
    })
});


var ugb = $(".ul-group .goods-ul .buy");
var m = $(".mask");
var pb = $(".plus-buy");
ugb.on("click", function () {
    m.removeClass("hide");
});
pb.on("click", function () {
    m.addClass("hide");
});

var cd = $(".common");
cd.find(".delete").each(function(){
    $(this).on("click",function(){
        $(this).parent().remove()
    });
});

//请假流程
$.fn.leave = function (opts) {
    var content2 =  '<ul>' +
                        '<li class="second">' +
                            '<ul class="department">' +
                                '<li onclick="Addsecond(this)">' +
                                    '<span class="company">研发部</span>' +
                                    '<i class="fa fa-angle-right fr"></i>' +
                                '</li>' +
                                '<li onclick="Addsecond(this)">' +
                                    '<span class="company">技术部</span>' +
                                    '<i class="fa fa-angle-right fr"></i>' +
                                '</li>' +
                                '<li class="last" onclick="Addsecond(this)">' +
                                    '<span class="company">市场部</span>' +
                                    '<i class="fa fa-angle-right fr"></i>' +
                                '</li>' +
                            '</ul>' +
                        '</li>' +
                    '</ul>';

    var content3 =  '<ul>' +
                        '<li class="three">' +
                            '<ul class="personal_information">' +
                                '<li onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">陈小洁</span>' +
                                    '<span class="f12">cto</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                                '<li onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">高新</span>' +
                                    '<span class="f12">开发经理</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                                '<li class="last" onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">王洪波</span>' +
                                    '<span class="f12">前端开发</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                            '</ul>' +
                        '</li>' +
                        '<li>' +
                            '<ul>' +
                                '<li class="second">' +
                                    '<ul class="department">' +
                                        '<li onclick="Addfoure(this)">' +
                                            '<span class="company">技术部</span>' +
                                            '<i class="fa fa-angle-right fr"></i>' +
                                        '</li>' +
                                        '<li class="last" onclick="Addfoure(this)">' +
                                            '<span class="company">市场部</span>' +
                                            '<i class="fa fa-angle-right fr"></i>' +
                                        '</li>' +
                                    '</ul>' +
                                '</li>' +
                            '</ul>' +
                        '</li>' +
                    '</ul>';

    var content4 =  '<ul>' +
                        '<li class="three">' +
                            '<ul class="personal_information">' +
                                '<li onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">周梦媛</span>' +
                                    '<span class="f12">cto</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                                '<li onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">韩永华</span>' +
                                    '<span class="f12">开发经理</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                                '<li class="last" onclick="Addthree(this)">' +
                                    '<img src="images/person_type.png" alt="" width="40"/>' +
                                    '<span class="name">刘唐</span>' +
                                    '<span class="f12">前端开发</span>' +
                                    '<i class="fa fa-check-circle-o fr"></i>' +
                                '</li>' +
                            '</ul>' +
                        '</li>' +
                    '</ul>';


    var defaults = {
        company: "易优弧科技团队",
        registered_name: "王洪波",
        registered_person_head: $(".registered_person_head"),
        add_human_information: $(".add_human_information"),
        receive_person_common_name: $(".receive_person .common .name"),
        lo: $("#left>.one"),
        lt: $("#left>.two"),
        fa_remove: $(".fa-remove"),
        display_effect: function () {
            this.lo.hide();
            this.lt.slideDown();
        },
        display_effectyi: function () {
            this.lt.hide();
            this.lo.slideDown();
        },
        return_first: function () {
            this.add_human_information.empty().append(content1);
            this.registered_person_head.html('<span class="company">王洪波</span>');
        },
        return_second: function (obj1) {
            this.add_human_information.empty().append(content2);
            this.registered_person_head.html('<i class="fa fa-arrow-left"></i> <span class="company">' + $(obj1).find(".company").text() + '</span>');
            this.registered_person_head.on("click", $.proxy(function () {
                this.return_first()
            }, this));
//                var that = this;
//                this.registered_person_head.on("click",function(){
//                    that.return_first()
//                });
        },
        return_three: function (obj2) {
            this.add_human_information.empty().append(content3);
            this.registered_person_head.html('<i class="fa fa-arrow-left"></i> <span class="company">' + $(obj2).find(".company").text() + '</span>');

            this.registered_person_head.on("click", $.proxy(function () {
                this.return_second(obj2)
            }, this));
//                var that = this;
//                this.registered_person_head.on("click",function(){
//                    that.return_second(obj2)
//                });
        },
        faremove: function () {
            this.display_effectyi()
        }
    };
    var opts = $.extend({}, defaults, opts);
    var content1 = '<ul>' +
                       '<li class="first" onclick="Addfirst(this)">' +
                           '<span class="company">' + opts.company + '</span>' +
                           '<i class="fa fa-angle-right fr"></i>' +
                       '</li>' +
                   '</ul>';

    opts.add_human_information.append(content1);
    opts.display_effect();
    Addfirst = function (obj1) {
        opts.add_human_information.empty().append(content2);
        opts.registered_person_head.html('<i class="fa fa-arrow-left"></i> <span class="company">' + $(obj1).find(".company").text() + '</span>');
        opts.registered_person_head.on("click", function () {
            opts.return_first()
        });
        Addsecond = function (obj2) {
            opts.add_human_information.empty().append(content3);
            opts.registered_person_head.html('<i class="fa fa-arrow-left"></i> <span class="company">' + $(obj2).find(".company").text() + '</span>');
            opts.registered_person_head.on("click", function () {
                opts.return_second(obj1)
            });
            Addthree = function (obj3) {
                $(obj3).find(".fa").removeClass("fa-check-circle-o").addClass("fa-check-circle");
                setTimeout(function () {
                    opts.display_effectyi();
                    opts.add_human_information.empty();
                    opts.receive_person_common_name.text($(obj3).find(".name").text());
                    opts.registered_person_head.html('<span class="company">王洪波</span>');
                }, 1000)
            };
            Addfoure = function (obj4) {
                opts.add_human_information.empty().append(content4);
                opts.registered_person_head.html('<i class="fa fa-arrow-left"></i> <span class="company">' + $(obj4).find(".company").text() + '</span>');
                opts.registered_person_head.on("click", function () {
                    opts.return_three(obj2)
                });
            }
        };
    };
    opts.fa_remove.on("click", function () {
        opts.add_human_information.empty();
        opts.faremove()
    })
};
