/**
 * 实现功能：封装Header，在头部展示标题和返回按钮
 *
 * 包含组件：
 *
 * 外部传入；
 *      navigator：点击返回上一级页面
 *      initObj(backName,barTitle) 返回按钮的名称，标题
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from './left_item';
export default class Header extends Component{
    render(){
        //获取对象，包括backName（按钮名称）barTitle(标题）
        var headerContent = this.props.initObj;
        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} {...this.props}>
                    <Icon/>
                    <Text style={styles.btn_text}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                </View>
                <View style={styles.title_right}></View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:"#3497FF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    left_btn:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:5
    },
    btn_text:{
        color:"#FFF",
        fontSize:17,
        fontWeight:"bold"
    },
    title_container:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    title_right:{
        flex:1,
    },
    title:{
        color:"#FFF",
        fontSize:18,
        fontWeight:"bold",
        lineHeight:24,
        width:200,
        textAlign:"center"
    }
})