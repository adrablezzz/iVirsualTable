/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang jianjun
 * @Date: 2022-11-03 17:27:29
 * @LastEditors: zhang jianjun
 * @LastEditTime: 2022-11-04 11:12:54
 */
import Table from './table.vue';

Table.install = function (Vue) {
  Vue.component('iVirsualTable', Table)
}

export default Table;