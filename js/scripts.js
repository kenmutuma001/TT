function tracker(){
  var sideA=parseInt(document.getElementById("a").value);
  var sideB=parseInt(document.getElementById("b").value);
  var sideC=parseInt(document.getElementById("c").value);
  var ans = document.getElementById('alert');
  var no = document.getElementById("no");
  var one = sideA + sideB;
  var two = sideA + sideC;
  var three = sideB + sideC;

  if(one <= sideC || two <= sideB || three <= sideA) {
    ans.innerHTML="NOT A TRIANGLE";
    no.hide(1000)
  }
  else if(sideA===sideB && sideB===sideC){
    ans.innerHTML="AN EQUILATERAL TRIANGLE";
  }
  else if(sideA===sideB || sideA===sideC || sideB === sideC){
    ans.innerHTML="AN ISSOCELES TRIANGLE";
  }
  else if(sideA != sideB && sideB != sideC){
    ans.innerHTML="A SCALENE TRIANGLE";
  };
};
