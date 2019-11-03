var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let main_options = {
	"con_bg":'#009900',
	"bor_type":'solid',
	"bor_col":'#141518',
	"cont_bg":'#ffffff',
	"bord_type":'solid',
	"bord_col":'#141518',
	"box_bg":'#ff0000',
	"box_type":'solid',
	"box_col":'#141518'
}
let con_bg = document.getElementById("con_bg").value;
function mf(){
	document.getElementById("conteiner").style.backgroundColor = main_options['con_bg'];
	document.getElementById("con_bg").value=main_options['con_bg'];
}
mf(main_options);
	document.getElementById("con_bg").addEventListener("change",function(){
		document.getElementById("conteiner").style.backgroundColor=document.getElementById('con_bg').value;	
	})




let bor_type = document.getElementById("bor_type").value;
function mf2(){
	document.getElementById("conteiner").style.border= main_options['bor_type'];
	document.getElementById("bor_type").value=main_options['bor_type'];
}
mf2(main_options);
	document.getElementById("bor_type").addEventListener("change",function(){
	document.getElementById("conteiner").style.border=document.getElementById('bor_type').value;	
	})





let bor_col = document.getElementById("bor_col").value;
function mf3(){
	document.getElementById("conteiner").style.borderColor= main_options['bor_col'];
	document.getElementById("bor_col").value=main_options['bor_col'];
}
mf3(main_options);
	document.getElementById("bor_col").addEventListener("change",function(){
	document.getElementById("conteiner").style.borderColor=document.getElementById('bor_col').value;	
	})





let border = document.getElementById("border").value;
function mf4(){
	document.getElementById("conteiner").style.borderWidth= main_options['border'];
	document.getElementById("border").value=main_options['border'];
}
mf4(main_options);
	document.getElementById("border").addEventListener("change",function(){
	document.getElementById("conteiner").style.borderWidth=document.getElementById('border').value + "px";	
	})







let bor_rad = document.getElementById("bor_rad").value;
function mf5(){
	document.getElementById("conteiner").style.borderRadius= main_options['bor_rad'];
	document.getElementById("bor_rad").value=main_options['bor_rad'];
}
mf5(main_options);
	document.getElementById("bor_rad").addEventListener("change",function(){
	document.getElementById("conteiner").style.borderRadius=document.getElementById('bor_rad').value + "px";	
	})






let pad_px = document.getElementById("pad_px").value;
function mf6(){
	document.getElementById("conteiner").style.padding= main_options['pad_px'];
	document.getElementById("pad_px").value=main_options['pad_px'];
}
mf6(main_options);
	document.getElementById("pad_px").addEventListener("change",function(){
	document.getElementById("conteiner").style.padding=document.getElementById('pad_px').value + "px";	
	})






let whi_px = document.getElementById("whi_px").value;
function mf7(){
	document.getElementById("conteiner").style.width= main_options['whi_px'];
	document.getElementById("whi_px").value=main_options['whi_px'];
}
mf7(main_options);
	document.getElementById("whi_px").addEventListener("change",function(){
	document.getElementById("conteiner").style.width=document.getElementById('whi_px').value + "px";	
	})





let hei_px = document.getElementById("hei_px").value;
function mf8(){
	document.getElementById("conteiner").style.heght= main_options['hei_px'];
	document.getElementById("hei_px").value=main_options['hei_px'];
}
mf8(main_options);
	document.getElementById("hei_px").addEventListener("change",function(){
	document.getElementById("conteiner").style.height=document.getElementById('hei_px').value + "px";	
	})





	
function mf9(){
	var shadow = document.getElementById("shadow");
	if(shadow.checked ==true){
		conteiner.style.boxShadow = "10px 10px #eee";
	}
	else{
		conteiner.style.boxShadow = "none";
	}
}






let cont_bg = document.getElementById("cont_bg").value;
function mf10(){
	document.getElementById("contant").style.backgroundColor= main_options['cont_bg'];
	document.getElementById("cont_bg").value=main_options['cont_bg'];
}
mf10(main_options);
	document.getElementById("cont_bg").addEventListener("change",function(){
	document.getElementById("contant").style.backgroundColor=document.getElementById('cont_bg').value;	
	})





let bord_type = document.getElementById("bord_type").value;
function mf11(){
	document.getElementById("contant").style.border= main_options['bord_type'];
	document.getElementById("bord_type").value=main_options['bord_type'];
}
mf11(main_options);
	document.getElementById("bord_type").addEventListener("change",function(){
	document.getElementById("contant").style.border=document.getElementById('bord_type').value;	
	})





let bord_col = document.getElementById("bord_col").value;
function mf12(){
	document.getElementById("contant").style.borderColor= main_options['bord_col'];
	document.getElementById("bord_col").value=main_options['bord_type'];
}
mf12(main_options);
	document.getElementById("bord_col").addEventListener("change",function(){
	document.getElementById("contant").style.borderColor=document.getElementById('bord_col').value;	
	})





