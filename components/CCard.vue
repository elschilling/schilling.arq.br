<template>
  <div class="w-[212px] h-[290px] bg-black/60 rounded-b-[10px] mt-[120px] mix-blend-luminosity hover:mix-blend-normal">
    <img :src="props.photo" alt="" class="rounded-full -mt-[106px]" />
    <div class="flex justify-center items-center text-white text-[16px] font-normal tracking-normal">
      {{ props.name }}
    </div>
    <div class="flex justify-center items-center text-white text-[14px] font-extralight tracking-normal -mt-2 text-center leading-5">
      <slot></slot>
    </div>
    <div class="flex flex-col justify-center items-center text-white text-[14px] font-extralight tracking-normal mt-5">
      <p v-if="props.crea" class="leading-tight">
        <span class="font-normal">CREA</span> <span class="font-extralight">{{ props.crea }}</span>
      </p>
      <p v-if="props.cau" class="leading-tight">
        <span class="font-normal">CAU</span> <span class="font-extralight">{{ props.cau }}</span>
      </p>
    </div>
    <div class="flex flex-col justify-center items-center text-white text-[14px] font-extralight tracking-normal mt-5">
      <p v-if="props.inmemorian" class="italic text-xl font-extralight">in memorian</p>
      <p v-if="props.email"><Icon name="ic:baseline-email" size="35px" /> {{ props.email }}</p>
      <p v-if="props.phone"><Icon name="i-ic-baseline-phone" size="35px" /> {{ props.phone }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'photo', 'cau', 'crea', 'email', 'phone', 'inmemorian'])

function showTooltip(flag) {
  switch (flag) {
    case 1:
      document.getElementById('tooltip1').classList.remove('hidden')
      break
    case 2:
      document.getElementById('tooltip2').classList.remove('hidden')
      break
    case 3:
      document.getElementById('tooltip3').classList.remove('hidden')
      break
  }
}
function hideTooltip(flag) {
  switch (flag) {
    case 1:
      document.getElementById('tooltip1').classList.add('hidden')
      break
    case 2:
      document.getElementById('tooltip2').classList.add('hidden')
      break
    case 3:
      document.getElementById('tooltip3').classList.add('hidden')
      break
  }
}
</script>

<style></style>
