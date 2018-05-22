/**
 *
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import BookNavigation from './TabNavigator';
import MovieNavigation from './MovieNavigation';

export default TabNavigator({
    BookNavigation: { screen: BookNavigation },
    MovieNavigation: { screen: MovieNavigation },
    }
)


