<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhang jianjun
 * @Date: 2022-09-13 11:47:35
 * @LastEditors: zhang jianjun
 * @LastEditTime: 2022-11-03 14:18:15
-->
<template>
  <div>
    <div class="table-wrapper" :style="{width:width + 'px',height:height + 'px'}" ref="tableRef" @scroll.passive="onScroll">
      <div class="table-innner" :style="{height: tableInnerHeight + 'px', paddingTop: startIndex * itemHeight + 'px'}">
        <div v-for="(item,index) in data.slice(startIndex,endIndex)" :key="index" class="table-item" :style="{height: itemHeight + 'px',lineHeight: itemHeight + 'px'}">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'virsualTable',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number
    },
    itemHeight: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      startIndex: 0,
      endIndex: 0,
      restNum: 5
    }
  },
  computed: {
    clientNum() {
      return Math.ceil(this.height / this.itemHeight)
    },
    tableInnerHeight() {
      return this.data.length * this.itemHeight
    }
  },
  methods: {
    onScroll(e) {
      window.requestAnimationFrame(this.refreshRenderData)
    },
    refreshRenderData: function() {
      let scrollTop = this.$refs.tableRef.scrollTop
      let preNum = Math.floor(scrollTop / this.itemHeight)
      this.startIndex = preNum > this.restNum ? preNum - this.restNum : 0
      this.endIndex = this.startIndex + this.clientNum + this.restNum * 2
    }
  },  
  created() {
    this.endIndex = this.clientNum + this.restNum
  }
}
</script>

<style lang="less" scoped>
.table-wrapper {
  width: 100%;
  overflow: auto;
  border: 1px solid #000;
  .table-item {
    text-align: center;
    border: 1px solid #eee;
  }
}
</style>