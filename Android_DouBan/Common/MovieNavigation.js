import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MovieList from './../Movies/movie_list';
import CustomWebView from './../Common/customWebView';

export default MovieNavigation = StackNavigator({
        MovieList:{screen:MovieList},
        CustomWebView:{screen:CustomWebView}
    },{
        initialRouteName:"MovieList",
        headerMode: 'none',
        mode: 'modal',
    }
)