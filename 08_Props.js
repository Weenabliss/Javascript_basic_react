import React, { Component } from "react";
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
class Propspractice extends Component {
    render() {
        return (
            <View>
                <Text>Hello new app!</Text>
                <DisplayComponent name = 'Ween' greeting = 'Have a nice day!' />
            </View>
        )
    }
}
class DisplayComponent extends Component {
    _onPress(){
        //this.props.name = "Olive"; //Không thể thay đổi giá trị của this.props -> this.props chỉ nhận giá trị từ đối số.
        console.log('this is onpress event');
    };  
    _onPress2(value){
        console.log(value);
    };  
    render() {
        return (
            <View>
                <Text onPress={this._onPress}>Hello master {this.props.name} {this.props.greeting}</Text> 
                {/* onpress - event thường không dùng tham số. */}
                <Text onPress={this._onPress2.bind(this,'onpress2')}>This is display componnet!</Text> 
                {/* sử dụng bind để customize hàm event onpress */}
                <Text>This is display component 2 </Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('firstapplication', () => Propspractice);