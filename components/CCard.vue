<template>
  <div class="w-[212px] h-[290px] bg-black/60 rounded-b-[10px] mt-[120px] mix-blend-luminosity hover:mix-blend-normal">
    <a v-if="props.link" :href="props.link" target="_blank">
      <img :src="props.photo" alt="" class="rounded-full -mt-[106px]" />
      <div class="flex justify-center items-center text-white text-[16px] font-normal tracking-normal">
        {{ props.name }}
      </div>
      <div class="flex justify-center items-center text-white text-[14px] font-extralight tracking-normal -mt-2 text-center leading-5">
        <slot></slot>
      </div>
    </a>
    <div v-else>
      <img :src="props.photo" alt="" class="rounded-full -mt-[106px]" />
      <div class="flex justify-center items-center text-white text-[16px] font-normal tracking-normal">
        {{ props.name }}
      </div>
      <div class="flex justify-center items-center text-white text-[14px] font-extralight tracking-normal -mt-2 text-center leading-5">
        <slot></slot>
      </div>
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
      <p v-if="props.phone">
        <a class="flex bg-emerald-700 p-2 rounded-full" :href="`https://wa.me/55${props.phone}`"
          ><Icon name="i-ic-baseline-phone" size="35px" /> {{ props.phone }}</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'photo', 'cau', 'crea', 'email', 'phone', 'inmemorian', 'link'])

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
