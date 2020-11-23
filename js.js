{
	let d = document.getElementById("download");
	d.onmouseover = function() {
		let t = document.querySelector(".test");
		t.style.display = "block";
		// let s = document.getElementById('sanjiaoxing');
		// // s.style.opacity = 1;
		// s.style.display="block";
		// let e = document.getElementById('erweima');
		// e.style.display="block";
		// e.style.opacity = 1;
		// e.style.height = 110 + 'px';
		// e.style.padding = 20 + 'px';
		/* let i = document.getElementById('erwei');
		i.style.height = 100 + 'px'; */
		/* let i=e[0].getElementsByTagName('img');
		i[0].style.height=100px;*/
		// let t=document.getElementById('test');
		// t.style.opacity=1;
	};
	d.onmouseout = function() {
		let t = document.querySelector(".test")
		t.style.display = "none";
		// let s = document.getElementById('sanjiaoxing');
		// s.style.opacity = 0;
		// s.style.display="none"
		// let e = document.getElementById('erweima');
		// e.style.opacity = 0;
		// e.style.height = 0+ 'px';
		// e.style.padding = 0 + 'px';
		// e.style.display="none"
		// let t=document.getElementById('test');
		// t.style.opacity=0;
	};
	let s = document.getElementById("shopping");
	s.onmouseover = function() {
		let c = document.getElementById('shoppingcar');
		c.style.opacity = 1;
		c.style.display = "block"
		c.style.height = 101 + 'px';
	};
	s.onmouseout = function() {
		let c = document.getElementById('shoppingcar');
		// c.style.opacity=0;
		c.style.display = "none"
		c.style.height = 0 + 'px';
	};
} {
	let li = document.querySelectorAll("li.a");
	let l = document.querySelectorAll(".liebiao");
	for (let i = 0; i < li.length; i++) {
		li[i].onmouseover = function() {
			l[i].style.display = "block";
		}
		li[i].onmouseout = function() {
			l[i].style.display = "none";
		}
	}
} {
	let o = document.querySelector(".hbul input[type='text']");
	let s = ["aiugigi", "buuhjk", "casdwqqd", "dfgsadgawe", "ewDQW", "fSFE", "gfswf", "hsdfe"];
	let i = 0;
	let y = document.querySelector("#sousuokuang");


	function clock() {
		// console.log(i);
		o.value = s[i];
		i++;
		if (i == s.length) i = 0;
	}

	function test() {
		y.style.border = "#FF6700 solid 0px";
	}
	let int = setInterval("clock()", 10000);

	o.onfocus = function() {
		y.style.height = 232 + 'px';
		y.style.border = "#FF6700 solid 1px";
	}
	o.onblur = function() {
		y.style.height = 0 + 'px';
		let int = setTimeout("test()", 300);
	}
} {
	let i = document.querySelector(".logo");
	let f = document.querySelector(".logo img:nth-child(1)");
	let l = document.querySelector(".logo img:nth-child(2)");
	f.style.left = 0 + 'px';
	l.style.left = -56 + 'px';
	console.log(f.style.left);
	function move() {
		f.style.left = parseInt(f.style.left) + arguments[0]  + 'px';
		l.style.left = parseInt(l.style.left) + arguments[0] + 'px';
		if (parseInt(f.style.left) >= 56) return;
		let int = setTimeout("move(2,1)", arguments[1]);
	}

	function moved() {
		
		f.style.left = parseInt(f.style.left) - arguments[0] + 'px';
		l.style.left = parseInt(l.style.left) - arguments[0] + 'px';
		if (parseInt(f.style.left) <= 0) return;
		let int = setTimeout("moved(2,1)", arguments[1]);
	}
	// onmouseover函数会触发多次move(2,1)
	i.onmouseover = function() {
		if (f.style.left <= "0px") {
			move(2,1);
		}
	}
	i.onmouseout = function() {
		if (l.style.left >= "0px") {
			moved(2,1);
		}
	}

}
{
	let a=document.querySelectorAll(".b2ulli");
	let b=document.querySelectorAll(".b2l");
	for(let i=0;i<a.length;i++){
		a[i].onmouseover=function(){
		b[i].style.display="block";
		a[i].onmouseout=function(){
			b[i].style.display="none";
		}
	}
	}
}
/* {
	let imgs=["./images/0ef4160c861b998239bce9adb82341e7.jpg","./images/21b26ea3661cb4de289d4ab75591dabf.jpg","./images/294d206e6b4c7f62251842db940fb194.jpg","./images/9ebff5f5c1f52f2dbdd611897adbefd4.jpg","./images/a17f560beb1abe201b6b1f123cc1d5d9.jpg"];
	let lunbotu=document.querySelector(".lunbotu");
	let i=0;
	let t;
	function changed(){lunbotu.style.opacity=1;}
	function change(){
	let y=imgs[i];
	// clearInterval("t");
	lunbotu.style.opacity=0;
	setTimeout(function(){lunbotu.style.opacity=0;lunbotu.style.backgroundImage='url('+y+')';},2000);
	setTimeout("changed()",2000); 
	i++;
	if(i>=5)i=0;
	t=setTimeout("change()",7000);
	}
	
	t=setTimeout("change()",5000);
} */
{
	let index=0;
	let lunbotu=document.querySelectorAll(".lunbotu");
	let yuandian=document.querySelectorAll(".yuandian");
	let lunbokuang=document.querySelector(".lunbokuang");
	yuandian[4].className="hover"+" yuandian"+" yuandian"+5;
	
	
	pictureslunbo();
	yuandianlunbo();
	
	
	for(let i=0;i<yuandian.length;i++){
		yuandian[i].onmouseover=function(){
			if(index<=-1)index=0;
			clearInterval(timer);
		}
		yuandian[i].onclick=function(){
			lunbotu[index].style.display="none";
			lunbotu[index].style.animation="fadeOut 0s";
			lunbotu[i].style.display="block";
			lunbotu[i].style.animation="fadeIn 0.3s";
			yuandian[index].className="yuandian"+" yuandian"+(index+1);
			index=i;
			yuandian[i].className="hover"+" yuandian"+" yuandian"+(i+1);
		}
	}
	
	function pictureslunbo(){
		for(let i=0;i<lunbotu.length;i++){
			if(i==index){
				lunbotu[i].style.display="block";
				lunbotu[i].style.animation="fadeIn 3s"
			}
			else{
				lunbotu[i].style.display="none";
				lunbotu[i].style.animation="fadeOut 0.3s";
			}
		}
	}
	function yuandianlunbo(){
		for(let i=0;i<yuandian.length;i++){
			if(i==index){
				yuandian[i].className="hover"+" yuandian"+" yuandian"+(i+1);
			}
			else{
				yuandian[i].className="yuandian"+" yuandian"+(i+1);
			}
		}
	}
	let timer=setInterval(function(){
		index++;
		if(index>=5)index=0;
		pictureslunbo();
		yuandianlunbo();
	},5000);
	
	lunbokuang.onmouseover=function(){
		clearInterval(timer);
	}
	
	lunbokuang.onmouseout=function(){
		return timer=setInterval(function(){
			index++;
			if(index>=5)index=0;
			pictureslunbo();
			yuandianlunbo();
		},5000);
	}
	
	
	
	
// for(let i=0;i<lunbotu.length;i++){
// 		lunbotu[i].onmouseover=function(){
// 			console.log("6666666");
// 			clearInterval("timer");
// 		}
// 		lunbotu[i].onmouseout=function(){
// 			let timer=setInterval(function(){
// 				index++;
// 				if(index>=5)index=0;
// 				pictureslunbo();
// 				yuandianlunbo();
// 			},1000);
// 		}
// 	}

	
	
	
	
	
}


{
	let int = setInterval("clock()", 1000);
	function setTime(date,endDate,hour){
		let lefttime, h, m, s,nowHours;
		endDate.setHours(hour);
		endDate.setMinutes(00);
		endDate.setSeconds(00);
		let nowtime = date.getTime();
		let endtime = endDate.getTime();
		lefttime = endtime - nowtime;
		if (lefttime >= 0) {
			h = Math.floor(lefttime / 1000 / 60 / 60 % 24);
			h='0'+h;
			m = Math.floor(lefttime / 1000 / 60 % 60);
			if(m<10)m='0'+m;
			s = Math.floor(lefttime / 1000 % 60);
			if(s<10)s='0'+s;
		}
		//将倒计时赋值到div中
		document.getElementById("_h").innerHTML = h;
		document.getElementById("_m").innerHTML = m;
		document.getElementById("_s").innerHTML = s;
	}
	function clock() {
		let date = new Date();
		let endDate = new Date();
		nowHours=date.getHours();
		if (nowHours < 12) {
			setTime(date,endDate,12);
		} 
		else if(12<nowHours&&nowHours<17) {
			setTime(date,endDate,17);
		}
		else if(21<nowHours&&nowHours<23){
			setTime(date,endDate,23);
		}
	}
}
