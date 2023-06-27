$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu,.header_button').toggleClass('active')
    });
    $('body').toggleClass('lock');

    $('.popup-open').click(function(){
        let $this=$(this);
        let idPopup=$this.attr('href');
        $(idPopup).addClass('active')
        return false;
    })
    $('body').on('click',function(e){ 
      let container=$('.popup-content');
  
      if (container.has(e.target).length === 0){
        $('.popup-block').removeClass('active');
      }
    })
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    let count = $('.card').length,
      start = 10,
      show = 5.

      $('.card').addClass('d-none');
      $('.card:lt(' + start + ')').removeClass('d-none');

      $('.show-more').click(function(evt){
        evt.preventDefault();

        start = (start + show <= count) ? start + show : count;

        $('.card:lt(' + start + ')').removeClass('d-none');

        console.log(start);
      });
});
