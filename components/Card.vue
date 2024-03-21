<template>
<div class="w-[214px] h-[221px] bg-[#3D1914] rounded-b-[20px] mt-10 shadow-lg">
    <div class="bg-[#ff6c53]/30 h-[54px] top-[-27px] relative rounded-full flex">
        <div class="bg-[#ff6c53] rounded-full w-[54px] h-[54px] flex justify-center items-center">
            <!-- <img src="~/assets/icone-projetos.svg" alt="">           -->
            <img :src="props.icon" alt="">          
        </div>       
        <div class="flex justify-center items-center font-bold text-white text-[12px] w-[150px] tracking-[.2em]">
            {{ props.title }}
        </div>
    </div>
    <div class="text-[14px] text-white flex-col justify-center items-center tracking-normal relative top-[-27px]">
        <slot></slot>
    </div>
</div>
</template>

<script setup>
const props = defineProps(['title', 'icon'])
</script>

<style>
</style>