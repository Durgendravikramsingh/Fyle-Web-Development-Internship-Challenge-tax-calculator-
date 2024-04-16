function calculate(){
    var income=parseInt(document.getElementById('income').value);
    var extra=parseInt(document.getElementById('extra').value);
    var age=parseInt(document.getElementById('age').value);
    var dedactions=parseInt(document.getElementById('dedactions').value);
    var ans=0;
    if (age<18){
        ans="NO Tax";
    }
    else{
        var a1=0;
        a1=income+extra-dedactions;
        if (a1<=800000){
            ans="No Tax";
        }
        else if (a1>80000 && age <40){
            ans=.3*(a1-800000);
        }
        else if(a1>800000 && (age>=40 && age<60)){
            ans=.4*(a1-800000);
        }
        else if(a1>800000 && age>=60){
            ans=.1*(a1-800000);
        }

    }
    
    window.location.href="result.html?ans="+ans;
}