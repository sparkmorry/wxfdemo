function Msg(type, color, icon, text){
    this.type = type; //error & success
    this.color= color; //'#fc6f4c' red for error, '#03e19a' green for success
    this.icon = icon; 
    //'<i class="fa fa-times-circle-o"></i>' for error, '<i class="fa fa-check-circle-o"></i>' for suc
    this.text = text; //msg from server
};

Msg.prototype.showMsg = function( elementId ){
    element = document.getElementById(elementId);
    element.style.color=this.color;
    element.innerHTML=this.icon+this.text;
};

$(document).ready(function(){
  $("button").click(function(e){
    e.preventDefault();
    var username=$("#user").val();
    var password=$("#password").val();
    var errorMsg = new Msg('error', '#fc6f4c', '<i class="fa fa-times-circle-o"></i>', '');
    var successMsg = new Msg('success', '#03e19a', '<i class="fa fa-check-circle-o"></i>', '');
    var phoneCheck = /^(1[3|4|5|8])[0-9]{9}$/;
    var emailCheck = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if(username==''){
        errorMsg.text = "用户名不能为空"; 
        errorMsg.showMsg('user-msg');                     
    }else if( !phoneCheck.test(username) && !emailCheck.test(username) ){
        errorMsg.text = "请使用手机或者邮箱进行注册"; 
        errorMsg.showMsg('user-msg');                      
    }else{
        successMsg.text="用户名可以使用";
        successMsg.showMsg('user-msg');
        
    };

    if(password==''){
        errorMsg.text = "密码不能为空";
        errorMsg.showMsg('psw-msg');                    
    }
    if(password != '') {
        successMsg.text="密码可以使用";
        successMsg.showMsg('psw-msg');
    }



  });
});

// User = {
//     uid:'',
//     password:'',
//     ssid:'',
//     isLogin:false,
//     msg:{}
// }