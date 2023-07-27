<template>
  <TableNullRow v-if="!rowData?.tills?.length" :day-id="rowData.dayId" />
  <TableExpandRow v-if="rowData?.tills?.length" :tills="rowData.tills" :day-id="rowData.dayId" />
</template>

<script lang="ts" setup>

import TableNullRow from "./TableNullRow.vue";
import TableExpandRow from "./TableExpandRow/TableExpandRow.vue";
import { TableDayData } from "../../../types";

defineProps({
  rowData: Object as () => TableDayData
})

</script>
