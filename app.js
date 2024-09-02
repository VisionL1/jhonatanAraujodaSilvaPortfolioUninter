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
