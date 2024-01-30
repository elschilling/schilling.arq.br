
<template>
    <div class="w-full flex justify-center bg-black/60 h-16 navbar slideIn backdrop-blur-sm	border-y-1 border-black/10">
        <div class="w-[1200px] m-auto flex flex-row justify-between items-center">
            <div class="ml-40">
                <div class="font-['Lexend'] text-4xl text-primary-400 font-bold tracking-wider">
                    SCHILLING
                </div>
                <div class="font-['Lexend'] font-extralight text-xl text-logo-vermelho tracking-[.68em] -mt-2 ml-1">
                    arquitetos
                </div>
            </div>
            <div>
                <ul class="flex flex-row font-['Lexend'] text-xl text-zinc-400">
                    <li class="p-4">PROJETOS</li>
                    <li class="p-4">SERVIÇOS</li>
                    <li class="p-4">OBRAS</li>
                    <li class="p-4">CONTATO</li>
                </ul>
            </div>
            <div class="h-full">
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    @click="isDark = !isDark"
                    variant="ghost"
                    aria-label="Theme"
                />
                <UButton
                    icon="i-mdi-instagram"
                    variant="ghost"
                />
            </div>
        </div>
    </div>
</template>

<style>
.navbar {
    transform: translateY(-6rem);
}
.slideIn {
    animation: 1s ease 3s forwards slide
}
@keyframes slide{
    from{
        transform: translateY(-6rem);
    }
    to{
        transform: translateY(1rem);
    }
}
</style>

