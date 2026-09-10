$(function() {
	$('.gallery__menu a').click(function() {
		let get_id = this.id;
		let get_current = $('.gallery__photos .' + get_id);

		$('.photo').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function() {
		$('.photo').show(500);
	})
});