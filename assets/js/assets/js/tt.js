function fun1(){console.log("============")}

function flip(obj,fun,t1=2000, t2=6000){
    var timeout=Math.round(Math.random()*t1+t2);
    console.log(timeout);
    clearTimeout(obj.flip);
    obj.flip=setTimeout(function timeoutFun(){
        fun();
        timeout=Math.round(Math.random()*t1+t2);
        console.log(timeout);
        obj.flip=setTimeout(timeoutFun,timeout);
    },timeout);
  }
obj=[];
flip(obj,fun1)


