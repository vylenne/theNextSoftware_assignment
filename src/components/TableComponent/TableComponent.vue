<template>
  <div class="TableContainer">
    <TableHeader />
    <TableTotalsRow />
    <TableRow v-for="dayData in daysData" :key="dayData.dayId" :rowData="dayData" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useDaysStore } from '../../store';
import TableRow from "./TableRow/TableRow.vue";
import TableHeader from "./TableHeader.vue";
import TableTotalsRow from "./TableRow/TableTotalsRow.vue";
import { TableDayData } from "../../types.ts";

const store = useDaysStore();
const daysData = computed<TableDayData[]>(() => store.daysTableData);

</script>

<style>
.TableContainer {
  width: 1280px;
}

.TableRow {
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 10px 20px;
}
</style>
