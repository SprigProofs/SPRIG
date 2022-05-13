<script setup lang="ts">

import { Hint, LabeledData } from '../small';

const props = defineProps({
    params: {
        required: true,
        type: Object,
    },
    highlight: {
        required: false,
        type: Number,
    },
})

const costsData = [];
for (let h = props.params.rootHeight - 1; h >= 0; h--) {
    costsData.push({
        height: h === props.highlight ? h + " - current" : h,
        upstake: props.params.upstakes[h],
        downstake: props.params.downstakes[h],
        bounty: props.params.questionBounties[h],
    });
}

function rowHighlight(data) {
    if (props.highlight === props.params.rootHeight - data.rowIndex - 1) {
        return "highlighted-row";
    }
    return "";
}

</script>

<template>

    <div>
    <div class="flex space-x-12 pb-4">
        <LabeledData label="Max depth">{{ params.rootHeight }}</LabeledData>
        <LabeledData label="Time for questions">{{ params.timeForQuestions.humanize() }}</LabeledData>
        <LabeledData label="Time for answers">{{ params.timeForAnswers.humanize() }}</LabeledData>
        <LabeledData label="Machine verification"><Price :amount="params.verificationCost" /> </LabeledData>
    </div>

    <div class="max-w-lg">
        <el-table class="max-w-lg" :data="costsData" table-layout="auto" :row-class-name="rowHighlight" >
            <el-table-column prop="height" >
                <template #header>
                    Height <Hint>
                        The height of a proof attempt represents the <b>distance to the machine level proof</b>.
                        A formal proof always has a height of 0, whereas the root has (here) a height of {{ params.rootHeight }}.
                    </Hint>
                </template>
            </el-table-column>

            <el-table-column>
                <template #header>
                    Upstake <Hint>
                        The 'upstake' is locked by the claimer when submitting a proof attempt.
                        If the proof attempt is rejected, it is used to <b>reward the question
                        that the proof attempt was trying to solve</b>. Otherwise, it is refunded.
                    </Hint>
                </template>
                <template #default="scope">
                    <Price :amount="scope.row.upstake"/>
                </template>
            </el-table-column>

            <el-table-column>
                <template #header>
                    Downstake <Hint>
                        The 'downstake' is locked by the claimer and <b>rewards the first challenger
                        that invalidates the proof attempt</b>. If the proof attempt is ultimately accepted,
                        the 'downstake' is refunded to the claimer.
                    </Hint>
                </template>
                <template #default="scope">
                    <Price :amount="scope.row.downstake"/>
                </template>
            </el-table-column>

            <el-table-column >
                <template #header>
                    Question bounty <Hint>
                        The 'question bounty' is locked by the challenger skeptical of a claim
                        and is used to <b>reward the first successful proof of that claim</b>.
                    </Hint>
                </template>
                <template #default="scope">
                    <Price :amount="scope.row.bounty"/>
                </template>
            </el-table-column>
        </el-table>

    </div>
    </div>

</template>

<style>
.highlighted-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
</style>