function copiarTexto() {
    var textoCopiado = document.getElementById("codTeacher");
    textoCopiado.select();
    document.execCommand("Copy");
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#checkbox-student').prop('indeterminate', true);

  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  
  var divWidth = $('.main').width();
  var divHeight = $('.main').height();
  var currentWidth = divWidth;
  var currentHeight = divHeight;
  var originalSize = $('.main').css('font-size');
  var originalSizeH3 = $('h3').css('font-size');

  $('#btn_ZoomReset').on('click', function () {

      $('.main').width(currentWidth);
      $('.main').height(currentHeight);
      $('.main').css('font-size', originalSize);
      $('h3').css('font-size', originalSizeH3);

  });

  $('#btn_ZoomOut').on('click', function () {
      divWidth = divWidth - 40;
      divHeight = divHeight - 40;
      var currentSize = $('.main,h3').css('font-size');
      var currentSize = parseFloat(currentSize) * 0.8;
      $('.main,h3').css('font-size', currentSize);
      $('.main').width(divWidth);
      $('.main').height(divHeight);
  });

  $('#btn_ZoomIn').on('click', function () {
      divWidth = divWidth + 50;
      divHeight = divHeight + 50;
      var currentSize = $('.main,h3').css('font-size');
      var currentSize = parseFloat(currentSize) * 1.2;
      $('.main,h3').css('font-size', currentSize);

      $('.main').width(divWidth);
      $('.main').height(divHeight);
  });

  $('#btn_close').on('click', function () {
    $('.card-tools').hide(1000);
    $('#btn_open').show(1000);
});

$('#btn_open').on('click', function () {
    $('.card-tools').show(1000);
    $('#btn_open').hide(1000);
});

$('#btn_open_chat').on('click', function () {
    $('.card-chat').show(1000);
    $('#btn_open_chat').hide(1000);
});

$('#btn_close_chat').on('click', function () {
    $('.card-chat').hide(1000);
    $('#btn_open_chat').show(1000);
});

$('#btn_open_answers').on('click', function () {
    $('.card-chat').hide(1000);
    $('.card-answers').show(1000);
    $('#btn_open_answers').hide(1000);
});

$('#btn_close_answers').on('click', function () {
    $('.card-answers').hide(1000);
    $('#btn_open_answers').show(1000);
});

$('.btn-color').on("click", function(){
    var color = $(this).css('background-color');
    console.log(color);
    $('#pagina').css('background-color',color);
});