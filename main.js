var Main = {}

Main.init = function () {
	document.addEventListener('keydown', Main.onKeyDown)
	window.addEventListener('blur', Main.hideWindow);
}

Main.onKeyDown = function (event) {
	if (event.keyCode == 27) Main.hideWindow()
}

Main.hideWindow = function () {
	chrome.runtime.sendMessage({message: "hide"})
}

Main.init()
