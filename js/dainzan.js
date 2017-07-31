window.onload = function () {
    var main= document.getElementById("main");
    var fchild= main.children;
    function dianzan(el) {
        var myPraise = parseInt(el.getAttribute("my"));
        var oldTotal = parseInt(el.getAttribute("total"));
        var newTotal;
        if (myPraise == 0) {
            newTotal = oldTotal + 1;
            el.setAttribute("total", newTotal);
            el.setAttribute("my", 1);
            el.innerHTML = "<i class='iconfont' style='color:red;'>&#xe651;</i>" +"<span >取消赞</span>" + "(" +newTotal+ ")";
        }
        else {
            newTotal = oldTotal - 1;
            el.setAttribute("total", newTotal);
            el.setAttribute("my", 0);
            el.innerHTML ="<i class='iconfont fir'>&#xe502;</i>"  + "<span>赞</span>"+"(" +newTotal+ ")";
        }
    }
    fchild[0].onclick = function () {
        dianzan(fchild[0]);
    } 
}


































//window.onload=function(){
//	var main=document.getElementById("main");
//	var fchild=main.firstChild;
//	function dianzan(el){
//		var mypraise=parseInt(el.getAttribute("my"));
//		var oldTotal=parseInt(el.getAttribute("total"));
//		var newTotal;
//		if (mypraise==0) {
//			newTotal=oldTotal+1;
//			el.setAttribute("total",newTotal);
//			el.setAttribute("my",1);
//			el.innerHTML=newTotal+"取消赞";
//		} else {
//			newTotal=oldTotal-1;
//			el.setAttribute("total",newTotal);
//			el.setAttribute("my",0);
//			el.innerHTML=(newTotal==0) ? "赞":newTotal+"赞";
//		}
//	}	
//	fchild.onclick=function(e){
//		e = e || window.event;
//		var el = e.srcElement;
//	            switch (el.className) {
//	                case 'dianzan':
//	                    dianzan(el);
//	                    break;
//	            }
//	}
//
//}