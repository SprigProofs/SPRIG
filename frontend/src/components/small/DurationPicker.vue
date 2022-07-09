<template>
    <div>
        <label :for="id" class="block text-sm font-medium text-gray-700">{{label}}</label>
        <div class="mt-1 relative rounded-sm shadow-sm w-[12.25rem]">
            <input type="number" min="1" :name="id" :id="id"
                v-model="duration" @input="emitUpdate()"
                class="appearance-none focus:ring-indigo-500 focus:border-indigo-500 block !w-full pl-3 pr-28 sm:text-sm border-gray-300 !rounded-sm "
                placeholder="1" />
            <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="time_unit" class="sr-only">Time unit</label>
                <select id="time_unit" name="time_unit" v-model="unit"
                    @input="emitUpdate()"
                    class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-sm">
                    <option :value="Unit.DAYS">Day(s)</option>
                    <option :value="Unit.HOURS">Hour(s)</option>
                    <option :value="Unit.MINUTES">Minute(s)</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Duration } from 'dayjs/esm/plugin/duration';
import { nextTick, ref } from 'vue';
import { Unit, dayjs } from '../../sprig';

defineProps<{
    label: string
    id: string
    modelValue: Duration
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: Duration): void
}>()

const duration = ref(1);
const unit = ref(Unit.DAYS);

function emitUpdate() {
    nextTick(() => {  // emitUpdate is called before the v-models.
        const asDayjs = dayjs.duration( duration.value, unit.value)
        emit('update:modelValue', asDayjs);
    })
}
</script>