<script setup>
import SimpleStats from "./SimpleStats.vue";

defineProps({
    name: {
        required: true,
        type: String,
    },
})

</script>

<template>
    <el-popover placement="top" :width="300"
       >
        <div class="flex flex-col">
            <div class="flex justify-between w-full mb-2 items-baseline">
                <h3 class="small-title pb-2">@{{ name }}</h3>
                <Price amount="6920" class="font-bold bg-blue-200 px-3 py-1 rounded-md"/>
            </div>
            <p>Proof attempts 
                <SimpleStats yes="7" no="4" maybe="5"/>
            </p>
            <p>Challenges
                <SimpleStats yes="2" no="6" maybe="1"/>
            </p>

            <button 
                class="underline self-end pt-4"
                >View full user profile</button>
        </div>

    <template #reference>
        <span 
            class="underline "
            >{{ name }}</span>
    </template>
    </el-popover>
</template>