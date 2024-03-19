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

    <div class="w-full avida xl:w-[1200px] bg-stone-950 m-auto font-['Lexend'] p-10 text-zinc-400 font-extralight text-2xl antialiased tracking-widest fadeIn ">
        <p class="py-5">
            A vida é feita de <span class="font-bold">sonhos</span>. Uns modestos, outros normais e ainda os arrojados.
        </p>
        <p class="py-5">
            O <span class="font-bold">nosso</span> maior sonho é, através de nossos projetos e construções, materializar e ajudar a concretizar os sonhos das pessoas, casais, famílias ou coletividades.
        </p>
        <p class="py-5">
            Permita que, com o nosso trabalho, experiência, competência e dedicação sejamos um pouco responsáveis pela vossa <span class="font-bold">felicidade</span>.
        </p>



        <div class="bg-red-400/50 row-full">
            <div>
                
            </div>
            <p>lalalalal</p>
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
    opacity: 0;
    animation: reveal linear;
    animation-timeline: scroll();
}

@keyframes reveal {
    from {scale: .1; opacity: 0;}
    to {scale: 1; opacity: 1;}
}


.row-full{
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
}
</style>