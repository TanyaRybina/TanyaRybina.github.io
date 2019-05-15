function dataSelect(f) {
     //n = f.tip.selectedIndex
     //if(n) alert("Заказ прошел успешно: " + f.tip.options[n].value)
    var tip = document.getElementById('tip');
    var blocks = document.getElementById('blocks').value;
    parseFloat(blocks);
    +blocks
    document.getElementById('put').innerHTMl = blocks;
    //tip.addEventListener('change',function(){
    	//console.log(tip.value);
    	//alert(tip.value)
    	//alert(blocks)
    alert(Number(tip.value)*Number(blocks)+'Мвт');
    
   //})
    //кароче переменные выводяться остлось их помножить и считай нобелевская премея моя
 }


