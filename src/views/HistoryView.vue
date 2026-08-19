<template>
  <section class="history-section">
    <h1>O Gens Sport Clube</h1>

    <div class="history-text">
      <p>
        O Gens Sport Clube, fundado a 1 de Janeiro de 1925, é uma instituição desportiva com uma rica história e um
        papel significativo na comunidade de Gens, sendo uma referência desportiva no concelho de Gondomar.
      </p>
      <p>
        Com 100 anos de história, o clube tem desempenhado um papel essencial na promoção do desporto e na formação de
        jovens atletas, mantendo sempre uma forte ligação à comunidade.
      </p>
      <p>
        Inicialmente focado no futebol amador, o Gens SC cresceu de forma sustentada ao longo das décadas, desenvolvendo
        as suas infraestruturas e ampliando as suas valências. O atual Parque Desportivo de Gens conta com relvado
        sintético, iluminação moderna e bancadas renovadas com o apoio da Fundo Crescer e da Câmara Municipal de
        Gondomar.
      </p>
      <p>
        Em 2019, o clube firmou uma parceria com a Dragon Force, potenciando a formação de mais de 200 jovens atletas.
      </p>
      <p>
        Em 2020, Mário Santos tornou-se presidente aos 26 anos, o mais jovem de sempre na história do clube — reflexo de
        uma direção jovem e com visão de futuro. Para além do futebol, o Gens SC aposta também na diversificação
        desportiva.
      </p>
      <p>
        Destaca-se a equipa de trail running, que representa o clube em provas nacionais, promovendo hábitos saudáveis e
        inclusão. O envolvimento comunitário é um pilar do clube.
      </p>
      <p>
        Iniciativas do grupo “Amigas do Gens”, criado em 2015 por mulheres do Lugar, ajudam a angariar fundos para
        melhorias no clube, reforçando o espírito associativo que sempre nos guiou.
      </p>
      <p>
        Em 2025, celebramos o nosso centenário com orgulho, homenageando todas as gerações que ajudaram a construir esta
        grande casa.
      </p>
      <p>Mais do que um clube, somos um símbolo de união, dedicação e paixão.</p>
    </div>
    <div class="slogan">
      <span>O Gens que nos une.</span>
    </div>

    <div class="triple-separator">
      <div class="line green"></div>
      <div class="line white"></div>
      <div class="line red"></div>
    </div>
    <RouterLink to="/" class="back-link">Voltar à Página Inicial</RouterLink>
  </section>
</template>

<style scoped>
.history-section {
  margin-top: 110px;
  padding: 0 1.5rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  color: var(--green);
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.history-text p {
  text-align: justify;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 1rem;
  color: #333;
}

.slogan {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}
.triple-separator {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2rem 0;
}
.line {
  height: 3px;
  width: 100%;
}
.green {
  background-color: var(--green);
}
.white {
  background-color: var(--white);
}
.red {
  background-color: var(--red);
}
.back-link {
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--link);
  font-weight: 500;
  text-decoration: none;
}
</style>
