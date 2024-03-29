<template>
  <slot />
  <div class="absolute top-0 w-full z-50">
    <div class="w-full lg:w-[1200px] m-auto">
      <div class="w-full lg:w-[1200px] h-screen flex items-center justify-center absolute resizeLogo">
        <img class="w-1/2" src="~/assets/logoSchiling_animated.svg" />
      </div>
    </div>
    <Header />
  </div>
</template>

<style>
.resizeLogo {
  z-index: 1;
  animation: resize 1s ease 3s forwards;
}
@keyframes resize {
  from {
    height: 100vh;
    width: var(--logo-width);
  }
  to {
    height: 4rem;
    width: 160px;
    transform: translateY(5px) translateX(-30px);
  }
}

@media (min-width: 1200px) {
  :root {
    --logo-width: 1200px;
  }
}
@media (max-width: 1200px) {
  :root {
    --logo-width: 100%;
  }
}
</style>
