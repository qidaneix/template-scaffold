import $ from 'jquery';

export default (text: string) => {
  return $('#app').html(text);
};
