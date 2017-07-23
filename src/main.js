/**
 * Created by wangyanqing on 2017/7/22.
 */
//引入各种包和文件，必要时设置成全局可用的。创建路由

import Vue from 'vue'
import App from './App.vue'

//引入mint-ui
import mint from 'mint-ui'
//将mint-ui设置为全局引用
Vue.use(mint);

//引入mint-ui 的样式
import '../node_modules/mint-ui/lib/style.css'

//创建路由
import VueRouter from 'vue-router'
//将路由设置成全局引用
Vue.use(VueRouter);

//引入自定义的事件过滤器
import datefilter from './common/filter/datefilter.js'
//将时间过滤器设置为全局引用
Vue.use(datefilter);

//vue 的 http 请求
import resource from 'vue-resource'
//vue的http请求设置为全局引用
Vue.use(resource);

//图片预览
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

//引入各种路由




















































