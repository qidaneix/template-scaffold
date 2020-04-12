import $ from 'jquery';

$(document).on('click', '#app', e => {
  $('#app').text(JSON.stringify(e.target));
});
