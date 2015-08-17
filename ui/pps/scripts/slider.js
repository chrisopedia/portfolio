var Slider = $('#Hero');
var Pagination = Slider.find('.navigation');
var Frame = Slider.find('.stage .item');
//    var clearOut = window.setInterval(Slider, 2000); 

function changeSlide() {
    Frame.fadeOut();
    Frame.next().fadeIn();
};
function paginate() {
    Pagination.on('click', '.item', function(event) {
        var self = $(this);
        var currentFrame = self.index();

        // Defaults to hide all
        Pagination.find('.item').removeClass('current');
        Frame.hide();

        self.toggleClass('current');
        Frame.eq(currentFrame).fadeIn();

        //clearInterval(clearOut);

        console.log(currentFrame);
    });
};
paginate();
changeSlide();
