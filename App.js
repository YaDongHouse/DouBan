/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator } from 'react-navigation';

import Tab from './Android_DouBan/Common/TabNavigator';

export default class App extends Component<Props> {
  render() {
    return (
        <Tab />
    );
  }
}


