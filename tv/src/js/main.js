menu.onclick = function clickMenu() {
	var topNavigationItem = document.getElementById('myTopnav');

	if (topNavigationItem.className == "topNav") {
		topNavigationItem.className += " responsive"
	} else {
		topNavigationItem.className = "topNav"
	}
}
$(function () {
  $('[data-toggle="popover"]').popover()
})