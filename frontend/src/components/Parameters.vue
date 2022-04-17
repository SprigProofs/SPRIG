<script setup>
import { params, fmtDate } from "../sprig";
import Price from "./Price.vue";
import Hint from "./Hint.vue";


const costsData = [];
for (let i = 0; i < params.root_height; i++) {
  costsData.push({
      height: params.root_height - i,
      upstake: params.upstakes[i],
      downstake: params.downstakes[i],
      bounty: params.question_bounties[i],
  });
}

</script>

<template>

    <h2 class="small-title pb-2">Instance parameters</h2>

    <el-descriptions border :column="2" class="pb-2">
        <el-descriptions-item label="Max depth">{{ params.root_height }}</el-descriptions-item>
        <el-descriptions-item label="Machine verification cost"><Price :amount="params.verification_cost"/></el-descriptions-item>
        <el-descriptions-item label="Time for questions">{{ params.time_for_questions.humanize() }}</el-descriptions-item>
        <el-descriptions-item label="Time for answers">{{ params.time_for_answers.humanize() }}</el-descriptions-item>
    </el-descriptions>

    <el-table :data="costsData" table-layout="auto" >
        <el-table-column prop="height" >
            <template #header>
                Height <Hint>
                    The height of a proof attempt represents the <b>distance to the machine level proof</b>.
                    A formal proof always has a height of 0, whereas the root has (here) a height of {{ params.root_height }}.
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

</template>