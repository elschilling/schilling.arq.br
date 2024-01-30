<template>
    <slot />
    <div class="absolute top-0 w-full">
        <div class="w-[1200px] m-auto">
            <div class="w-[1200px] h-screen flex items-center justify-center absolute resizeLogo">
                <img class="w-1/2" src="~/assets/logoSchiling_animated.svg">
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
        width: 1200px;
    }
    to {
        height: 4rem;
        width: 200px;
        transform: translateY(15px);
    }
}
</style>