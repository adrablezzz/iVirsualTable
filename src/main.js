/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang jianjun
 * @Date: 2022-09-13 11:47:35
 * @LastEditors: zhang jianjun
 * @LastEditTime: 2022-09-13 14:09:49
 */
import Vue from 'vue'
import App from './App.vue'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI)


import hbCharts from 'hb_test_charts'
Vue.use(hbCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
