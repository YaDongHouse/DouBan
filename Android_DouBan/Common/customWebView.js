/**
 * 实现功能：封装WebView，更具传入的url展示网页信息
 *
 * 包含组件：Header，WebView
 *
 * 外部传入：
 *      给Header设置：navigator，initObj（backName，title）
 *      给WebView设置：source
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import Header from './header';
export default class CustomWebView extends Component{
    constructor(props) {
        super(props);
        this._goBack = this._goBack.bind(this);

    }
    _goBack(){
        this.props.navigation.goBack();
    }

    render(){
        const { params } = this.props.navigation.state;
        console.log(params.url)
        return(
            <View style={{backgroundColor:"white", flex:1}}>
                <Header
                    onPress={this._goBack}
                    initObj={{
                        backName:"电影",
                        barTitle:params.title,
                    }}/>
                <WebView
                    startInLoadingState={true}
                    contentInset={{top:-44,bottom:-120}}
                    source={{uri:params.url}}/>
            </View>
        )
    }
}



