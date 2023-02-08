// ##### DROPDOWN MENU ##########
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html"); // "includes/header.html"
      let resp = await fetch(file);
      if (resp.ok) {
          element.innerHTML = await resp.text();
      } else {
          element.innerHTML = 'Page not found';
      }
  }
}


function forward() {
  window.setTimeout('location.href="index.html"', 6000);
}

function timer() {
  let count = document.getElementById('counter');
  
  setTimeout(function ()  {
    count.innerText = 5;
  },1000);

  setTimeout(function ()  {
    count.innerText = 4;
  },2000);
  
  setTimeout(function ()  {
    count.innerText = 3;
  },3000);
  
  setTimeout(function ()  {
    count.innerText = 2;
  },4000);

  setTimeout(function ()  {
    count.innerText = 1;
  },5000);
  
}