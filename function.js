function display(){
    const g1      = Number(document.getElementById('1').value) || 0;
    const g5      = Number(document.getElementById('5').value) || 0;
    const g10     = Number(document.getElementById('10').value) || 0;
    const g50     = Number(document.getElementById('50').value) || 0;
    const g100    = Number(document.getElementById('100').value) || 0;
    const g500    = Number(document.getElementById('500').value) || 0;
    const g1000   = Number(document.getElementById('1000').value) || 0;
    const g5000   = Number(document.getElementById('5000').value) || 0;
    const g10000  = Number(document.getElementById('10000').value) || 0;

    const g1x50   = Number(document.getElementById('1x50').value) || 0;
    const g5x50   = Number(document.getElementById('5x50').value) || 0;
    const g10x50  = Number(document.getElementById('10x50').value) || 0;
    const g50x50  = Number(document.getElementById('50x50').value) || 0;
    const g100x50 = Number(document.getElementById('100x50').value) || 0;
    const g500x50 = Number(document.getElementById('500x50').value) || 0;

    const total =
          g1 * 1
        + g5 * 5
        + g10 * 10
        + g50 * 50
        + g100 * 100
        + g500 * 500
        + g1000 * 1000
        + g5000 * 5000
        + g10000 * 10000
        + g1x50 * 50
        + g5x50 * 250
        + g10x50 * 500
        + g50x50 * 2500
        + g100x50 * 5000
        + g500x50 * 25000;

    document.getElementById("total").value = total;
}
