var left=0;
var time;
run();
function run(){
    if(left <=-4800){
        left=0;
    }
    imglist.style.marginLeft = left +'px';
    left -= 10;
    var n=(left%1200==0)?1200:n=10;
    time = setTimeout(run,n)
}