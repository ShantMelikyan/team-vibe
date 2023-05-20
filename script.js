

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// info tabs show

function openTab(evt, tabName) {
  evt.preventDefault();
  document.querySelector('#info').scrollIntoView({ behavior: 'smooth'});
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
const selectElement = document.querySelector(".language-select");
const svgElement = document.querySelector("select");

selectElement.addEventListener("change", function () {
  var htmlElement = document.getElementsByTagName("html")[0];
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  // Update the background-image based on the selected option's class
  if (selectedOption.classList.contains("am-option")) {
    svgElement.style.backgroundImage = 'url("assets/am.svg")';
    htmlElement.style.fontFamily = "SosGro";
  } else if (selectedOption.classList.contains("en-option")) {
    svgElement.style.backgroundImage = 'url("assets/gb.svg")';
    htmlElement.style.fontFamily = "Ballista";
  } else if (selectedOption.classList.contains("ru-option")) {
    svgElement.style.backgroundImage = 'url("assets/ru.svg")';
    htmlElement.style.fontFamily = "Days2";
  }
});

let map;

// populate styles array with styles from 'styles.json'


function initMap() {
  //load map styles from json
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
    keyboardShortcuts: false,
     zoomControl: false,
    fullscreenControl: false,
  });
  const icon = {
    url: "/assets/logo.png", // url
    scaledSize: new google.maps.Size(42, 50), // scaled size
    // origin: new google.maps.Point(0, 0), // origin
    // anchor: new google.maps.Point(0, 0), // anchor
  };
 
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "TEAM VIBE",
    icon: icon,
    label: {
      fontSize: "8pt",
      text: "TV",
    },
  });
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };

  //     // Set the map center to the current location
  //     map.setCenter(pos);

  //     // Create a marker at the current location
  //     let marker = new google.maps.Marker({
  //       position: pos,
  //       map: map,
  //       icon: myLocationIcon,
  //     });
  //   }, function() {
  //     handleLocationError(true, map.getCenter());
  //   });
  // }

 // Declare the marker variable outside the scope of the getCurrentPosition function



}


// Get a reference to the button element
let button = document.getElementById("myLocationId");


// Add a click event listener to the button
button.addEventListener("click", function() {
  let marker;
  const myLocationIcon = {
    url: "/assets/crosshair.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    // origin: new google.maps.Point(0, 0), // origin
    // anchor: new google.maps.Point(0, 0), // anchor
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Set the map center to the current location
      map.setCenter(pos);

      // Create a marker at the current location
      marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: myLocationIcon,
      });
    }, function() {
      handleLocationError(true, map.getCenter());
    });
  }
});

window.initMap = initMap;
