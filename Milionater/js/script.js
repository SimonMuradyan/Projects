let count = 0;
let askEl = document.getElementById('qu');
let btn1 =document.getElementById('ans1');
let btn2 =document.getElementById('ans2');
let btn3 =document.getElementById('ans3');
let btn4 =document.getElementById('ans4');
let btns = document.getElementsByClassName('ansers');
function ask(obj){
	askEl.innerHTML = obj.harc +" "+ (count+1);
	for (let i = 0; i < btns.length; i++) {
		btns[i].style.background="blue";
	}
	for(i in btns){		
		btns[i].innerHTML = obj["patasxan"+(parseInt(i)+1)]
	}
	
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click",function(){

		if (this.innerHTML==array[count].chisht()) {
			this.style.background="green";
			count++;
			setTimeout(function(){ask(array[count])},3000)
		}else{
			count=0;
			this.style.background="red";
			this.innerHTML="sxalveciq"
			setTimeout(function(){
				ask(array[count])
		},1500)
			
		}
	});
}

ask(array[count])
