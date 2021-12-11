function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile);
})

function display(cse){
           // cards area' 
var rdata=document.querySelector(".row")
    for(var k=0;k<cse.length;k++){
        console.log(cse)
 
//  card 
var cad=document.createElement("div")
    cad.classList.add("card")
    rdata.appendChild(cad)

//  img 
var pic=document.createElement("img")
pic.src=cse[k].img
cad.appendChild(pic)


var sname=document.createElement("h1")
sname.textContent=cse[k].name;
cad.appendChild(sname)


    }


}



