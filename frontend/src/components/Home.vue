
<template>

<div>

    <div class="
        pb-24 border-b border-black
        bg-gradient-to-br from-blue-200 to-purple-200">

        <header class="fixed z-10 shadow-2xl w-screen border-b border-black bg-white">
            <ul class="flex space-x-6 py-3 px-12 max-w-3xl mx-auto">
                <li>Home</li>
                <li>Explore</li>
                <li>Work with us</li>
                <li>About</li>
                <li class="flex-grow text-right">Login</li>
            </ul>
        </header>

        <div class="max-w-3xl mx-auto pt-24">
            <div></div>

            <div class="home-rectangle p-8 bg-gray-100/30 ml-4 w-96 " >
                <img class="w-full"
                    src="/sprig.svg" alt="SPRIG">
            </div>
            <p class="home-rectangle w-60 h-60 ml-auto -mt-16 mr-12 
                bg-blue-500/30 text-right text-2xl font-semibold">
                Building trust in mathematical proofs
                through blockchain technology and game theory.
            </p>

            <div class="flex">
                <p class="bg-red-600/30 home-rectangle w-48 h-48 ml-16 -mt-24 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda maxime nostrum officia earum consequatur deleniti 
                </p>
                <p class="self-end translate-y-3/4 -translate-x-4 home-rectangle w-16 h-16 bg-green-600/30"></p>
            </div>

            <div class="w-64 h-32 ml-auto mr-32 mt-4
                home-rectangle bg-amber-600/30
                flex-col justify-around">
                <div class="font-ligh font-title text-slate-700">
                    Sponsored by</div>
                <img class=""
                    src="/algorand.svg" alt="Algorand logo">
            </div>
        </div>
    </div>

    <div class="max-w-3xl mx-auto">
        <ul class="grid grid-cols-4 gap-8 mx-12 -translate-y-1/2 ">
            <li
                v-for="(count, title) in stats"
                :key="title"
                class="bg-white p-4 rounded shadow"
                >
                <LabeledData :label="title" >{{ count }}</LabeledData>
            </li>
        </ul>
    
        <div class="mx-12 flex flex-col space-y-8 ">
            <div class="even:self-end even:text-right">
                <h2 class="font-title font-bold text-2xl
                    ">Join a comunity of truth seekers</h2>
                <p class="text-gray-600 w-96 mt-22"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus blanditiis quae incidunt omnis qui quasi consequuntur labore eius, doloribus magnam ratione iure? Nemo, omnis reiciendis perspiciatis sint consequuntur sit!</p>
            </div>
            <div class="even:self-end even:text-right">
                <h2 class="font-title font-bold text-2xl
                    ">Built on Algorand</h2>
                <p class="text-gray-600 w-96 mt-2"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus blanditiis quae incidunt omnis qui quasi consequuntur labore eius, doloribus magnam ratione iure? Nemo, omnis reiciendis perspiciatis sint consequuntur sit!</p>
            </div>
            <div class="even:self-end even:text-right">
                <h2 class="font-title font-bold text-2xl
                    ">Made in Switzerland</h2>
                <p class="text-gray-600 w-96 mt-2"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus blanditiis quae incidunt omnis qui quasi consequuntur labore eius, doloribus magnam ratione iure? Nemo, omnis reiciendis perspiciatis sint consequuntur sit!</p>
            </div>

        </div>
    </div>
    <div class="h-64"></div>
</div>
</template>

<script setup>
import LabeledData from './LabeledData.vue';

const stats = {
    Claims: 27,
    Challenges: 12,
    Proofs: 7,
    "Available bounties": 10,
}

</script>