import $ from 'jquery';

$(document).on('click', '#app', e => {
  $('#app').text(JSON.stringify(e.target));
  console.log(e.target.tagName);
  // 为什么会落后？
});
