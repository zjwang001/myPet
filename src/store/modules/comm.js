/**
 * Created by wangzhenjiang 2016/11/7.
 */
import * as types from '../mutation';  //模块整体加载
//通用的配置，例如顶部的配置跟地址菜单
const state = {
    isSearch:true,  //是否显示搜索
    isBack:false,   //是否显示返回
    isShare:false,  //是否显示分享
    title:'',       //显示标题内容
    isFooter:false, //是否显示底部

    loading:false,  //是否显示loading,
    mark:false      //是否显示遮罩,
};

const actions  = {
    commConf({commit},settings){
        commit(types.COMM_CONF,settings);
    },
    markStatus({commit},status){
        commit(types.COMM_MARK_STATUS,status);
    },
    loading({commit}){
        commit(types.COMM_LOADING_STATUS,true);
    }
};

const getters = {
    commConf : state => state,
    loading : state => state.loading,
    markStatus : state => state.mark,
};

const mutations = {
    [types.COMM_CONF](state,settings){
        state = Object.assign(state,settings);  //新对象替换老对象
    },
    [types.COMM_MARK_STATUS](state,status){
        //"use strict";
        state.mark = status
    },
    [types.COMM_LOADING_STATUS](state,status){
        state.loading = status
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}