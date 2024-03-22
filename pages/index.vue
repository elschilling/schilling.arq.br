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

    <div class="w-full xl:w-[1200px] bg-stone-950/80 m-auto font-['Lexend'] p-10 text-zinc-400 font-extralight text-2xl antialiased tracking-widest fadeIn ">
  
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

        <div class="bg-red-400/50 row-full">
            <p class="text-center font-['Lexend'] text-3xl text-primary-400 font-bold tracking-wider mt-15 pt-10">SERVIÇOS</p>
            <div id="list-view" class="w-full xl:w-[1200px]  m-auto p-5 flex flex-col justify-center items-center xl:flex-row xl:place-content-evenly">
                <SCard title="PROJETOS" icon="/icons/icone-projetos.svg"
                    class="scard">
                    <p class="text-center">Arquitetônicos<br>
                    Simplificados<br>
                    Estruturais<br>
                    Elétricos<br>
                    Hidrossanitários<br>
                    Urbanísticos</p>
                </SCard>
                <SCard title="APROVAÇÃO" icon="/icons/icone-aprovacao.svg" class="scard2">
                    <p class="text-center">Tramitação e acompanhamento da aprovação de projetos residenciais, comerciais, industriais e rurais nos órgãos competentes.</p>
                </SCard>
                <SCard title="MÃO DE OBRA" icon="/icons/icone-maodeobra.svg" class="scard3">
                    <p class="text-center">Indicação de equipes de construtores e prestadores de serviços que trabalham afinados com nossa filosofia de trabalho.</p>
                </SCard>
                <SCard title="VISUALIZAÇÃO" icon="/icons/icone-visualizacao.svg" class="scard4">
                    <p class="text-center">Modelagem e produção de maquetes digitais ilustrativas/fotorrealistas. Imagens estáticas e animações. Experiências interativas.</p>
                </SCard>
                <SCard title="ADMINISTRAÇÃO" icon="/icons/icone-adm.svg" class="scard5">
                    <p class="text-center">Administração, fiscalização e responsabilidade técnica de projetos com acompanhamento e assessoria na compra de todo e qualquer tipo de material.</p>
                </SCard>
            </div>
        </div>

        <div class="bg-[#076c53]/30 row-full mt-20">
            <p class="text-center font-['Lexend'] text-3xl text-primary-400 font-bold tracking-wider mt-15 pt-10">CONTATOS</p>
            <div class="w-full xl:w-[1200px]  m-auto p-5 flex flex-col justify-center items-center xl:flex-row xl:place-content-evenly">
                <CCard 
                    name="Waldemar Luiz Schilling"
                    photo="/contatos/waldemar.jpg"
                    crea="XXXXXXXXXXXXXXXXX"
                    cau="XXXXXXXXXXXXXXXXX"
                    inmemorian="true"
                    >
                    arquiteto e urbanista
                </CCard>
                <CCard 
                    name="Vera Lucia Schilling"
                    photo="/contatos/vera.jpg"
                    crea="XXXXXXXXXXXXXXXXX"
                    cau="XXXXXXXXXXXXXXXXX"
                    >
                    arquiteta e urbanista
                </CCard>
                <CCard 
                    name="Eduardo Luiz Schilling"
                    title="arquiteto e urbanista"
                    photo="/contatos/eduardo.jpg"
                    cau="XXXXXXXXXXXXXXXXX"
                    >
                    arquiteto e urbanista<br>químico
                </CCard>
                <CCard 
                    name="Mauro Santos"
                    photo="/contatos/mauro.jpg"
                    crea="XXXXXXXXXXXXXXXXX"
                    >
                    engenheiro civil
                </CCard>
            </div>
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

@keyframes animate-in-and-out {
	entry 0%  {
		opacity: 0; transform: translateY(100%);
	}
	entry 60%  {
		opacity: 1; transform: translateY(0);
	}

	exit 0% {
		opacity: 1; transform: translateY(0);
	}
	exit 60% {
		opacity: 0; transform: translateY(-100%);
	}
}

.scard {
	animation: linear animate-in-and-out;
	animation-timeline: view();
}

@keyframes animate-in-and-out2 {
	entry 0%  {
		opacity: 0; transform: translateY(100%);
	}
	entry 70%  {
		opacity: 1; transform: translateY(0);
	}

	exit 0% {
		opacity: 1; transform: translateY(0);
	}
	exit 70% {
		opacity: 0; transform: translateY(-100%);
	}
}

.scard2 {
	animation: linear animate-in-and-out2;
	animation-timeline: view();
}


@keyframes animate-in-and-out2 {
	entry 0%  {
		opacity: 0; transform: translateY(100%);
	}
	entry 80%  {
		opacity: 1; transform: translateY(0);
	}

	exit 0% {
		opacity: 1; transform: translateY(0);
	}
	exit 80% {
		opacity: 0; transform: translateY(-100%);
	}
}

.scard3 {
	animation: linear animate-in-and-out2;
	animation-timeline: view();
}

@keyframes animate-in-and-out2 {
	entry 0%  {
		opacity: 0; transform: translateY(100%);
	}
	entry 90%  {
		opacity: 1; transform: translateY(0);
	}

	exit 0% {
		opacity: 1; transform: translateY(0);
	}
	exit 90% {
		opacity: 0; transform: translateY(-100%);
	}
}

.scard4 {
	animation: linear animate-in-and-out2;
	animation-timeline: view();
}

@keyframes animate-in-and-out2 {
	entry 0%  {
		opacity: 0; transform: translateY(100%);
	}
	entry 100%  {
		opacity: 1; transform: translateY(0);
	}

	exit 0% {
		opacity: 1; transform: translateY(0);
	}
	exit 100% {
		opacity: 0; transform: translateY(-100%);
	}
}

.scard5 {
	animation: linear animate-in-and-out2;
	animation-timeline: view();
}
</style>