$(window).on('load', function () {
	$('.posts').masonry({
        itemSelector: '.post',
        transitionDuration: '0.8s',
        horizontalOrder: true,
        columnWidth: '.post__sizer'
    });
});