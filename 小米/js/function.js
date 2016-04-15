function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var Tags=obj.getElementsTagName("*");  //把全部都获得
		for(var i=0;i<Tags.length;i++){
			if(Tags[i]=classname){
				arr.push(Tags[i]);
			}
		}
		return arr;
	}
}

function inp(obj,val){
	if(val==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=val;
		}else{
			obj.textContent=val;
		}
	}
}