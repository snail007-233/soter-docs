$(function(){
    $('.nav_manual a').on('click',function(){
        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');
    })
})

