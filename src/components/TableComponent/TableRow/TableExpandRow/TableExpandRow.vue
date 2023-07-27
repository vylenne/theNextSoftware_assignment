<template>
  <div class="TableExpandRow">
    <div class="TableRow" :class="isOpen ? 'opened' : ''">
      <input type="button" @click="setOpen" :value="isOpen ? '▲' : '▼'" />
      <div>{{ dayId }}</div>
      <div>{{ rowSummaryContent.startingTillSum }}</div>
      <div>{{ rowSummaryContent.openingTillSum }}</div>
      <div>{{ rowSummaryContent.revenueTotalSum }}</div>
      <div>{{ rowSummaryContent.paymentTotalSum }}</div>
      <div>{{ rowSummaryContent.finallTillSum }}</div>
    </div>
    <div v-if="isOpen">
      <template v-for="till in tills" :key="till.tillId">
        <TableTillRow v-if="!!till?.tillContent" :till="till" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import TableTillRow from "./TableTillRow.vue";
import { calculateDayTotals } from "../../utils.ts";
import { TableTill, TotalsSummary } from "../../../../types";

const props = defineProps(
  {
    tills: Array as () => TableTill[],
    dayId: String as () => string,
  }
);
const isOpen = ref<boolean>(false);
const setOpen = () => {
  isOpen.value = !isOpen.value;
}

const rowSummaryContent = computed<TotalsSummary>(() => calculateDayTotals(props.tills))

</script>

<style scoped>
.TableExpandRow {
  background-color: #ffffff;
  border-bottom: 1px solid #bbbbbb;
}

.opened {
  background-color: #f1f1f1;
}
</style>