let bord_px = document.getElementById("bord_px").value;
function mf13(){
	document.getElementById("contant").style.borderWidth= main_options['bord_px'];
	document.getElementById("bord_px").value=main_options['bord_px'];
}
mf13(main_options);
	document.getElementById("bord_px").addEventListener("change",function(){
	document.getElementById("contant").style.borderWidth=document.getElementById('bord_px').value + "px";	
	})





let box_bg = document.getElementById("box_bg").value;
function mf14(){
	document.getElementById("box").style.backgroundColor= main_options['box_bg'];
	document.getElementById("box_bg").value=main_options['box_bg'];
}
mf14(main_options);
	document.getElementById("box_bg").addEventListener("change",function(){
	document.getElementById("box").style.backgroundColor=document.getElementById('box_bg').value;	
	})





let box_type = document.getElementById("box_type").value;
function mf15(){
	document.getElementById("box").style.border= main_options['box_type'];
	document.getElementById("box_type").value=main_options['box_type'];
}
mf15(main_options);
	document.getElementById("box_type").addEventListener("change",function(){
	document.getElementById("box").style.border=document.getElementById('box_type').value;	
	})




let box_col = document.getElementById("box_col").value;
function mf16(){
	document.getElementById("box").style.borderColor= main_options['box_col'];
	document.getElementById("box_col").value=main_options['box_col'];
}
mf16(main_options);
	document.getElementById("box_col").addEventListener("change",function(){
	document.getElementById("box").style.borderColor=document.getElementById('box_col').value;	
	})





let box_px = document.getElementById("box_px").value;
function mf17(){
	document.getElementById("box").style.borderWidth= main_options['box_px'];
	document.getElementById("box_px").value=main_options['box_px'];
}
mf17(main_options);
	document.getElementById("box_px").addEventListener("change",function(){
	document.getElementById("box").style.borderWidth=document.getElementById('box_px').value + "px";	
	})







let box_whi = document.getElementById("box_whi").value;
function mf18(){
	document.getElementById("box").style.width= main_options['box_whi'];
	document.getElementById("box_whi").value=main_options['box_whi'];
}
mf18(main_options);
	document.getElementById("box_whi").addEventListener("change",function(){
	document.getElementById("box").style.width=document.getElementById('box_whi').value + "px";	
	})





let box_hei = document.getElementById("box_hei").value;
function mf19(){
	document.getElementById("box").style.height= main_options['box_hei'];
	document.getElementById("box_hei").value=main_options['box_hei'];
}
mf19(main_options);
	document.getElementById("box_hei").addEventListener("change",function(){
	document.getElementById("box").style.height=document.getElementById('box_hei').value + "px";	
	})





window.addEventListener("keyup",function(event){
	let box = document.getElementById("box");
	let move_point = document.getElementById("MovePoint").value;

	switch (event.keyCode){
		case 40:
		{
			let new_matgin="";
			if(parseFloat(box.style.marginTop.replace('px','')))
			{
				new_matgin=parseFloat(box.style.marginTop.replace('px',''))+parseFloat(move_point);
			}
			else{
				new_matgin=parseFloat(move_point);
			}
			if(new_matgin>179){
				new_matgin=179;
			}
			box.style.marginTop=new_matgin+'px';
			break;
		}
		case 39:{
			let new_matgin="";
			if(parseFloat(box.style.marginLeft.replace('px','')))
			{
				new_matgin=parseFloat(box.style.marginLeft.replace('px',''))+parseFloat(move_point);
			}
			else
			{
				new_matgin=parseFloat(move_point);
			}
			if(new_matgin>479)
			{
				new_matgin=479;
			}
			box.style.marginLeft=new_matgin+'px';
		}
		break;
		case 38:{
			let new_matgin="";
			if(parseFloat(box.style.marginTop.replace('px',''))&&
				(parseFloat(box.style.marginTop.replace('px',''))-parseFloat(move_point))>0
			  )
			{
				new_matgin=parseFloat(box.style.marginTop.replace('px',''))-parseFloat(move_point);
			}
			else{
				new_matgin= 0
			}
			box.style.marginTop=new_matgin+'px';
		}
		break;
		case 37:
		{
			let new_matgin= "";
			if(
				parseFloat(box.style.marginLeft.replace('px',''))
				&& (parseFloat(box.style.marginLeft.replace('px',''))-parseFloat(move_point))>0
			  )
			  {
			  	new_matgin=parseFloat(box.style.marginLeft.replace('px',''))-parseFloat(move_point);
			  }
			  else
			  {
			  	new_matgin=0
			  }
			  box.style.marginLeft=new_matgin+'px';
		}
	}
 })

