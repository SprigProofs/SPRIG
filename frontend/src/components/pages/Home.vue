
<template>

<div>

    <div class="
        pb-24 border-b border-black
        bg-gradient-to-br from-blue-200 to-purple-200">

        <div class="max-w-3xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 ">
            <div class="mt-14"></div>

            <a href="https://sprig.ch" class="home-rectangle shadow-xl p-8 pr-1 bg-gray-100/30 w-96 hover:shadow-2xl" >
                <img class="w-full -mt-28"
                    src="/sprig.png" alt="SPRIG">
            </a>
            <p class="home-rectangle w-60 h-60 ml-auto -mt-16 bg-blue-500/30 text-right text-2xl font-semibold">
                Building trust in mathematical proofs
                through blockchain technology and game theory.
            </p>

            <div class="relative mx-12 -mt-24 bg-red-600/30 home-rectangle w-48 h-48">
                <div v-if="false">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda maxime nostrum officia earum consequatur deleniti
                </div>
                <span class="absolute
                    top-[calc(100%-1rem)] left-[calc(100%-1rem)] w-16 h-16
                    hover:animate-spin-square
                    shadow home-rectangle bg-green-600/30"></span>
            </div>

            <div class="w-64 h-32 ml-auto mr-32 mt-4
                home-rectangle bg-amber-600/30
                flex-col justify-around">
                <div class="font-ligh font-title text-black/60">
                    Sponsored by</div>
                <img class=""
                    src="/algorand.svg" alt="Algorand logo">
            </div>
        </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <ul class="w-full grid grid-cols-4 items-center gap-4 sm:gap-8 -translate-y-1/2 ">
            <li
                v-for="stat in stats" :key="stat.label" >
                <router-link to="/search"
                    class="p-4 border-t border-black flex items-center
                        relative border-x-half
                        to-white bg-gradient-to-b
                    " :class="stat.color"
                >
                    <LabeledData :label="stat.label" >
                        <template v-if="stat.label != 'Total Bounties'">
                            {{ stat.value }}
                        </template>
                        <template v-else>
                            <Price :amount="stat.value" />
                        </template>
                    </LabeledData>
                </router-link>
            </li>
        </ul>

        <div v-if="showEverything" class=" flex flex-col space-y-8 ">
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
                    ">A better peer review</h2>
                <p class="text-gray-600 w-96 mt-2"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus blanditiis quae incidunt omnis qui quasi consequuntur labore eius, doloribus magnam ratione iure? Nemo, omnis reiciendis perspiciatis sint consequuntur sit!</p>
            </div>

        </div>
    </div>

    <div v-if="showEverything" class="
        my-8
        border-y border-black
        bg-gradient-to-tr to-purple-200 from-blue-200">
        <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <h2 class="font-title font-bold text-2xl
                pb-4 ">Meet the team</h2>
            <ul class="grid grid-cols-3 gap-8 ">
                <li v-for="p in team"
                    class=" ">
                    <!-- <div class="shadow rounded w-full h-40 bg-cover bg-center"
                        :style="'background-image: url(\'' + p.image + '\');'"
                        ></div> -->
                    <div class="relative pb-[calc(3/4*100%)]">
                        <div class="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-white
                            shadow rounded-sm bg-cover bg-center
                            "
                            :style="'background-image: url(\'' + p.image + '\');'"
                        ></div>
                    </div>
                    <div class="pt-2">
                        <div class="font-semibold">{{ p.name }}</div>
                        <div class="text-sm tracking-tight text-blue-900">{{ p.title }}</div>
                    </div>
                </li>
            </ul>

            <div class="flex bg-white -mb-12 border border-black shadow p-6 items-center justify-between mt-10 ">

                <div>
                    <h3 class="font-title font-bold text-xl">We are hiring</h3>
                    <p class="max-w-xs text-gray-700 pt-1">
                        We are looking for a curious and ambitious part-time developer.
                        Experience with blockchain technologies is not required.
                    </p>
                </div>

                    <div></div>
                <a href="mailto:info@sprig.ch"
                    class="flex flex-col items-center mt-2 mr-6 border-2 border-slate-500 bg-white py-3 px-6 shadow
                    hover:shadow-md transition hover:bg-blue-50 ">
                    <span class="font-semibold">Work together</span>
                    <span class="text-sm text-gray-600">info@sprig.ch</span>
                </a>
            </div>
        </div>
    </div>

  <div v-if="false" class="h-full"></div>
<div class="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
    <span class="block">Ready to dive in?</span>
    <span class="block text-indigo-600">Explore open challenges today.</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
    <div class="inline-flex rounded-md shadow">
        <router-link to="/search" href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </router-link>
    </div>
    </div>
</div>

    <!-- <div class="h-64"></div> -->
</div>
</template>

<script setup lang="ts">
import { LabeledData } from '../small';
import { store } from '../../store';
import _ from 'lodash';
import { reactive, ref, computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const showEverything = route.name == 'homeHidden';

// TODO: Compute the stats on the server
const instances = _.values(store.instances);

const stats = computed(() => [
    {
        label: 'Claims',
        value:_.sumBy(instances, s => _.size(s.challenges)),
        color: 'from-blue-100 hover:via-blue-100',
    },
    {
        label: 'Challenges',
        value: _.sumBy(instances, s => _.size(_.filter(s.challenges, c => c.author !== null))),
        color: 'from-yellow-100 hover:via-yellow-100',
    },
    {
        label: 'Proofs',
        value: _.sumBy(instances, s => _.size(s.proofs)),
        color: 'from-green-100 hover:via-green-100',
    },
    {
        label: 'Total Bounties',
        value: _.sumBy(instances, s => s.totalBounties()),
        color:'from-red-100 hover:via-red-100',
    },
])


const team = [
    {
        name: 'Diego Dorn',
        title: 'Lead developer',
        image: '/diego.jpg',
    },
    {
        name: 'Yann Aguettaz',
        title: 'Developer',
        image: 'https://people.epfl.ch/private/common/photos/links/337335.jpg?ts=1650665060',
    },
    {
        name: 'Clément Hongler',
        title: 'Research',
        image: 'https://www.hongler.org/clement-2015.jpg',
    },
    {
        name: 'Franck Gabriel',
        title: 'Research',
        image: 'https://www.hongler.org/clement-2015.jpg',
    },
    {
        name: 'Sylvain Carré',
        title: 'Research',
        image: 'https://www.hongler.org/clement-2015.jpg',
    },
    {
        name: ' Christophe Nussbaumer',
        title: 'Research',
        image: 'https://www.hongler.org/clement-2015.jpg',
    },
]


</script>

<style>
    .border-x-half:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: calc(50% - 0.5px); /* Without this half pixel, it doesn't match perfectly */
        width: 100%;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }
</style>