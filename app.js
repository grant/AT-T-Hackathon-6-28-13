// Switch
var skills = ['Art', 'Music', 'Computer', 'Languages', 'Science', 'Math'];
$(function() {
  var $ul = $('.skillUL');
  for (var i = 0; i < skills.length; ++i) {
    var li = '<div class="li">' +
        '<span class="skillTitle">' + skills[i] + '</span>' +
        '<div class="sliderWrapper">' +
          "<input type='checkbox' name='opt1' id='opt1' value='1' class='toggleswitch' checked='checked' />" +
        '</div>' +
      '</div>';
    $ul.append(li);
  }
});

jQuery(document).ready(function($) {
    $('.toggleswitch').toggleSwitch();
});

// Feed

var json = '{"Gatzert Elementary School":{"Address":"1301 East Yesler Wy Seattle WA 98122", "lat":"47.60184560", "lng":"-122.31528850", "Opportunity":"Math tutor for 3rd/4th grade class.", "Description":"Need volunteer to tutor 3rd and 4th graders on fractions.", "Number":"1", "Date":"Tuesdays", "Time":"2:00-4:00 PM", "Skills":["Math", "Any"], "Points":"300"}, "Gatzert Elementary School":{"Address":"1301 East Yesler Wy Seattle WA 98122", "lat":47.60184560, "lng":-122.31528850, "Opportunity":"Plant and weed flowerbeds.", "Description":"Come help us clean up and replant the front flower beds.  Bring garden tools and gloves. Appropriate for students, under 13 with parent supervision", "Number":"20", "Date":"Saturday April 6", "Time":"noon-4:00 PM", "Skills":["Any"], "Points":"600"}, "Lowell Elementary School":{"Address":"1058 East Mercer St Seattle WA 98102", "lat":47.6247020, "lng":-122.3183070, "Opportunity":"General school tutoring", "Description":"Need more helpers for our after school study lab.  Students need help in a variety of subjects.", "Number":"5", "Date":"Monday-Thursday", "Time":"3:00-4:30 PM", "Skills":["Math", "Science", "Computer", "Languages", "Any"], "Points":"600"}, "Bacon Hill Elementary School":{"Address":"2025 14 Ave South Seattle WA 98144", "lat":47.5850830, "lng":-122.3153340, "Opportunity":"Help in music class", "Description":"Do you know how to read music or play a musical instrument?  Please come and help students in our music program.", "Number":"2", "Date":"Tuesdays", "Time":"10:00-11:00 AM", "Skills":["Music"], "Points":"100"}, "Leschi Elementary School":{"Address":"135 32 Ave Seattle WA 98122", "lat":47.6019580, "lng":-122.2919510, "Opportunity":"Drivers for field trip to museum", "Description":"We still need drivers for our trip to the Pacific Science Center!  District driving clearance required. Let us know how many children can fit in your car, with seat belts.", "Number":"4", "Date":"April 8", "Time":"10:00 AM - 4:00 PM", "Skills":["Any"], "Points":"500"}, "Thurgood Marshall Elementary School":{"Address":"2401 South Irving St Seattle WA", "lat":47.5909610, "lng":-122.2992640, "Opportunity":"Lunch room and recess monitor", "Description":"Looking for one more person to monitor students at lunch and recess.  No experience necessary.", "Number":"1", "Date":"Monday-Friday", "Time":"11:00 AM - 1:00 PM", "Skills":["Any"], "Points":"200"}, "Thurgood Marshall Elementary School":{"Address":"2401 South Irving St Seattle WA", "lat":47.5909610, "lng":-122.2992640, "Opportunity":"Science lab helper", "Description":"Help me prevent my chemistry class from lighting the class on fire with their bunsen burners.  Thanks much.  Mr. Nye.", "Number":"1", "Date":"Tuesday,Thursday", "Time":"9:30-10:30", "Skills":["Science", "Any"], "Points":"200"}, "Thurgood Marshall Elementary School":{"Address":"2401 South Irving St Seattle WA", "lat":47.5909610, "lng":-122.2992640, "Opportunity":"Science lab helper", "Description":"Help me prevent my chemistry class from lighting the class on fire with their bunsen burners.  Thanks much.  Mr. Nye.", "Number":"1", "Date":"Tuesday,Thursday", "Time":"9:30-10:30", "Skills":["Science", "Any"], "Points":"200"}, "Washington Middle School":{"Address":"2101 South Jackson St Seattle WA", "lat":47.5978260, "lng":-122.3037060, "Opportunity":"Math Tutor for Advanced Algebra", "Description":"Can you spare a few hours a week to help students struggling with Advanced Algebra topics?  Thanks.", "Number":"1", "Date":"Open", "Time":"Open", "Skills":["Math"], "Points":"100"}, "Mclure Middle School":{"Address":"1915 1 Av West Seattle WA", "lat":47.63571870, "lng":-122.35830320, "Opportunity":"Career Day Presenters", "Description":"Do you have an interesting job?  Would love to have you share at our career fair.", "Number":"12", "Date":"Wednesday April 12", "Time":"8:00-10:00 PM", "Skills":["Any"], "Points":"200"}, "Mclure Middle School":{"Address":"1915 1 Av West Seattle WA", "lat":47.63571870, "lng":-122.35830320, "Opportunity":"Girl\'s Basketball Coach", "Description":"Need assistant coach for girls\' basketball team.", "Number":"1", "Date":"Monday-Thursday", "Time":"3:00-4:30 PM", "Skills":["Any"], "Points":"600"}, "Hamilton International Middle School":{"Address":"4400 Interlake Avenue North Seattle WA", "lat":47.66013820, "lng":-122.33983810, "Opportunity":"Front office helper", "Description":"Answer phones and check in school visitors.", "Number":"1", "Date":"Monday-Friday", "Time":"7:30-8:30 AM", "Skills":["Any"], "Points":"500"} }';
var schools = $.parseJSON(json);
var schoolKeys = Object.keys(schools);

