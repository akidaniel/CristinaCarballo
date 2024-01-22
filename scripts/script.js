// JavaScript Document

//FAVICON
var icons = [
			"https://jamonartedelicatessen.neocities.org/imagenes/apple-icon-180x180.png",
                "https://jamonartedelicatessen.neocities.org/imagenes/favicon-32x32.png",
                "https://jamonartedelicatessen.neocities.org/imagenes/favicon.ico",
            ];

            var idx = localStorage["favicon"];
            if (idx === undefined) {
                idx = 0;
            } else {
                idx = parseInt(idx);
            }

            localStorage["favicon"] = (idx + 1) % icons.length;

            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'icon';
            link.href = icons[idx];
            document.getElementsByTagName('head')[0].appendChild(link);
//IDIOMAS
$(document).ready(function() {

var display = function(block_name) {
  $('.idioma').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');


}

$('.UK').on('click', function() {
  display('LUK', $(this));
});

$('.bt_LES').on('click', function() {
  display('LES', $(this));
});

$('.bt_CAT').on('click', function() {
  display('CAT', $(this));
});


$('.FR').on('click', function() {
  display('LFR', $(this));
});
});
