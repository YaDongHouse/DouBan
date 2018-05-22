/**
 * 图书列表模块：搜索栏，图书列表
 * 图书列表的内容：通过调用图书搜索接口获的多条图书数据
 * 图书列表Item是单独封装的
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
import {StackNavigator} from 'react-navigation';

import Util from './../Common/util';
import SearchBar from './../Common/searchBar';
import ServiceURL from './../Common/service';
import BookItem from './book_item';

export default class BookList extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
        });
        this.state={
            //dataSource
           dataSource:ds,
            //网络请求状态标识
            show:false,
            //搜索关键字
            //作用：1 搜索接口需要设置搜索的内容，2 点击搜索按钮时，修改关键字内容，重新请求数据，重新渲染
            keywords:"React"
        };
        this._changeText = this._changeText.bind(this);
        this._searchPress = this._searchPress.bind(this);
        this._showDetail = this._showDetail.bind(this);
    }

    componentDidMount() {
        //请求数据
        this.getData();
    }

    getData(){
        //开启loading 每次搜索时都需要重新下载显示数据
        this.setState({
            show:false
        })
        //请求数据
        var that = this;
        var url = ServiceURL.book_search+"?count=20&q="+this.state.keywords;
        Util.getRequest(url,
            function (data){
            //请求成功回调函数
                /**
                 * 如果没有相关书籍，使用alert提示
                 * https:/api.douban.com/v2/book/search?count=2&q=react
                 * {"count":0,"start":0,"total":0,"books":[]}
                 */
                    //设置下载状态和数据源
                var ds = new ListView.DataSource({
                        rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
                    })

                if (!data.books||data.books.length==0){
                    that.setState({
                        show:true,
                    })
                    return alert("未查询到相关书籍")
                }
                that.setState({
                    show:true,
                    dataSource :ds.cloneWithRows(data.books)
                })
            },
            function (error){
            //请求失败回调函数
                alert(error)
            })
    }

    /**
     * TextInput的onChangeText事件的处理方法
     * @private
     */
    _changeText(text){
        this.setState({
            keywords:text
        });
    }

    _searchPress(){
        this.getData();
    }

    _renderRow(book){
        return <BookItem book={book} onPress={this._showDetail.bind(this,book.id)}/>
    }

    _renderSeparator(selectionID ,rowID){
        return (
            <View style={{backgroundColor:"#CCC",height:1}} key={selectionID+rowID}/>
        )
    }

    _showDetail (bookID){
        this.props.navigation.navigate("BookDetail",{mBookID:bookID});
    }
    render(){
        return(
            <ScrollView>
                <SearchBar
                    placeholder="请输入图书名称"
                    onChangeText={this._changeText}
                    onPress={this._searchPress}/>
                {
                    //请求数据时显示loading 数据请求成功后显示ListView
                    this.state.show?<ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this._renderRow.bind(this)}
                        renderSeparator={this._renderSeparator.bind(this)}/>:Util.loading
                }
            </ScrollView>
        );
    }
}
