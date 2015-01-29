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
    google.maps.event.addListener(marker, 'click', function(){
        $('.treasure_bro').show().hide(4000);
    });
};



function userMarker(data) {
    event.preventDefault();
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

    setTimeout(function(){
        $.ajax({
            url: '/treasures',
            type: 'get',
            dataType: 'json'
        }).done(function(data){
            for (var i = 0; i < data.length; i++){
                var title = data[i].title;
                // console.log(title);
                var location = data[i].location.split(",");

                var lat = location[0];
                // console.log(lat);
                var long = location[1];
                // console.log(long);
                createMarker(title,lat,long)
            };
        })

    }, 5000)

});
