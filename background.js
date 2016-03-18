var Background = {}

Background.toggleWindow = function () {
	if (Background.isVisible) {
		Background.hideWindow()
	} else {
		Background.showWindow()
	}
}

Background.hideWindow = function () {
	Background.mainWindow.hide()
	Background.isVisible = false
}

Background.showWindow = function () {
	Background.mainWindow.show(true)
	Background.isVisible = true
}

chrome.app.runtime.onLaunched.addListener(function() {

	chrome.app.window.create('main.html', {
		id: "MainWindow",
		outerBounds: {
			width: screen.availWidth - 100,
			height: 150,
			left: 50,
			top: Math.round((screen.availHeight - 150) / 2)
		},
		frame:"none",
		alwaysOnTop:true,
		hidden:true
	},
	function (mainWindow) {
		Background.mainWindow = mainWindow
		Background.isVisible = false;

		// Background.mainWindow.show()
		// console.log(Background.mainWindow)
	});
});

chrome.commands.onCommand.addListener(function(command) {
	// console.log('Command:', command);
	switch (command) {
		case "toggle":
			Background.toggleWindow();
			break;
	}
});

chrome.runtime.onMessage.addListener(function(request) {
	switch (request.message) {
		case "toggle":
			Background.toggleWindow()
			break;
		case "hide":
			Background.hideWindow()
			break;
	}
});
