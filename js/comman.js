
 $(document).ready(function(){

 var sWidth = $('#ad').width();
 var len = $('#ad .sildebar li').length;
 var timer;
 var index = 0;

 var focusBox = '<ul class="focusBox clearfix"></ul>';
 $('#ad').append(focusBox);

 //生成底部焦点
 for(var i=0;i<len;i++){
    var li = document.createElement('li');
    $('.focusBox')[0].appendChild(li);
 }  
  //点击圆点时，进行切换
 $('#ad .focusBox li').click(function(){
    index = $('#ad .focusBox li').index(this);
    showPic(index);
 }).eq(0).trigger('click');
 
 $('#ad .sildebar').css("width",sWidth * (len));

//定时器，定时进行切换
 $('#ad').hover(function(){
    clearInterval(timer);
    },function(){
        timer = setInterval(function(){
        showPic(index);
        index++;
        if(index == len){index = 0;}
        },3000);
 }).trigger('mouseleave');

 function showPic(index){
    var nowLeft = -index * sWidth;
    $('#ad .sildebar').stop(true,false).animate({left:nowLeft},500);
    $('#ad .focusBox li').removeClass('cur').eq(index).addClass('cur');
  //$('.sildebar li').eq(index).fadeIn(800).siblings().hide();//淡出淡入效果
 }

 //点击ios下载出现对应的二维码，点击安卓下载出现对应的二维码
    $(".iosdownload").click(function(){
        $(".ios").show();
        $(".andriod").hide();
    });
    $(".andrioddownload").click(function(){
        $(".andriod").show();
        $(".ios").hide();
    });
//点击切换
    
});
    
