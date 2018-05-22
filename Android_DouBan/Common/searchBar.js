/**
 * 实现功能：封装搜索栏组件，包括文本输入框和搜索框
 *
 * 包含组件：
 *
 * 外部传入：
 *
 *      输入框和按钮的属性设置由外部传入，例如：placeholder,onPress,onChangeText
 *      使用...this.props将外部传入的属性设置给TextInput和TouchableOpacity
 *
 *      注意：指定高度，边框颜色，边框线宽
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
export default class SearchBar extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent" {...this.props}/>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var  styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        height:40,
        marginTop:10
    },
    inputContainer:{
        flex:1,
        marginLeft:5,
    },
    input:{
        flex:1,
        height:40,
        borderWidth:1,
        borderRadius:4,
        borderColor:"#CCC",
        padding:0,
        paddingLeft:4,
    },
    btn:{
        width:55,
        height:40,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#23BEEF",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center"
    },
    search:{
        flex:1,
        color:"#FFF",
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center",
        lineHeight:44
    }
})
