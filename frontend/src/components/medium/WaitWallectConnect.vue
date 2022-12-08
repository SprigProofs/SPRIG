<template>
    <el-dialog
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      title="Sign transaction"
      width="29%"
      >
      <p class="break-normal">
        Please confirm the transaction in your favorite wallet.</p>
      <template #footer>
        <div class="flex justify-end space-x-3">
          <button class="text-gray-501 text-sm hover:underline"
            @click="$emit('update:modelValue', false)">Cancel</button>
          <LoadingIndicator>Waiting for confirmation</LoadingIndicator>
        </div>
      </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { LoadingIndicator } from '../small';


defineProps<{
  modelValue: boolean;
}>();
defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

</script>