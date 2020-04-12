import $ from 'jquery';

$(document).on('click', '#app', e => {
  $('#app').text(JSON.stringify(e.target));
  console.log(e.target.tagName);
  // 为什么会落后？
  // try again
  // what the hell???
  // test test 111
  // test test 222
  // some oper wrong
  // test test 333
  // try again!!!
  // more change
  // what the hell
});
