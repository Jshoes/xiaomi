// window.onload=function(){
// 	var peiJian=getClass("duozhongfenlei")[0].getElementsByTagName("a");
// 	var tuPian=getClass("znyjright");
// 	for(var i=0;i<peiJian.length;i++){
// 		peiJian[i].index=i;
// 		peiJian[i].onmouseover=function(){
// 			for(var j=0;j<peiJian.length;j++){
// 				tuPian[j].style.display="none";
// 				peiJian[j].style.color="black";
// 			}
// 			tuPian[this.index].style.display="block";
// 			peiJian[this.index].style.color="#f40";
// 		}
// 	}
// }
window.onload=function(){
	var imgs=getClass("tupian")[0].getElementsByTagName("a");
	var annius=getClass("anniu")[0].getElementsByTagName("span");
	dabao(imgs,annius);
	function dabao(nihao,nihaoma){
	var m=0;
	nihao[0].style.zIndex=10;
	setInterval(function(){
		m++;
		if(m>4){
			m=0;
		}
		for(var i=0;i<nihao.length;i++){
			nihao[i].style.zIndex="";
			nihaoma[i].className="";
		}
		nihao[m].style.zIndex=10;
		nihaoma[m].className="col";
	},2000)
}
var peiJ=getClass("duozhongfenlei")[0].getElementsByTagName("a");
var bianhuas=getClass("znyjright",getClass("baoguo")[0]);
xuanxiangka(peiJ,bianhuas);
var peiJi=getClass("duozhongfenlei")[1].getElementsByTagName("a");
var bianhuasa=getClass("znyjright",getClass("baoguo")[1]);
xuanxiangka(peiJi,bianhuasa);
var peiJia=getClass("duozhongfenlei")[2].getElementsByTagName("a");
var bianhuasan=getClass("znyjright",getClass("baoguo")[2]);
xuanxiangka(peiJia,bianhuasan);
function xuanxiangka(links,lists){
		for(var i=0;i<links.length;i++){
	    	links[i].index=i;

			links[i].onmouseover=function(){
				for(var j=0;j<links.length;j++){
					lists[j].style.display="none";
					links[j].style.cssText="color:black;"
				}
				lists[this.index].style.cssText="display:block;"
				links[this.index].style.cssText="color:#f40;"
			}
		}
	}

var tupianlianjies=getClass("tupianlianjieright")[0].getElementsByTagName("img");
var mingxings=getClass("mingxing")[0].getElementsByTagName("img");
var yingjian1=getClass("znyjright1")[0].getElementsByTagName("img");
var yingjian2=getClass("znyjright")[0].getElementsByTagName("img");
var yingjian3=getClass("znyjright")[4].getElementsByTagName("img");
var yingjian4=getClass("znyjright")[9].getElementsByTagName("img");
var tuijian1=getClass("lunbotupian")[1].getElementsByTagName("img");
var rpcps1=getClass("rpcp")[0].getElementsByTagName("img");
window.onscroll=function(){
	var doc=document.body.scrollTop?document.body:document.documentElement;
    if(doc.scrollTop>30){
    	for(var i=0;i<tupianlianjies.length;i++){
    		tupianlianjies[i].src=tupianlianjies[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>400){
    	for(var i=0;i<mingxings.length;i++){
    		mingxings[i].src=mingxings[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>800){
    	for(var i=0;i<yingjian1.length;i++){
    		yingjian1[i].src=yingjian1[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>1500){
    	for(var i=0;i<yingjian2.length;i++){
    		yingjian2[i].src=yingjian2[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>2300){
    	for(var i=0;i<7;i++){
    		yingjian3[i].src=yingjian3[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>2950){
    	for(var i=0;i<7;i++){
    		yingjian4[i].src=yingjian4[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>3700){
    	for(var i=0;i<tuijian1.length;i++){
    		tuijian1[i].src=tuijian1[i].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>4100){
    	for(var i=0;i<rpcps1.length;i++){
    		rpcps1[i].src=rpcps1[i].getAttribute("asrc");
    	}
    }








}



























}


