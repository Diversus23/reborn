function sendEvent(eventName, eventParams) {

	//{{МетодДляВеб}}
	let lastEvent = new MouseEvent('click');
	lastEvent.eventData1C = {event : eventName, params: eventParams};
	return dispatchEvent(lastEvent);

}

function filterLeftBar(element) {
    filterText = element.value;
    element = document.getElementById("list_tree");
    handlingLeftBarRecursively(element.children, filterText);
}

function handlingLeftBarRecursively(list_arr, filterText){

  var hidden = true;
  
  for (let index = 0; index < list_arr.length; index++) {
    var _hidden = false;
    const element = list_arr[index];
    text = element.children[0].children[0].children[1].innerText.toLowerCase();
    if (text.search(filterText.toLowerCase()) == -1){
        _hidden = true;
    }
    
    if (element.children.length > 1){
        const groups = element.children[1];

        res = handlingLeftBarRecursively(groups.children, filterText);
        if (!res){
            _hidden = false;
        }
    }

    if (_hidden){
        element.style.display = "none";
    } else {
        hidden = false;
        element.style.display = "";
    }
  }

  return hidden;

}