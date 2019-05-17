function dataSelect(f) {
    var tip = document.getElementById('tip');
    var blocks = document.getElementById('blocks').value;
    parseFloat(blocks);
    document.getElementById('put').innerHTMl = blocks;
    var res= document.getElementById('res');
    res.innerHTMl=(Number(tip.value)*Number(blocks)+'Мвт');
    var sum=(Number(tip.value)*Number(blocks)+'Мвт');
    document.getElementById('res').innerHTML = sum;
 }


