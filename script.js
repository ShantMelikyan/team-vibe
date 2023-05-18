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
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
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
  selectedTab.style.height = selectedTab.scrollHeight + "0px"; // Set height to the actual content height

  evt.currentTarget.classList.add("active");
}

// language icon change
const selectElement = document.querySelector(".language-select");
const svgElement = document.querySelector("select");

selectElement.addEventListener("change", function () {
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  // Update the background-image based on the selected option's class
  if (selectedOption.classList.contains("am-option")) {
    svgElement.style.backgroundImage = 'url("assets/am.svg")';
  } else if (selectedOption.classList.contains("en-option")) {
    svgElement.style.backgroundImage = 'url("assets/gb.svg")';
  } else if (selectedOption.classList.contains("ru-option")) {
    svgElement.style.backgroundImage = 'url("assets/ru.svg")';
  }
});

let map;

// populate styles array with styles from 'styles.json'

//load map styles from json
function initMap() {
  let styles = [];
  $.ajax({
    dataType: "json",
    url: "assets/mapStyle.json",
    async: false,
    success: function (data) {
      styles = data;
    },
  });

  const myLatLng = { lat: 40.18537140704022, lng: 44.523966023346446 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: new google.maps.LatLng(40.18537140704022, 44.523966023346446),
    styles: styles,
    streetViewControl: false,
    mapTypeControl: false,
  });
  map.setOptions({
    zoomControl: false,
    // gestureHandling: "none",
    fullscreenControl: false,
  });
  const icon = {
    url: "/assets/logo.png", // url
    scaledSize: new google.maps.Size(41, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  };
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "TEAM VIBE",
    icon: icon,
    label: {
      fontSize: "8pt",
      // text: "TV",
    },
  });
}
window.initMap = initMap;
