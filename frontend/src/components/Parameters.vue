<script setup>
import { params, fmtDate } from "../sprig";
import Price from "./Price.vue";


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
        <el-table-column prop="height" label="Height"></el-table-column>
        
        <el-table-column label="Upstake" >
            <template #default="scope">
                <Price :amount="scope.row.upstake"/>
            </template>
        </el-table-column>

        <el-table-column label="Downstake" >
            <template #default="scope">
                <Price :amount="scope.row.downstake"/>
            </template>
        </el-table-column>

        <el-table-column label="Question bounties" >
            <template #default="scope">
                <Price :amount="scope.row.bounty"/>
            </template>
        </el-table-column>
    </el-table>

</template>