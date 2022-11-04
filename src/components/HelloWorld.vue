<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang jianjun
 * @Date: 2022-09-13 11:47:35
 * @LastEditors: zhang jianjun
 * @LastEditTime: 2022-11-03 18:25:58
-->
<template>
  <div>
    <!-- <virsualTable :height="400" :data="data"></virsualTable> -->
    <iViewTable :columns="columns" :data="data" :height="400" :width="400"></iViewTable>
    <!-- <Table :columns="columns" :data="data" :height="400" :width="400"></Table> -->
  </div>
</template>

<script>
import virsualTable from './virsualTable.vue'
import iViewTable from './iVirsualTable'
export default {
  name: 'HelloWorld',
  components: {
    virsualTable,
    iViewTable
  },
  data() {
    return {
      loading: false,
      data: [],
      columns: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '年龄',
          key: 'age',
        },
      ]
    }
  },
  methods: {
    refresh() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  },
  created() {
    for (let i = 0; i < 1000; i++) {
      this.data.push({
        name: 'zs',
        age: i
      })
    }
    this.refresh()
  }
}
</script>

<style lang="less" scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>