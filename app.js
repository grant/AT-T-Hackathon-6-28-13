// Feed

var json = '{"Gatzert Elementary School": {"Address": "1301 East Yesler Wy Seattle WA 98122", "lat" : "47.60184560", "lng" : "-122.31528850", "Opportunity": "Math tutor for 3rd/4th grade class.", "Description": "Need volunteer to tutor 3rd and 4th graders on fractions.", "Number": "1", "Date": "Tuesdays", "Time": "2:00-4:00 PM", "Skills": ["Math","Any"], "Points": "300"}, "Gatzert Elementary School": {"Address": "1301 East Yesler Wy Seattle WA 98122", "lat" : 47.60184560, "lng" : -122.31528850, "Opportunity": "Plant and weed flowerbeds.", "Description": "Come help us clean up and replant the front flower beds.  Bring garden tools and gloves. Appropriate for students, under 13 with parent supervision", "Number": "20", "Date": "Saturday April 6", "Time": "noon-4:00 PM", "Skills": ["Any"], "Points": "600"}, "Lowell Elementary School": {"Address": "1058 East Mercer St Seattle WA 98102", "lat" : 47.6247020, "lng" : -122.3183070, "Opportunity": "General school tutoring", "Description": "Need more helpers for our after school study lab.  Students need help in a variety of subjects.", "Number": "5", "Date": "Monday-Thursday", "Time": "3:00-4:30 PM", "Skills": ["Math","Science","Computer","Languages","Any"], "Points": "600"}, "Bacon Hill Elementary School": {"Address": "2025 14 Ave South Seattle WA 98144", "lat" : 47.5850830, "lng" : -122.3153340, "Opportunity": "Help in music class", "Description": "Do you know how to read music or play a musical instrument?  Please come and help students in our music program.", "Number": "2", "Date": "Tuesdays", "Time": "10:00-11:00 AM", "Skills": ["Music"], "Points": "100"}, "Leschi Elementary School": {"Address": "135 32 Ave Seattle WA 98122", "lat" : 47.6019580, "lng" : -122.2919510, "Opportunity": "Drivers for field trip to museum", "Description": "We still need drivers for our trip to the Pacific Science Center!  District driving clearance required. Let us know how many children can fit in your car, with seat belts.", "Number": "4", "Date": "April 8", "Time": "10:00 AM - 4:00 PM", "Skills": ["Any"], "Points": "500"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "lat" : 47.5909610, "lng" : -122.2992640, "Opportunity": "Lunch room and recess monitor", "Description": "Looking for one more person to monitor students at lunch and recess.  No experience necessary.", "Number": "1", "Date": "Monday-Friday", "Time": "11:00 AM - 1:00 PM", "Skills": ["Any"], "Points": "200"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "lat" : 47.5909610, "lng" : -122.2992640, "Opportunity": "Science lab helper", "Description": "Help me prevent my chemistry class from lighting the class on fire with their bunsen burners.  Thanks much.  Mr. Nye.", "Number": "1", "Date": "Tuesday,Thursday", "Time": "9:30-10:30", "Skills": ["Science","Any"], "Points": "200"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "lat" : 47.5909610, "lng" : -122.2992640, "Opportunity": "School drop-off safety monitor", "Description": "Direct traffic and keep our students safe during drop off in the morning.  Volunteers can sign up for one or more days.  Whatever time they can donate.", "Number": "3", "Date": "Monday-Friday", "Time": "7:00-7:30 AM", "Skills": ["Any"], "Points": "100"}}';

$(function() {
  var $ul = $('.locationList');
  var schools = $.parseJSON(json);

  var schoolKeys = Object.keys(schools);
  for (var i = 0; i < schoolKeys.length; ++i) {
    var schoolName = schoolKeys[i];//string
    var schoolData = schools[schoolName];//object

    var li = '<li>' +
        '<div class="locationFirstRow">' +
          '<div class="numberCircle">' + (i + 1) + '</div>' +
          '<h1 class="locationTitle">' + schoolData.Opportunity + '</h1>' +
          '<h2 class="locationLocation">' + schoolData.Address + '</h2>' +
        '</div>' +
        '<div class="locationSecondRow">' +
          '<p>'+schoolData.Description+'</p>' +
        '</div>' +
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
      zoom: 1,
      center: new google.maps.LatLng(47.5,-122.332),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  map = new google.maps.Map(document.getElementById('googleMap'),mapOptions);

  // the for loop drawing all points
  for(var i=0;i<11;i++) {
      setupGeo(i*10,-122);
  }
});

function setupGeo(lat,lng){

    markers = [];

    var item = new google.maps.LatLng(lat,lng);
    markers.push(item);

    marker = new google.maps.Marker({
        position: item,
        title:"Hello World!"
    });

    marker.setMap(map);
    

    google.maps.event.addDomListener(window, 'load', initialize);
}

function filter() {
    document.getElementById("map-canvas").innerHTML = "";
    // clear map
   var mapOptions = {
            zoom: 3,
            center: new google.maps.LatLng(11,11),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    // make new map

    markers = [];
    for(var i=0;i<10;i++){

    // how I set up
        var item = new google.maps.LatLng(-10*i, -10*i);
        markers.push(item);

        marker = new google.maps.Marker({
            position: item,
            title:"Hello World" + i+" !"
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}


function initialize() {
  infowindow = new google.maps.InfoWindow();
}