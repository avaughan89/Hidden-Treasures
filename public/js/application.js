var map;

function initialize(location){

    var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    var mapOptions = {
        center: currentLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });
    // google.maps.event.addListenerOnce(map,'bounds_changed', perfromSearch);

}


$(document).ready(function () {
    $('.active-links').click(function () {
        $('#signin-dropdown').toggle();
        $('#session').toggleClass('active');
        return false;
    });
    $('#signin-dropdown').click(function(e) {
        e.stopPropagation();
    });
    $(document).click(function() {
        $('#signin-dropdown').hide();
        $('#session').removeClass('active');
    });

    navigator.geolocation.getCurrentPosition(initialize);


});