$(function() {
  var $ul = $('.locationList');

  for (var i = 0; i < schoolKeys.length; ++i) {
    var schoolName = schoolKeys[i];//string
    var schoolData = schools[schoolName];//object

    var li = '<li>' +
        '<div class="locationFirstRow">' +
          '<div class="numberCircle">' + (i + 1) + '</div>' +
          '<h1 class="locationTitle">' + schoolData.Opportunity + '</h1>' +
          '<h2 class="locationLocation">' + schoolName + ": " + schoolData.Address + '</h2>' +
        '</div>' +
        '<div class="locationSecondRow">' +
          '<p>'+schoolData.Description+'</p>' +
        '</div>' +
        '<div class="social"></div>' +
      '</li>';
    $ul.append(li);

    // Results circle
    $('.resultsCircle').find('.number').html(schoolKeys.length);
  }
});

// 
// Google map
// 

var map;
var center_location;
var infowindow;
var makers;
var marker;

$(function() {
  var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(47.600743,-122.3314),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  map = new google.maps.Map(document.getElementById('googleMap'),mapOptions);
  $('#map').on('pageshow', function() {
      google.maps.event.trigger(map, 'resize'); // cause the map to refresh itself
      map.panTo(mapOptions.center);                   // make sure it centers on the marker
    });

  // the for loop drawing all points
  for (var i = 0; i < schoolKeys.length; ++i) {
    var schoolName = schoolKeys[i];
    var schoolData = schools[schoolName];
    var lat = schoolData.lat;
    var lng = schoolData.lng;
    setupGeo(lat, lng);
  }
});

function setupGeo(lat,lng){

    markers = [];

    var item = new google.maps.LatLng(lat,lng);
    markers.push(item);

    // Marker color
    var pinColor = "6A7EA5";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

    marker = new google.maps.Marker({
        position: item,
        title:"Hello World!",
        icon: pinImage,
        shadow: pinShadow
    });

    marker.setMap(map);
}

function filter() {
  document.getElementById("googleMap").innerHTML = "";
    // clear map
   var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(47.600743,-122.3314),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('googleMap'),mapOptions);
    // make new map

    markers = [];
    for (var i = 4; i < schoolKeys.length-1; ++i) {

    // how I set up
        var schoolName = schoolKeys[i];
        var schoolData = schools[schoolName];
        var lat = schoolData.lat;
        var lng = schoolData.lng;

        setupGeo(lat, lng);
    }

    // List results
    var $ul = $('.locationList');
    $ul.html('');

  for (var i = 4; i < schoolKeys.length-1; ++i) {
    var schoolName = schoolKeys[i];//string
    var schoolData = schools[schoolName];//object

    var li = '<li>' +
        '<div class="locationFirstRow">' +
          '<div class="numberCircle">' + (i - 3) + '</div>' +
          '<h1 class="locationTitle">' + schoolData.Opportunity + '</h1>' +
          '<h2 class="locationLocation">' + schoolName + ": " + schoolData.Address + '</h2>' +
        '</div>' +
        '<div class="locationSecondRow">' +
          '<p>'+schoolData.Description+'</p>' +
        '</div>' +
        '<div class="social"></div>' +
      '</li>';
    $ul.append(li);

  }
  // Results circle
  $('.resultsCircle').find('.number').html(3);

  // Location List
  $('.locationList li .locationFirstRow').click(function(e) {
    var node = e.currentTarget.parentNode;
    $(node).addClass('selected');
    var socialHTML = '<img style="height:20px" src="lib/images/twitter.png" alt="">&nbsp;&nbsp;'+
    '<img style="height:20px" src="lib/images/linkedin.png" alt="">&nbsp;&nbsp;'+
    '<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvolunteermatch.org" target="_blank">' +
  '<img style="height:20px" src="https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDwOWUQQK7S2SVC&url=https%3A%2F%2Ffbstatic-a.akamaihd.net%2Frsrc.php%2Fv2%2Fy3%2Fr%2FRmXu3PJnGyT.gif">' +
'</a>';
    $(node).find('.social').html(socialHTML);
    alert("Thanks for volunteering. You're signed up!");
  });
}