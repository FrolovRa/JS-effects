$(document).ready(function() {
  $('.effect-js').each(function() {
    let array = $(this).html().split('');
    let link = $(this);
    let letters = array.slice(0, array.length + 1);
    let times = [];
    let timer = 20;

    for (i = 0; i < letters.length; i++) {
      times[i] = Math.round(Math.random() * 8)
    }

    function random() {
      return Math.round(Math.random() * 9);
    }

    function select() {
      return Math.round(Math.random() * array.length);
    }

    function draw(arr) {
      return arr.join('');
    }

    function compare(arr1, arr2) {
      let x = 0;
      for (i = 0; i <= arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
          x++;
        };
      }
      return x == arr1.length + 1;
    }

    function value() {
      let n = select();

      if (times[n] > 0) {
        array.splice(n, 1, random());
        $(link).text(draw(array));
        times[n]--;

      } else if (times[n] == 0) {
        array.splice(n, 1, letters[n]);
        $(link).text(draw(array));

        if (compare(array, letters)) {
          clearInterval(o);
        }
      }

    }

    var o = setInterval(value, timer);
  })
});
