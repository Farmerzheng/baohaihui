function hasClass(el, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + el.className + ' ');
}

function addClass(el, cls) {
  if (!hasClass(el, cls)) {
    el.className = el.className == '' ? cls : el.className + ' ' + cls;
  }
}

function removeClass(el, cls) {
  if (hasClass(el, cls)) {
    var newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    el.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}