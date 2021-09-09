function history() {
  return document.getElementById("his").innerText;
}



function format_num(num) {
  var n = Number(num);
  var val = n.toLocaleString("en");
  return val;
}

function getres(num) {
  if (num == "") {
    document.getElementById("result").innerText = num;
  } else {
    document.getElementById("result").innerText = format_num(num);
  }
}
function gethistory(num) {
  document.getElementById("his").innerText = num;
}

function result() {
  return document.getElementById("result").innerText;
}

function tonum(num) {
  return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function() {
    var t = tonum(result());
    if (t != NaN) {
      t = t + this.id;
      getres(t);
    }

  })

}
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function() {
    if (this.id == "clear") {
      gethistory("");
      getres("");
    }
    else if (this.id == "backspace") {
      var output = tonum(result()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        getres(output);
      }
    }
    else{
      var amit=result();
      var mon=history();


      if(amit!=""){
        amit=tonum(amit);
        mon=mon+amit;
        if(this.id=="="){
          var calcu=eval(mon);
          getres(calcu);
          gethistory("");
        }
        else{
          mon=mon+this.id;
          gethistory(mon);
          getres("");
        }
      }
    }



  })

}
