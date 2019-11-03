let datark = 0;
let gorcoxutyun = '';
function mf(x){
	document.getElementById('inp').value+=x;
}
function mff (y){
	gorcoxutyun=y;
	datark = document.getElementById('inp').value;
	document.getElementById('inp').value = "";
}
function bf(a){
	switch (gorcoxutyun) {
  case "+":
    document.getElementById('inp').value=parseFloat(datark)+parseFloat(document.getElementById('inp').value);
    break;
    case "-":
    document.getElementById('inp').value=parseFloat(datark)-parseFloat(document.getElementById('inp').value);
    break;
    case "*":
    document.getElementById('inp').value=parseFloat(datark)*parseFloat(document.getElementById('inp').value);
    break;
    case "/":
    document.getElementById('inp').value=parseFloat(datark)/parseFloat(document.getElementById('inp').value)
    break;
}
}
function ccc(){
	document.getElementById('inp').value= "";
}
function block(){
	var x = document.getElementById('cont');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
function haytnvel() {
   block();
}
block();