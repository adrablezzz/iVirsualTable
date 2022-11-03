<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang jianjun
 * @Date: 2022-09-13 11:47:35
 * @LastEditors: zhang jianjun
 * @LastEditTime: 2022-11-03 14:37:27
-->
<template>
  <div>
    <virsualTable :height="400" :data="data"></virsualTable>
  </div>
</template>

<script>
import virsualTable from './virsualTable.vue'
export default {
  name: 'HelloWorld',
  components: {
    virsualTable
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
    for (let i = 0; i < 100; i++) {
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