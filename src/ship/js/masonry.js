$(function () {
	var itemStart = 0;
	var itemLen = 5;
	var instagramReviews = $("#instagram-reviews .reviews-items");
	
	var w = $(document).outerWidth();
	if (w >= 1200) {
		itemLen = 20;
	} else if (w >= 700) {
		itemLen = 8;
	} else if (w >= 300) {
		itemLen = 4;
	}
	
	function add(start, stop) {
		var p = [];
		stop = window.instagramItems.length > stop ? stop : window.instagramItems.length;
		for (var i = start; i < stop; i++) {
			var item = window.instagramItems[i];
			p.push(
				$("<div>", {"class": "reviews-item"}).append(
					$("<div>", {"class": "img"}).append(
						$("<img>", {
							"src": item['thumbnail_url']
						}).css({"top": item['offset_y'] ? ((item['offset_y']+5) * -1)+"%" : 0})
					),
					$("<a>", {"class": "link", "href": item['link'], 'target': "_blank"}).append(
						$("<div>", {"class": "l"}).append(
							$("<div>", {"class": "icon"}).append(
								$("<img>", {"src": "/img/inst.png"})
							),
							$("<div>").text("@" + item['author'])
						)
					)
				)
			)
		}
		var a = $($('<div/>').append(p).html());
		instagramReviews.append(a).masonry('appended', a);
		
		setTimeout(function () {
			instagramReviews.masonry();
		}, 500)
	}
	
	$("#instagram-reviews-add").click(function () {
		add(itemStart, itemStart + itemLen);
		itemStart += itemLen;
		if (itemStart >= window.instagramItems.length) {
			$(this).hide();
		} else {
			$(this).show();
		}
	});
	
	instagramReviews.masonry({
		itemSelector: '.reviews-item',
		fitWidth: true,
		//columnWidth: 185,
		gutter: 10
	});
	
	$("#instagram-reviews-add").click();
	
	var scrollTimer = null;
	$(window).scroll(function () {
		if (scrollTimer !== null) {
			clearTimeout(scrollTimer);
		}
		
		scrollTimer = setTimeout(function () {
			instagramReviews.masonry();
			scrollTimer = null;
		}, 200)
	});
});