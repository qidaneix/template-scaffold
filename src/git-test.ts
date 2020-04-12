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
  // do not know 1
  // do not know 1 amend
  // go to hell
  // go to hell 1
  // go 1
  // go 1 amend
  // go 1 amend 2
  // meng le ya
  // meng le ya amend
  // go 2
});
