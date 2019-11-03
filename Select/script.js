




// selectner@
// document.getElementById("sel").addEventListener("change",function(){
// 	let zzz =document.getElementById("sel").value;
// 	if(zzz== "en"){
// 		document.getElementById("inp").addEventListener("keyup",function(){
// 			let newtext = "";
// 			let z =this.value.split("");
// 			for (var i = 0; i < z.length; i++) {
// 				newtext+=tarer[z[i]];
// 			}
// 			x.innerHTML = newtext;
// 		})
// 	}
// 	else if(zzz=="ru"){
// 		document.getElementById("inp").addEventListener("keyup",function(){
// 			let newtext =  "";
// 			let y = this.value.split("");
// 			for (var i = 0; i < y.length; i++) {
// 				newtext+=tarerr[z[i]];
// 			}
// 			x.innerHTML = newtext;
// 		})
// 	}
// })




let x = document.getElementById("empty");
let newsel = "";
let qaxaqner = {
	hay:["Erevan","Kiravakan","Ijevan","Gavar"],
	rus:["Moskva","Vladimir","Peterburg","Krasnodar"]
}
document.getElementById("sel").addEventListener("change",function(){
	let country = document.getElementById("sel").value;
	let newsel = "";
	for (let i = 0; i < qaxaqner[country].length; i++) {
		newsel += "<option>"+qaxaqner[country][i]+"</option>";
	}
	x.innerHTML = newsel;
	console.log(newsel);
})
 







// hamar 1
// let paragraf = document.getElementById("demo");
// let newtext= "";
// let tarer = {
// 	a:"ա",
// 	b:"բ",
// 	c:"ց"
// }
// let tarerr = {
// 	а:"ա",
// 	б:"բ",
// 	ц:"ց"
// }
// document.getElementById("sel").addEventListener("change",function(){
// 	let zzz = document.getElementById("sel").value;
// 	if(zzz == "en"){
// 		document.getElementById("inp").addEventListener("keyup",function(){
// 			let newtext= "";
// 			let z= this.value.split("");
			
// 			for (var i = 0; i < z.length; i++) {
// 				newtext+= tarer[z[i]];
// 			}
// 			paragraf.innerHTML = newtext;
// 		})
		
// 	}
// 	else if (zzz=="ru"){
// 			document.getElementById("inp").addEventListener("keyup",function(){
// 			let newtext= "";
// 			let z= this.value.split("");	
// 			for (var i = 0; i < z.length; i++) {
// 				newtext+= tarerr[z[i]];
// 			}
// 			paragraf.innerHTML = newtext;
// 		})
// 		}
// 	})




















// let output = document.getElementById("demo");
// let newtext = "";
// let selectedlang = "am";
// let lang = {
// 	en:{
// 		a:"a",
// 		b:"a",
// 		c:"a"
// 	},
// 	am:{
// 		a:"a",
// 		b:"a",
// 		c:"a"
// 	},
// 	ru:{
// 		a:"a",
// 		b:"a",
// 		c:"a"
// 	}
// }
// document.getElementById("sel").addEventListener("change",function(){
// 	selectedlang=this.value
// 	out(document.getElementById("inp").value.split(""))
// })
// document.getElementById("inp").addEventListener("keyup",function(){
// 	out(this.value.split(""))
// })
// function out(arr){
// 	newtext= "";
// 	for (var i = 0; i < arr.length; i++) {
// 		newtext+=lang[selectedlang][arr[i]]
// 	}
// 	output.innerHTML=newtext;
// }
