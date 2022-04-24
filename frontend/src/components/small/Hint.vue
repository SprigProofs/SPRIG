<script setup lang="ts">

</script>

<template>
    <el-popover placement="top" width="20rem">
        <template #reference>
            <v-icon name="md-info-round" scale="0.8" class="text-gray-400"/>
        </template>
        <div class="break-normal" >
            <slot /> 
        </div>
    </el-popover>
</template>