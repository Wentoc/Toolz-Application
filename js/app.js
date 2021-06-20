function pageLoader()
{
  var loader = document.getElementById('loading');
  loader.style.display="none";
}

// Clock , Live time
// Live Date
$(document).ready(()=> {
  // Create two variables with names of months and days of the week in the array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  var newDate = new Date();

  newDate.setDate(newDate.getDate());

  $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ', ' 
  + newDate.getFullYear());

  setInterval(()=>{
      var seconds = new Date().getSeconds();

      $('#sec').html(( (seconds < 10) ? "0" : "") + seconds);
  }, 1000);

  setInterval(()=>{
       var minutes = new Date().getMinutes();

       $('#min').html(( (minutes < 10) ? "0" : "") + minutes);
  }, 1000);

  setInterval(()=>{
    var hours = new Date().getHours();

    $('#hours').html(( (hours < 10) ? "0" : "") + hours);
  }, 1000);

});

/**
 * Copyright(c)
 * ------------
 * Onpress Tool's Page transfer
 * tool1 tool2
 * tool3 tool4
 * tool5 tool6
 * tool7 tool8
 * tool9 tool10
 * ------------
 */

function tool1() // Tool-1
{
   window.location.assign('./tools/img2pdf.html');
}

function tool2() // Tool-2
{
  window.location.assign('./tools/notepad.html');
}

function tool3() // Tool-3
{
  window.location.assign('#');
}

function tool4() // Tool-4
{
  window.location.assign('#');
}

function tool5() // Tool-5
{
  window.location.assign('#');
}

function tool6() // Tool-6
{
  window.location.assign('#');
}

function tool7() // Tool-7
{
  window.location.assign('#');
}

function tool8() // Tool-8
{
  window.location.assign('#');
}

function tool9() // Tool-9
{
  window.location.assign('#');
}

function tool10() // Tool-10
{
  window.location.assign('#');
}

// ----------------------------












































