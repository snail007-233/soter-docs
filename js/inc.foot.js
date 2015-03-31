if (parent == self) {
        document.write('<p>Soter Powered By:狂奔的蜗牛</p>');
} else {
        if (document.title) {
                top.document.title = document.title + "_Soter使用手册";
        }
}

$(function() {
        if ($('legend')[0]) {
                var lis = [];
                $('.title_h2').each(function(index) {
                        var name = 'db_taget_' + index;
                        $(this).before('<a name="' + name + '"></a>');
                        lis.push('<li><a href="#' + name + '" class="anchor">' + $(this).text() + '</a></li>');
                });
                if (lis.length) {
                        $('legend').before('<div><h2 class="title_h2">目录</h2><ol>' + lis.join('') + '</ol></div>');
                }
        };
        
        $(".anchor").each(function() {
                var link = $(this);
                var href = link.attr("href");
                if (href && href[0] == "#") {
                        var name = href.substring(1);
                        $(this).click(function() {
                                var nameElement = $("[name='" + name + "']");
                                var idElement = $("#" + name);
                                var element = null;
                                if (nameElement.length > 0) {
                                        element = nameElement;
                                } else if (idElement.length > 0) {
                                        element = idElement;
                                }
                                if (element) {
                                        var offset = element.offset();
                                        window.parent.scrollTo(offset.left, offset.top);
                                }
                                return false;
                        });
                }
        });
});