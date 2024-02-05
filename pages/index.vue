<template>
    <!-- <main class="h-screen w-full top-0 -z-10 bg-[url('~/assets/itagiba.webp')] bg-center bg-cover fadeIn opacity-0">

    </main> -->
    <swiper-container
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        loop="true"
        :slides-per-view="1"
        :navigation="true"
        :pagination="true"
        :centered-slides="true"
        :effect="'fade'"
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
    <!-- <div>Serviços</div> -->

</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()
</script>

<style>
.fadeIn {
    animation: fade 2s ease 3s forwards; 
}
@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>