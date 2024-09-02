//Sistema do menu para redirecionamento das seções
const links = document.querySelectorAll('.link');
const secao = document.querySelectorAll('section');
let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink !== i) {
            const linkAnterior = links[activeLink];
            const secaoAnterior = secao[activeLink];
            const secaoAtual = secao[i];

            linkAnterior.classList.remove('active');
            link.classList.add('active');
            secaoAnterior.classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                secaoAtual.classList.add('active');
            }, 1000);
        }
    });
});

//Sistema para esconder ou revelar o menu utilizando o scroll do mouse
var scrollMouse;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
    // toda vez que usar o scroll do mouse essa função será chamada
var scrollUp = window.pageYOffset || document.documentElement.scrollTop;
if(scrollUp > scrollMouse) {
    navbar.style.top='-80px';
}
else {
    navbar.style.top='0';
}
scrollMouse = scrollUp;
});
