/* Javascript originally written by: Brett Chang of evercloud.com */
/* Javascript altered to create one Div with a class of "caption" containing the image and the images alt-text displayed within a span for flexible styling abilities*/

function st_getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

var IMAGE_TRACKER = new Array();

function addImgCaption(myImgElem)

{
 var myParent = myImgElem.parentNode;

 var myParentParent = myImgElem.parentNode.parentNode;

 var myWrapperTable = null;

 var myNodeForAppend = myImgElem; 
 
	function createDiv(myImgElem, myNodeForAppend)

 {
	var myNodeForAppend = myImgElem; 
  var eDiv = document.createElement("div");

  var eBr = document.createElement("br");
  
  var eSpan = document.createElement("span");

  var eCaption =  document.createTextNode (myImgElem.getAttribute('alt'));
  //var eCaption =  document.createTextNode ("put yer code 'ere");

//stylin'!

  eDiv.className = "caption";
  eDiv.style.width=myImgElem.getAttribute("width")+"px";
  eDiv.style.cssFloat=myImgElem.getAttribute("align");
  eDiv.style.styleFloat=myImgElem.getAttribute("align");
	

//create the table structure
  eDiv.appendChild(myNodeForAppend);
  eDiv.appendChild(eBr);
  
  var imgAlt = myNodeForAppend.getAttribute("alt");
  var imgSrc = myNodeForAppend.getAttribute("src");  
  var imgSplit = imgSrc.split("/");
  var imgCount = (imgSplit.length-1);
  var imgName = imgSplit[imgCount];

  if(imgName != imgAlt && imgAlt != "" && imgAlt != null){
	 	 eDiv.appendChild(eSpan);
  		 eSpan.appendChild(eCaption);
  }
  
  	myNodeForAppend.setAttribute("alt", "");
	myNodeForAppend.removeAttribute("title");
    myNodeForAppend.removeAttribute("align");
  	myImgElem.setAttribute("alt", "");
	myImgElem.removeAttribute("title");
    myImgElem.removeAttribute("align");
return eDiv;

 }

 if(null == IMAGE_TRACKER[myImgElem.getAttribute('src')])

 {

if(myParent.nodeName == 'A'){

   myNodeForAppend = myParent;

   myWrapperDiv = createDiv(myImgElem, myNodeForAppend);

   myParentParent.appendChild(myWrapperDiv);

  }

  else

  {

   myWrapperDiv = createDiv(myImgElem, myNodeForAppend);

   myParent.appendChild(myWrapperDiv);

  }

  IMAGE_TRACKER[myImgElem.getAttribute('src')] = '1';

 }

}
function st_image_captions(){
	var myImages = st_getElementsByClass("captionimg");
	for(var i=0;i<myImages.length;i++){	
		addImgCaption(myImages[i]);
	}
}

window.onload = st_image_captions;