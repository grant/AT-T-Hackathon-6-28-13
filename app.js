var json = '{"Gatzert Elementary School": {"Address": "1301 East Yesler Wy Seattle WA 98122", "Opportunity": "Math tutor for 3rd/4th grade class.", "Number": "1", "Date": "Tuesdays", "Time": "2:00-4:00 PM", "Skills": ["Math","Any"], "Points": "300"}, "Gatzert Elementary School": {"Address": "1301 East Yesler Wy Seattle WA 98122", "Opportunity": "Plant and weed flowerbeds. Appropriate for students, under 13 with parent supervision", "Number": "20", "Date": "Saturday April 6", "Time": "noon-4:00 PM", "Skills": ["Any"], "Points": "600"}, "Lowell Elementary School": {"Address": "1058 East Mercer St Seattle WA 98102", "Opportunity": "General school tutoring", "Number": "5", "Date": "Monday-Thursday", "Time": "3:00-4:30 PM", "Skills": ["Math","Science","Computer","Languages","Any"], "Points": "number"}, "Bacon Hill Elementary School": {"Address": "2025 14 Av South Seattle WA 98144", "Opportunity": "Help in music class", "Number": "2", "Date": "Tuesdays", "Time": "10:00-11:00 AM", "Skills": ["Music"], "Points": "100"}, "Leschi Elementary School": {"Address": "135 32 Av Seattle WA 98122", "Opportunity": "Drivers for field trip to museum", "Number": "4", "Date": "April 8", "Time": "10:00 AM - 4:00 PM", "Skills": ["Any"], "Points": "500"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "Opportunity": "Lunch room and recess monitor", "Number": "1", "Date": "Monday-Friday", "Time": "11:00 AM - 1:00 PM", "Skills": ["Any"], "Points": "200"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "Opportunity": "Science lab helper", "Number": "1", "Date": "Tuesday,Thursday", "Time": "9:30-10:30", "Skills": ["Science","Any"], "Points": "200"}, "Thurgood Marshall Elementary School": {"Address": "2401 South Irving St Seattle WA", "Opportunity": "School drop-off safety monitor", "Number": "3", "Date": "Monday-Friday", "Time": "7:00-7:30 AM", "Skills": ["Any"], "Points": "100"}}';

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
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ipsam, aperiam quisquam neque vitae debitis ea inventore iusto laboriosam rerum eum dignissimos ducimus enim quas nisi perferendis molestias nesciunt accusantium optio voluptatem autem praesentium.' +
        '</div>' +
      '</li>';
    $ul.append(li);
  }
});