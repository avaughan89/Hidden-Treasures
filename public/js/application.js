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
});