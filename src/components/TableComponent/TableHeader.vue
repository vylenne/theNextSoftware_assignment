<template>
  <div class="TableRow TableHeader">
    <input type="checkbox" :checked="isCheckedRows" @change="onChange">
    <div>Datum</div>
    <div>Starting Till</div>
    <div>Opening Till</div>
    <div>Revenue Total</div>
    <div>Payment Total</div>
    <div>Finall Till</div>
  </div>
</template>

<script lang="ts" setup>
import { useDaysStore } from "../../store";
import { computed } from "vue";

const store = useDaysStore();
const isCheckedRows = computed<boolean>(() => !!store.checkedRows.length);
const onChange = () => {
  if (isCheckedRows) {
    store.unCheckAllRows();
  }
}
</script>

<style scoped>
.TableHeader {
  font-weight: 600;
}
</style>