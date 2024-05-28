let numvalue='0'

function numdisplay(){
    const display=document.getElementById('value')
    display.value=numvalue
}


function appendvalue(num){
    if(numvalue==="0"){
        numvalue=num
    }
    else{
        numvalue += num
    }
    numdisplay()
}
function nullvalue(){
    numvalue='0'
    numdisplay()
}

function deleteLast() {
    if (numvalue.length > 1) {
        numvalue = numvalue.slice(0, -1);
    } else {
        numvalue = '0';
    }
    numdisplay();
}

function calculate(){
     numvalue=eval(numvalue).toString()
     numdisplay()
}