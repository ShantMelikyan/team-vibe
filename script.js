var myIndex = 0;
carousel();

// image carousel slideshow

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// info tabs show

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
    tabcontent[i].style.height = 0; // Set height to 0 when closing
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  var selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("active");
  selectedTab.style.height = selectedTab.scrollHeight + "px"; // Set height to the actual content height

  evt.currentTarget.classList.add("active");
}


  // language icon change
  const selectElement = document.querySelector('.language-select');
  const svgElement = document.querySelector('select');
  
  selectElement.addEventListener('change', function() {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // Update the background-image based on the selected option's class
    if (selectedOption.classList.contains('am-option')) {
      svgElement.style.backgroundImage = 'url("assets/am.svg")';
    } else if (selectedOption.classList.contains('en-option')) {
      svgElement.style.backgroundImage = 'url("assets/gb.svg")';
    } else if (selectedOption.classList.contains('ru-option')) {
      svgElement.style.backgroundImage = 'url("assets/ru.svg")';
    }
  });