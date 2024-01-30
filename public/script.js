var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
console.log(tabLinks, tabContents);

function openTab(tabName){
    console.log(tabName);
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-tab-link");
    }

    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab-contents");
    }
    
    event.currentTarget.classList.add("active-tab-link");
    document.getElementById(tabName).classList.add("active-tab-contents")
}



document.addEventListener("DOMContentLoaded", function() {
    // Define the openmenu and closemenu functions
    function openmenu() {
      var sideMenu = document.getElementById("sidemenu");
      sideMenu.style.right = "0";
    }
  
    function closemenu() {
      var sideMenu = document.getElementById("sidemenu");
      sideMenu.style.right = "-180px";
    }
  
    // Attach click event listeners to the icons
    var openIcon = document.querySelector(".fa-bars");
    var closeIcon = document.querySelector(".fa-xmark");
  
    openIcon.addEventListener("click", openmenu);
    closeIcon.addEventListener("click", closemenu);
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx52zPZn65hr_kN5DP40KhumlkejYpL8ktd_a5PFB-EuLyvBf-pVNzdtlHdP9BOq250fw/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log("entered3");
          msg.innerHTML = "Message sent successfully";
          setTimeout(function () {
            msg.innerHTML = '';
          }, 5000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });
  });

  