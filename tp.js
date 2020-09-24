

function DisplayHW(){
        alert("Hello World!")
}

function hidebtn1(){
    document.getElementById('btn2').style.visibility='visible';
    document.getElementById('btn1').style.visibility='hidden';
}
function hidebtn2(){
    document.getElementById('btn1').style.visibility='visible';
    document.getElementById('btn2').style.visibility='hidden';
}

function isPrime() {        
    let number, n, flag = true; 
    number = document.getElementById("number").value; 
    number = parseInt(number) 
    for(n = 2; n <= number - 1; n++) 
        if (number % n == 0) { 
            flag = false; 
            break; 
        } 
       
    if (flag == true) 
        alert(number + " is a prime number"); 
    else
        alert(number + " is not a prime number"); 
}






function sendData(){ 
let FN = document.getElementById('FullName').value;
let AG = document.getElementById('Age').value;
if(FN==""){
    alert('please fill the fullname text box');
}else if(AG==""){
    alert('age field is not a number ')

}
else{
    
axios.post('http://localhost:8081/', {
    fullname: FN,
    age: AG
  })
  .then(function (response) {
      alert(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}
}


