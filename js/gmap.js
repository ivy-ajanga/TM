var mapLocation = new google.maps.LatLng(-1.2891406, 36.793009); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 8, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
    
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<h3>Virgo.</h3></div>' 
    + '<p class="map-address"><div class="map-address-row"><i class="fa fa-map-marker"></i><span class="text"><strong>Joesph T. Villanvera 129 North Street</strong><br>Grand Rapids, MI 49546</span></div><div class="map-address-row"><i class="fa fa-phone"></i><span class="text">(+01) 231-394-0713</span></div><div class="map-address-row"><span class="map-email"><i class="fa fa-envelope"></i><span class="text">incognitotheme@gmail.com</span></span></p>' 
    + '<p class="gmap-open"><a href="https://www.google.com/maps/place/Laiboni+Center,+Rose+Ave,+Nairobi/@-1.2891406,36.7908203,17z/data=!3m1!4b1!4m5!3m4!1s0x182f10bacc3d0bfb:0x5f08474218d329ad!8m2!3d-1.2891406!4d36.793009?sa=X&amp;ei=KqAdVazxJMTkuQS9sIGIBQ&amp;aved=0CB0Q8gEwAA" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Virgo.', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

