if (parent == self) {
	document.write('<p>Soter Powered By:狂奔的蜗牛</p>');
} else {
	if (document.title) {
		top.document.title = document.title + "_Soter使用手册";
	}
}
$(function () {

	if ($('legend')[0]) {
		var lis = [];
		$('.title_h2').each(function (index) {
			var name = 'db_taget_' + index;
			$(this).prepend('<a name="' + name + '"></a>');
			lis.push('<li><a href="#' + name + '">' + $(this).text() + '</a></li>');
		});
		if(lis.length){
			$('legend').before('<div><h2 class="title_h2">目录</h2><ol>' + lis.join('') + '</ol></div>');
		}
	}
});
$(function(){
    $('.nav_manual a').on('click',function(){
        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');
    });
    var offset = 300;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#gotoTop').fadeIn(duration);
        } else {
            $('#gotoTop').fadeOut(duration);
        }
    });
    $('#gotoTop,.gotoTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },
        duration);
        return false;
    });
});

