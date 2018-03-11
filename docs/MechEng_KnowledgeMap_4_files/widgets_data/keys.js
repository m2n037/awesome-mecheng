
function getElem(event)
{
	// Retrieve the event in IE
	if (!event)
		var event = window.event;
	
	// Reference the element howeaver this browser can
	var elem;
	if (event.target) // For Firefox
		elem = event.target;
	else if (event.srcElement) // For IE
		elem = event.srcElement;
	if (elem.nodeType == 3) // For Safari
		elem = elem.parentNode;
	
	return elem
}

function keyHandler(event)
{
	// for IE
	if (!event)
		var event = window.event
	
	var srcElement = getElem(event)
	var tag = srcElement.tagName;
	var override = !(tag == "A" || tag == "INPUT" || tag == "SELECT" || tag == "FORM" || tag == "SUBMIT");
	
	if (override && event.keyCode == 13) //13 is <enter> key
	{
		if (srcElement.click)
			srcElement.click();
		else
			srcElement.onclick();
	}
}

document.onkeypress = keyHandler;
