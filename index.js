const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que hibas a decir que si jsjsjs Hoy es un dia especial para amigos jsjs estoy agradecido con el de arriba por averte puesto en mi camino de sobrevivir y poder conocer a una persona tan maravillosa, buena, inteligente y por supuesto muy buena :3 por eso te deseo que la pases super bien con tus amig@s, obviamente con tu toxico mas jsjs !FELIZ SAN VALENTIN!     atte.OMAR  UwU')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
