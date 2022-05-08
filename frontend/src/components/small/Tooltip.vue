<template>
    <el-popover :show-arrow="false"
        placement="bottom-start"
        transition=""
        :offset="0"
        :hide-after="0"
        popper-class="!shadow">
        <template #reference>
            <slot name="reference" />
        </template>
        <slot />
    </el-popover>
</template>