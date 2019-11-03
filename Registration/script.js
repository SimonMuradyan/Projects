// function mouseover(x){
// 	x.style.backgroundColor="black"
// 	x.innerHTML="hajox axpers";
// }
function mouseout(x){
	x.style.backgroundColor="white" 
	// x.innerHTML="hajox Aper";
}

function mousedown(x){
	x.style.backgroundColor="blue"
	// x.innerHTML="kayfota";
}


// let angleren = ['first name', 'last name', .....];
// let ruseren = ['first name', 'last name', .....];
// let hayeren = ['first name', 'last name', .....];

// let popoxakan = document.getElementById('hajox');
// popoxakan.addEventListener('focus',function(){
// 	document.getElementById("barev").innerHTML=popoxakan.value;
// });

var ang=[
	"First Name",
	"Last Name",
	"Email Address",
	"Gender",
	"Password",
	"Confirm Password",	
];
var arm=[
	"անուն",
	"ազգանուն",
	"օգտանուն",
	"հասցե",
	"գենդեռ",
	"կոդ",
	"կոդ",
]
var rus=[
	"имя",
	"фамилия",
	"логин",
	"адрес",
	"гендер",
	 "пароль",
	"пароль",
]


document.getElementById("con").addEventListener('change',function(){
	var input=document.getElementsByClassName("inputner");
	switch(document.getElementById("con").value){
		case "Hayeren": 
		for (var i = 0; i <input.length; i++) {
			input[i].placeholder=arm[i];
		}
		document.getElementById("hr").innerHTML="տղա";
		document.getElementById("br").innerHTML="աղջիկ";
		

		break;
		case "Ruseren": 
		for (var i = 0; i <input.length; i++) {
			input[i].placeholder=rus[i];
		}
		document.getElementById("hr").innerHTML="мальчик";
		document.getElementById("br").innerHTML="девочка";
		break;
		case "Angleren": 
		for (var i = 0; i <input.length; i++) {
			input[i].placeholder=ang[i];
		}
		document.getElementById("hr").innerHTML="man";
		document.getElementById("br").innerHTML="whomen";
		break;

	}

})







