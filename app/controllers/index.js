$.index.open();

function handleProfilepictureClick() {
	console.warn('clicked');
}

function handleCustom(e) {
	alert(e.message);
}

function navigate() {
	Alloy.Globals.events.trigger('navigate', {
		tab: "secondTab",
		controller: "/profile/page",
		data: {}
	});
}

Alloy.Globals.events.on('navigate', handleNavigation);

function handleNavigation(e) {
	$[e.tab].openWindow(Alloy.createController(e.controller, e.data).getView());
}