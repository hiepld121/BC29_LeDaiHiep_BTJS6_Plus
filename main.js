

function xetSoNguyenTo(){
   
    var content = "";

   
    var soNguyenTo = document.getElementById("nhapSo").value*1;

    if(soNguyenTo < 2){
        alert("không phải số nguyên tố");
    }else{
    
    
    for(var i = 2; i <= soNguyenTo; i++){

        if(i == 2){
            content += i + " ";
        }else{
        
            var check = true;

            for(var j = 2; j <= Math.sqrt(i); j++){

                if(i % j == 0){
                    check = false;

                    break;

                }
            }
            
            if(check == true){
                content += i + " ";
            }
        }
        

    

        }
        return content;
    }
}


document.getElementById("btnNguyenTo").onclick = function(){

    var ketQua = xetSoNguyenTo();
    
   

    document.getElementById("kqua").innerHTML = ketQua;
}