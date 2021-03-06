/*头部滑动*/
(function($) {

    /*提示使用ie7以上浏览器*/
    var DEFAULT_VERSION = "7.0";
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie")>-1;
    var safariVersion;
    if(isIE){
        safariVersion =  ua.match(/msie ([\d.]+)/)[1];
        if(safariVersion <= DEFAULT_VERSION ){
            //ie7浏览器
            window.location.href = "../../templates/frontend/upgrade-browser.html";
        }else{
            //IE8+浏览器以上
        }
    }else{
        //不是ie浏览器
    }



    /*全屏图片居中*/
    var si = $(".auto-img");
    si.each(function(i){
        si.get(i).style.width ="1920px";
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1024){
                si.get(i).style.left = -(parseInt(si.get(i).style.width) - veiwidth)/2 + "px"
            }
        }
        toResize();
        $(window).on("resize",function(){
            toResize()
        });
    });


    /*ie8浏览器的处理*/
    function getIE()
    {
        if(navigator.appName == "Microsoft Internet Explorer")
        {
            if(navigator.appVersion.match(/8./i)!='8.')
            {
                /*IE支持placeholder属性*/
                var doc = document, inputs = doc.getElementsByTagName('input'), supportPlaceholder = 'placeholder'in doc.createElement('input'), placeholder = function (input) {
                    var text = input.getAttribute('placeholder'), defaultValue = input.defaultValue;
                    if (defaultValue == '') {
                        input.value = text;
                    }
                    input.onfocus = function () {
                        if (input.value === text) {
                            this.value = ''
                        }
                    };
                    input.onblur = function () {
                        if (input.value === '') {
                            this.value = text
                        }
                    }
                };
                if (!supportPlaceholder) {
                    for (var i = 0, len = inputs.length; i < len; i++) {
                        var input = inputs[i], text = input.getAttribute('placeholder');
                        if (((input.type == 'text')||(input.type == 'password')) && text) {
                            placeholder(input)
                        }
                    }
                }
            }
        }
    }
    getIE();

    /*顶部菜单滑动效果*/
    var Methods = {
        init: function (_this) {
            ha = $("#hover-active");
            iWidth = ha.width();
            Oli = _this.find("li");
            active = _this.find("li.active");
            ha[0].style.left = active.offset().left -_this.offset().left +"px";
            Methods.hover(_this)
        },
        hover:function(_this){
            Oli.each(function(i){
                $(this).hover(
                    function(){
                        move(ha[0],{left : i * iWidth},function(){
                        });
                    },function(){
                        move(ha[0],{left : parseInt(active.offset().left -_this.offset().left)},function(){
                        });
                    }
                )
            })
        }
    };
    Methods.init($("#menu"));

    /*space-creation.html*/
    /*两行文字大省略号*/
    var ds = $(".deatils-p,.s-details");
    ds.each(function(){
        var divH = $(this).height();
        var $p = $("p", $(this)).eq(0);
        while ($p.outerHeight() > divH) {
            $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
    });

    /*项目例子*/
    var uuu = $(".ul-recommended li,.ul-announcement li,.ul-case li");
    uuu.hover(function(){
        $(this).find("a").addClass("active");
        $(this).siblings().find("a").removeClass("active");
    });
})(jQuery);
