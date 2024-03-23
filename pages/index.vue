<template>
    <swiper-container
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        loop="true"
        :slides-per-view="1"
        :navigation="true"
        :pagination="true"
        :centered-slides="true"
        :effect="'fade'"
        speed = 3000
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        class="h-dvh w-full top-0 fadeIn opacity-0"
    >
        <swiper-slide class="bg-[url('~/assets/itagiba.webp')] bg-center bg-cover"></swiper-slide>
        <swiper-slide class="bg-[url('~/assets/juliano.webp')] bg-center bg-cover"></swiper-slide>
        <swiper-slide class="bg-[url('~/assets/lucas.webp')] bg-center bg-cover"></swiper-slide>
    </swiper-container>

    <div class="w-full xl:w-[1200px] bg-stone-950/90 m-auto font-['Lexend'] p-10 text-zinc-400 font-extralight text-2xl antialiased tracking-widest fadeIn ">
  
        <div class="avida pb-10">
            <p class="py-5">
                A vida é feita de <span class="font-bold">sonhos</span>. Uns modestos, outros normais e ainda os arrojados.
            </p>
            <p class="py-5">
                O <span class="font-bold">nosso</span> maior sonho é, através de nossos projetos e construções, materializar e ajudar a concretizar os sonhos das pessoas, casais, famílias ou coletividades.
            </p>
            <p class="py-5">
                Permita que, com o nosso trabalho, experiência, competência e dedicação sejamos um pouco responsáveis pela vossa <span class="font-bold">felicidade</span>.
            </p>
  
        </div>    

        <div class="bg-red-400/50 row-full faixa">
            <p class="text-center font-['Lexend'] text-3xl text-primary-400 font-bold tracking-wider mt-15 pt-10">SERVIÇOS</p>
            <div id="cards" class="w-full xl:w-[1200px]  m-auto p-5 flex flex-col justify-center items-center xl:flex-row xl:place-content-evenly">
                <SCard title="PROJETOS" icon="/icons/icone-projetos.svg"
                    class="card">
                    <p class="text-center">Arquitetônicos<br>
                    Simplificados<br>
                    Estruturais<br>
                    Elétricos<br>
                    Hidrossanitários<br>
                    Urbanísticos</p>
                </SCard>
                <SCard title="APROVAÇÃO" icon="/icons/icone-aprovacao.svg" class="card">
                    <p class="text-center">Tramitação e acompanhamento da aprovação de projetos residenciais, comerciais, industriais e rurais nos órgãos competentes.</p>
                </SCard>
                <SCard title="MÃO DE OBRA" icon="/icons/icone-maodeobra.svg" class="card">
                    <p class="text-center">Indicação de equipes de construtores e prestadores de serviços que trabalham afinados com nossa filosofia de trabalho.</p>
                </SCard>
                <SCard title="VISUALIZAÇÃO" icon="/icons/icone-visualizacao.svg" class="card">
                    <p class="text-center">Modelagem e produção de maquetes digitais ilustrativas/fotorrealistas. Imagens estáticas e animações. Experiências interativas.</p>
                </SCard>
                <SCard title="ADMINISTRAÇÃO" icon="/icons/icone-adm.svg" class="card">
                    <p class="text-center">Administração, fiscalização e responsabilidade técnica de projetos com acompanhamento e assessoria na compra de todo e qualquer tipo de material.</p>
                </SCard>
            </div>
        </div>

        <div class="bg-[#076c53]/30 row-full mt-20">
            <p class="text-center font-['Lexend'] text-3xl text-primary-400 font-bold tracking-wider mt-15 pt-10">CONTATOS</p>
            <div class="w-full xl:w-[1200px]  m-auto p-5 flex flex-col justify-center items-center xl:flex-row xl:place-content-evenly">
                <CCard 
                    class="card"
                    name="Waldemar Luiz Schilling"
                    photo="/contatos/waldemar.jpg"
                    crea="5061435925"
                    cau="A0516-9"
                    inmemorian="true"
                    >
                    arquiteto e urbanista
                </CCard>
                <CCard 
                    class="card"
                    name="Vera Lucia Schilling"
                    photo="/contatos/vera.jpg"
                    crea="5061747230"
                    cau="A13144-0"
                    >
                    arquiteta e urbanista
                </CCard>
                <CCard 
                    class="card"
                    name="Eduardo Luiz Schilling"
                    title="arquiteto e urbanista"
                    photo="/contatos/eduardo.jpg"
                    cau="XXXXXXXXXXXXXXXXX"
                    >
                    arquiteto e urbanista<br>químico
                </CCard>
                <CCard 
                    class="card"
                    name="Mauro Santos"
                    photo="/contatos/mauro.jpg"
                    crea="0601524770"
                    >
                    engenheiro civil
                </CCard>
            </div>
        </div>

        <div class="mt-20 card">
            <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729.4691601809969!2d-46.97220956946711!3d-23.033050040716486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2d67f436670b%3A0x2d9bc4f09004fe7a!2sR.%20dos%20Vereadores%2C%2040%20-%20Barra%20Funda%2C%20Vinhedo%20-%20SP%2C%2013280-000!5e1!3m2!1spt-BR!2sbr!4v1711203117422!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


    </div>

</template>
<script setup>
import { register } from 'swiper/element/bundle'
register()

useHead({
  bodyAttrs: {
    class: 'bg-[#2a2a2a] overflow-x-hidden',
  },
  htmlAttrs: {
    class: 'hello',
  },
});
</script>

<style>
.fadeIn {
    animation: fade 2s ease 3s forwards; 
}
@keyframes fade {
    from {opacity: 0;}
    to {opacity: 1;}
}

.avida {
    view-timeline-name: --revealing-image;
	view-timeline-axis: block;
    opacity: 0;
    animation: linear reveal both;
	animation-timeline: --revealing-image;
    animation-range: entry 5% cover 30%;
}

@keyframes reveal {
    from {scale: .5; opacity: 0;}
    to {scale: 1; opacity: 1;}
}


.row-full{
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
}

.card {
    animation: linear animate-in-and-out both;
    animation-range: entry 5% cover 20%;
	animation-timeline: view(block);
}

.faixa {
    animation: linear faixa-animate both;
    animation-range: entry 5% cover 20%;
    animation-timeline: view(block);
}

@keyframes faixa-animate {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes animate-in-and-out {
    from {
        opacity: 0;
        transform: translateY(100%);
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: translateY(0);
        transform: scale(1);

    }
}
</style>