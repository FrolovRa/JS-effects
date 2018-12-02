$(document).ready(function(){
$('.effect-js').each(function(){
  let originArray = $(this).html().split('');
  let link = $(this);
  let n = 0;
  let specterForTimer = [];
  let typingArray = [];
  for(i = 0; i < originArray.length; i++) {
  specterForTimer[i] = Math.round(Math.random() * 150);
}
function compare(arr1, arr2) {
  let x = 0;
  for (i = 0; i <= arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      x++;
    };
  }
  return x == arr1.length+1;
}

  function data() {
    typingArray[typingArray.length] = originArray[typingArray.length];
    $(link).html(typingArray.join(''));

    if(compare(originArray,typingArray)) {
      clearInterval(o);
    }
  }

  let o = setInterval(data, 500);
});

})
