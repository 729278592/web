/**
 * Created by eyohu023 on 2016/2/19.
 */
/*两行文字大省略号*/
var ds = $(".p-infor,.p-ti");
ds.each(function(){
    var divH = $(this).height();
    var $p = $("span", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    }
});