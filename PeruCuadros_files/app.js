var wall = new freewall("#freewall");
wall.reset({
  selector: '.freewall-item',
  animate: true,
  cellW: 250,
  cellH: 'auto',
  gutterX: 3,
  gutterY: 3,
  onResize: function() {
    wall.fitWidth();
  }
});

wall.container.find('.freewall-item img').load(function() {
  wall.fitWidth();
});


$(".boton-modal").click(function(){
    var lazy_class = $(this).attr('lazy-class');
    
    $("img."+lazy_class).each(function (index){
        var src = $(this).attr('data-original');
        $(this).attr('src', src);
        console.log(src);
    });
    
    var modal = $(this).attr('modal-id');
    $(modal).modal('show');
});



$(document).ready(function(){

  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: -80,
  });

  var config = {
    easing: 'hustle',
    //reset:  true,
    delay:  'onload',
    vFactor: 0.90
  };

  window.sr = new scrollReveal(config);


  /*var _height = $(window).height();
  if(_height > 680)
    $('.section-home').height(_height);*/
  var _nav = false;
  $('.nav-collapse').click(function(e) {
    e.preventDefault();
    if(!_nav){
      $('.navbar-right').addClass('nav-open');
      $('.all-content').addClass('nav-open');
      $('.logo').addClass('nav-open');
      _nav = true;
    }else if(_nav){
      $('.navbar-right').removeClass('nav-open');
      $('.all-content').removeClass('nav-open');
      $('.logo').removeClass('nav-open');
      _nav = false;
    }
  });

  $('.nav-collap').click(function(e) {
    e.preventDefault();
    $('.navbar-right').removeClass('nav-open');
    $('.all-content').removeClass('nav-open');
    $('.logo').removeClass('nav-open');
    _nav = false;
  });
  
    wall.fitWidth();

});
