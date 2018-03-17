function ViewMgrSetRasterLocation(pageID, shapeID, pinX, pinY)
{
	clickMenu ();

	var rasterImage = document.images("RasterImage");

	var imageLeft = 0;
	var imageRight = imageLeft + rasterImage.offsetWidth;
	var imageTop = 0;
	var imageBottom = imageTop + rasterImage.offsetHeight;
	
	var xLong = parent.ConvertXorYCoordinate(pinX, viewMgr.visBBoxLeft, viewMgr.visBBoxRight, imageLeft, imageRight, 0);
	var yLong = parent.ConvertXorYCoordinate(pinY, viewMgr.visBBoxBottom, viewMgr.visBBoxTop, imageTop, imageBottom, 1);
	
	var pixelWidth = document.body.scrollWidth;
	var pixelHeight = document.body.scrollHeight;

	var clientWidth = document.body.clientWidth;
	var clientHeight = document.body.clientHeight;
	var halfClientWidth = clientWidth;
	var halfClientHeight = clientHeight;

	xLong = xLong + rasterImage.offsetLeft;
	yLong = yLong + rasterImage.offsetTop;
	var xScrollAmount = 0;
	var yScrollAmount = 0;

	var xPrevScrollAmount = document.body.scrollLeft;
	var yPrevScrollAmount = document.body.scrollTop;

	var arrowHalfWidth = arrowdiv.clientWidth / 2;
	var arrowHeight = arrowdiv.clientHeight;

	if ((xLong - arrowHalfWidth) < xPrevScrollAmount)
	{
		// X off left of screen.
		document.body.scrollLeft = xLong - arrowHalfWidth;
	}
	else if ((xLong + arrowHalfWidth) > (clientWidth + xPrevScrollAmount))
	{
		// X off right of screen. 
		document.body.scrollLeft = xLong - clientWidth + xPrevScrollAmount + arrowHalfWidth;
	}

	if (yLong < yPrevScrollAmount)
	{
		// Y off top of screen.
		document.body.scrollTop = yLong;
	}
	else if ((yLong + arrowHeight) > (clientHeight + yPrevScrollAmount))
	{
		// Y off bottom of screen. 
		document.body.scrollTop = yLong - clientHeight + yPrevScrollAmount + arrowHeight;
	}

	arrowdiv.style.posLeft = xLong - arrowHalfWidth;
	arrowdiv.style.posTop = yLong;
	arrowdiv.style.visibility = "visible";

	setTimeout( "parent.hideObject(arrowdiv)", 0 );
	setTimeout( "parent.showObject(arrowdiv)", 1 );
	setTimeout( "parent.hideObject(arrowdiv)", 2000 );
}

