$(function () {
    // start the ticker 
   $('#js-news').ticker();
   
   // hide the release history when the page loads
   $('#release-wrapper').css('margin-top', '-' + ($('#release-wrapper').height() + 20) + 'px');

   // show/hide the release history on click
   $('a[href="#release-history"]').toggle(function () {	
       $('#release-wrapper').animate({
           marginTop: '0px'
       }, 600, 'linear');
   }, function () {
       $('#release-wrapper').animate({
           marginTop: '-' + ($('#release-wrapper').height() + 20) + 'px'
       }, 600, 'linear');
   });	
   
   $('#download a').mousedown(function () {
       _gaq.push(['_trackEvent', 'download-button', 'clicked'])		
   });
});

function openSearch() {
 $(".searchbar").toggle();
 $("#modal_cover").toggle();
}

function showAgenda() {
   $("#modal_cover").show();
   $(".modal_event").show();
   $(".event_detail_close").show();
}

function hideAgenda() {
   $("#modal_cover").hide();
   $(".modal_event").hide();
   $(".event_detail_close").hide();
}

function parseDate(input) {
 var parts = input.split('-');
 // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
 return parts[2]+"/"+parts[1]+"/"+parts[0]; // months are 0-based
}