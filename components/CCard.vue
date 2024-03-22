<template>
<div class="w-[212px] h-[290px] bg-black/60 rounded-b-[10px] mt-[120px] shadow-lg mix-blend-luminosity hover:mix-blend-normal transition-all ease-linear duration-0 hover:duration-500">
    <img :src="props.photo" alt="" class="rounded-full -mt-[106px]">          
    <div class="flex justify-center items-center text-white text-[16px] font-normal tracking-normal">
        {{ props.name }}
    </div>
    <div class="flex justify-center items-center text-white text-[14px] font-extralight tracking-normal -mt-2 text-center leading-5">
        <slot></slot>
    </div>
    <div class="flex flex-col justify-center items-center text-white text-[14px] font-extralight tracking-normal mt-5">
        <p v-if="props.crea" class="leading-tight"><span class="font-normal">CREA</span> <span class="font-extralight">{{ props.crea }}</span></p>
        <p v-if="props.cau" class="leading-tight"><span class="font-normal">CAU</span> <span class="font-extralight">{{ props.cau }}</span></p>
    </div>
    <div class="flex flex-col justify-center items-center text-white text-[14px] font-extralight tracking-normal mt-5">
        <p v-if="props.inmemorian" class="italic text-xl font-extralight">in memorian</p>
    </div>

</div>
</template>

<script setup>
const props = defineProps(['name', 'photo', 'cau', 'crea', 'inmemorian'])
</script>

<style>
</style>