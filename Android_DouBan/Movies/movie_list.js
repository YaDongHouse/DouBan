/**
 * 电影列表模块：搜索栏，电影列表
 *
 * 电影列表的内容，通过调用电影搜索接口获得多条电影数据
 *
 * 电影列表item是单独封装的
 *
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView
} from 'react-native';

import SearchBar from './../Common/searchBar';
import Util from './../Common/util';
import ServiceURL from './../Common/service';
import MovieItem from './movie_item';
import MovieWebView from './../Common/customWebView';

export default class MovieList extends Component{


    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
        });
        this.state={
            dataSource:ds,
            show:false,
            keywords:"哈利波特"
        };
        this._searchPress = this._searchPress.bind(this);
        this._changeText  = this._changeText.bind(this);
        this._showDetail = this._showDetail.bind(this);
    }

    getData(){
        this.setState({
            show:false
        });
        var that = this;
        var url = ServiceURL.movie_search+"?count=20&q="+this.state.keywords;
        Util.getRequest(url,function (data) {
            var ds = new ListView.DataSource({
                rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
            });
            if (!data.subjects||data.subjects.length == 0){
                that.setState({
                    show:true,
                })
                return alert("未找到相关电影");
            }
            var movies = data.subjects;
            that.setState({
                show:true,
                dataSource :ds.cloneWithRows(movies)
            })
        },function (error) {
            alert(error);
        })
    }

    render(){
        return(
            <ScrollView>
                <SearchBar placeholder="请输入电影名称"
                           onPress={this._searchPress}
                           onChangeText={this._changeText}/>
                {
                    this.state.show?<ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this._renderRow.bind(this)}
                        renderSeparator={this._renderSeparator.bind(this)}/>:Util.loading
                }
            </ScrollView>
        );
    }

    componentDidMount() {
        //请求数据
        this.getData();
    }

    _renderRow(movie){
        return <MovieItem movie = {movie} onPress={this._showDetail.bind(this,movie.title,movie.alt)}/>
    }
    _renderSeparator(sectionID,rowID){
        var style = {
            height:1,
            backgroundColor:"#cccccc"
        };
        return <View style={style} key={sectionID+rowID}></View>
    }
    _searchPress(){
        this.getData();
    }
    _changeText(text){
        this.setState({
            keywords:text
        });
    }
    _showDetail (title,url){
        console.log(title+url);
        this.props.navigation.navigate("CustomWebView",{title:title,url:url})
    }

}

var styles = StyleSheet.create({

})