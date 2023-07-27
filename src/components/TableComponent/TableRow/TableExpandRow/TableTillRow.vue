<template>
  <div class="TableRow TableTillRow">
    <input type="checkbox" :checked="isRowChecked" @change="onChange">
    <div></div>
    <div>{{ till.tillContent.startingTill }}</div>
    <div>{{ till.tillContent.openingTill }}</div>
    <div>{{ till.tillContent.revenueTotal }}</div>
    <div>{{ till.tillContent.paymentTotal }}</div>
    <div>{{ till.tillContent.finallTill }}</div>
  </div>
</template>

<script lang="ts" setup>
import { TableTill } from "../../../../types.ts";
import { useDaysStore } from "../../../../store";
import { computed } from "vue";

const props = defineProps({
  till: Object as () => TableTill,
});

const store = useDaysStore();
const isRowChecked = computed<boolean>(() => store.checkedRows.includes(props.till.tillRowId));
const onChange = () => { store.checkRow(props.till?.tillRowId, !isRowChecked.value) };

</script>

<style scoped>
.TableTillRow {
  background-color: #fbfbfb;
  border-bottom: 1px solid #dddddd;
}

.TableTillRow:last-child {
  border-bottom: 0;
}
</style>