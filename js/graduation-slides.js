// Add your custom JavaScript for your KeyDown presentation here
$('.reveal > .content > ol > li').not(':first-child').addClass('slide');
$('.reveal > .content > ul > li').not(':first-child').addClass('slide');

function updateTime() {
    var now = new Date();
    jQuery('.timer p').html(now.toString());        
}

setInterval(updateTime, 1000);