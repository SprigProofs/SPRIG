<template>
  <button type="button" :class="style" class="inline-flex items-center justify-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
    <v-icon v-if="icon" :name="icon" class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
    <slot />
  </button>
</template>

<script setup lang="ts">import { computed } from 'vue';


const props = defineProps({
  icon: String,
  color: {
    type: String,
    default: 'none',
  },
  filled: {
    type: Boolean,
    default: false,
  },
});

const styles = {
    'none': 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300',

    'indigo': 'text-gray-700 bg-white hover:bg-indigo-50 border-indigo-600',
    'blue': 'text-gray-700 bg-white hover:bg-blue-50 border-blue-600',
    'green': 'text-gray-700 bg-white hover:bg-green-50 border-green-600',
    'yellow': 'text-gray-700 bg-white hover:bg-yellow-50 border-yellow-400',
    'orange': 'text-gray-700 bg-white hover:bg-orange-50 border-orange-600',
    'amber': 'text-gray-700 bg-white hover:bg-amber-50 border-amber-600',
    'red': 'text-gray-700 bg-white hover:bg-red-50 border-red-600',

    'indigo-filled': 'text-white bg-indigo-600 hover:bg-indigo-700 border-transparent ',
    'blue-filled': 'text-white bg-blue-600 hover:bg-blue-700 border-transparent ',
    'green-filled': 'text-white bg-green-600 hover:bg-green-700 border-transparent ',
    'yellow-filled': 'text-white bg-yellow-400 hover:bg-yellow-500 border-transparent ',
    'orange-filled': 'text-white bg-orange-600 hover:bg-orange-700 border-transparent ',
    'amber-filled': 'text-white bg-amber-600 hover:bg-amber-700 border-transparent ',
    'red-filled': 'text-white bg-red-600 hover:bg-red-700 border-transparent ',
}

const style = computed(() => styles[props.color + (props.filled ? '-filled' : '')]);

</script>