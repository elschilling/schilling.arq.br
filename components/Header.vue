<template>
  <div>
    <div class="w-full flex justify-center h-12 navbar border-y-1 border-black/10 bg-black/60 backdrop-blur-sm slideIn fixed">
      <div class="w-[1200px] m-auto flex flex-row justify-between items-center">
        <img src="~/assets/logoSchiling_animated.svg" alt="" style="position: absolute; width: 90px; top: -10px" />
        <a href="https://schilling.arq.br" class="z-50">
          <div class="ml-[115px]">
            <div class="font-['Lexend'] text-3xl text-primary-400 font-bold tracking-wider -mt-2">SCHILLING</div>
            <div class="font-['Lexend'] text-sm text-logo-vermelho tracking-[.96em] -mt-2">arquitetos</div>
          </div>
        </a>
        <div class="hidden lg:inline-flex">
          <ul class="flex flex-row font-['Lexend'] text-zinc-200 tracking-widest">
            <!-- <li class="px-5"><UButton label="PROJETOS" class="font-['Lexend'] hidden lg:block" /></li> -->
            <li class="px-5"><a href="#obras">OBRAS</a></li>
            <li class="px-5"><a href="#servicos">SERVIÇOS</a></li>
            <li class="px-5"><a href="#contato">CONTATO</a></li>
          </ul>
        </div>
        <div class="items-center flex -mt-1 pr-2">
          <!-- <UButton label="OBRAS" class="font-['Lexend'] hidden lg:block" /> -->
          <!-- <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            @click="isDark = !isDark"
            variant="ghost"
            aria-label="Theme"
          />
          <UButton icon="i-mdi-instagram" variant="ghost" /> -->
          <UButton :icon="isOpen ? 'i-mdi-close' : 'i-mdi-hamburger-menu'" variant="ghost" @click="isOpen = !isOpen" class="lg:hidden" />
        </div>
      </div>
    </div>
    <div
      style="position: fixed; top: 50px; right: 0px"
      :class="isOpen ? 'block' : 'hidden'"
      class="bg-black/60 backdrop-blur-sm mt-3 font-['Lexend'] text-zinc-200 tracking-widest transition-opacity duration-300 text-end"
    >
      <a href="#obras" class="p-3 block hover:bg-black rounded">OBRAS</a>
      <a href="#servicos" class="p-3 block hover:bg-black rounded">SERVIÇOS</a>
      <a href="#contato" class="p-3 block hover:bg-black rounded">CONTATO</a>
      <!-- <a href="#" class="p-3 block hover:bg-black rounded">OBRAS</a> -->
    </div>
  </div>
</template>

<script setup>
let isOpen = ref(false)
let isDark = ref(false)
</script>

<style>
.navbar {
  transform: translateY(-6rem);
}
.slideIn {
  animation: 1s ease 3s forwards slide;
}
@keyframes slide {
  from {
    transform: translateY(-6rem);
  }
  to {
    transform: translateY(1rem);
  }
}
.hide {
  opacity: 0;
}
</style>
