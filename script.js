var km = document.querySelector('#km');
var litri = document.querySelector('#litri');
var buton = document.querySelector('#calculate');
var consum = document.querySelector('#consum');
console.log(consum);

buton.addEventListener('click', function(){
    var result = (100 * litri.value) / km.value;
    console.log(result);
    if(litri.value == 0 && km.value == 0) consum.innerHTML = 0;
    else consum.innerHTML = result.toFixed(1);

});

