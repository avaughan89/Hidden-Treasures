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

};

var image = '../img/treasure_chest.png';
function createMarker(title, lat, long){
    var myLatLng = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({
        title: title,
        position: myLatLng,
        map: map,
        icon: image
    });
};



function userMarker(data) {
    event.preventDefault();
    console.log(data);
    $.ajax({
        url: '/treasures',
        type: 'post',
        data: data,
        dataType: 'json'
    }).success(function(data){
        console.log(data)
        var title = data.title;
        var location = data.location.split(",");
        var lat = location[0];
        var long = location[1];
        // console.log(title);
        // console.log(lat);
        // console.log(long);
        createMarker(title,lat,long);
    })
};


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
    $(".new_treasure").on("submit", function(){
        // event.preventDefault();
    userMarker($(this).serialize());
  });


});