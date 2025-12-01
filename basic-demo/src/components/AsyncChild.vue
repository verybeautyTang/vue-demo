<template>
  <div class="echarts-container" ref="container">nice to meet you</div>
</template>

<script lang="ts" setup>
// import {TooltipComponent} from 'echarts/core'
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const container = ref()
onMounted(() => {
  if (container.value) {
    const chart = echarts.init(container.value)
    chart.setOption({
      title: {
        text: 'ECharts entry example',
      },
      tooltip: {
        show: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    })
  }
})
</script>

<style scoped>
.echarts-container {
  width: 600px;
  height: 400px;
}
</style>
