<template>
  <div class="TableRow TableTillRow">
    <input type="checkbox">
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

defineProps({
  till: Object as () => TableTill,
});

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