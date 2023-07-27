<template>
  <div class="TableRow TableTotalsRow">
    <div></div>
    <div>Totals:</div>
    <div>{{ computedTotals.startingTillSum }}</div>
    <div>{{ computedTotals.openingTillSum }}</div>
    <div>{{ computedTotals.revenueTotalSum }}</div>
    <div>{{ computedTotals.paymentTotalSum }}</div>
    <div>{{ computedTotals.finallTillSum }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useDaysStore } from "../../../store/index.ts";
import { computed } from "vue";
import { calculateDayTotals } from "../utils.ts";
import { TableDayData, TotalsSummary } from "../../../types";

const store = useDaysStore();
const computedTotals = computed<TotalsSummary>(() => {
  let result = {
    startingTillSum: 0,
    openingTillSum: 0,
    revenueTotalSum: 0,
    paymentTotalSum: 0,
    finallTillSum: 0
  }
  return store.daysTableData.reduce((acc: TotalsSummary, rowData: TableDayData) => {
    if (rowData?.tills?.length) {
      let dayTillsTotal = calculateDayTotals(rowData.tills);
      return {
        startingTillSum: acc.startingTillSum + dayTillsTotal.startingTillSum,
        openingTillSum: acc.openingTillSum + dayTillsTotal.openingTillSum,
        revenueTotalSum: acc.revenueTotalSum + dayTillsTotal.revenueTotalSum,
        paymentTotalSum: acc.paymentTotalSum + dayTillsTotal.paymentTotalSum,
        finallTillSum: acc.finallTillSum + dayTillsTotal.finallTillSum,
      }
    } else {
      return acc;
    }
  }, result);
})

</script>

<style scoped>
.TableTotalsRow {
  background-color: rgb(181, 255, 205);
}
</style>