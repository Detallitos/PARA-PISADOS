const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('ME PARECE BIEN QUE HAYAS ASEPTADO TU DESTINO')
    alert('ME PARECE BIEN QUE SEAS OBEDIENTE, "BUEN CHICO"')
    alert('YA VI QUE TE GUSTA VIVIR SIENDO DOMINADO')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})