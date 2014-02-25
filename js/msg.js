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
Msg.prototype.hideMsg = function( elementId ){
    element = document.getElementById(elementId);
    element.style.display=none;
};