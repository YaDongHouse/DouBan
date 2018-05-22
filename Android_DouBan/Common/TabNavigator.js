/**
 * 实现功能：封装导航器初始化设置
 *
 * 包含组件：Navigator
 *
 * 外部传入：
 *
 *      component 需要展示的页面组件
 *      route对象 必须添加component属性，如果需要传值可以添加passProps属性
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import BookList from './../Book/book_list';
import BookDetail from './../Book/book_detail';
import MovieList from './../Movies/movie_list';
import CustomWebView from './../Common/customWebView';

//定义图书列表的路由
const BookNavigation = StackNavigator({
    BookList: {screen: BookList},
    BookDetail: {screen: BookDetail},
}, {
    initialRouteName: "BookList",
    headerMode: 'none',
    mode: 'modal',
});

//定义电影列表的路由
const MovieNavigation = StackNavigator({
        MovieList: {screen: MovieList},
        CustomWebView: {screen: CustomWebView}
    }, {
        initialRouteName: "MovieList",
        headerMode: 'none',
        mode: 'modal',
    }
)

export default TabNavigator({
        BookNavigation: {screen: BookNavigation},
        MovieNavigation: {screen: MovieNavigation},
    }, {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                backgroundColor: 'white',
                height: 55,
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: 0,
            },
            labelStyle: {//文字的样式
                fontSize: 13,
                marginTop: -5,
                marginBottom: 5,
            },
            iconStyle: {//图标的样式
                marginBottom: 5,
            }
        },
    }
)



