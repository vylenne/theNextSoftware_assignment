<template>
  <div class="TableNullRow">
    {{ dayId }} is not counted yet
  </div>
</template>

<script lang="ts" setup>
defineProps({
  dayId: String as () => string,
})
</script>

<style scoped>
.TableNullRow {
  padding: 10px 20px;
  border-bottom: 1px solid #bbbbbb;
  color: #3cb371;
}
</style>