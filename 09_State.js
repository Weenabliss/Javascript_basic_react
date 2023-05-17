import React,{Component} from "react";
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
class stateComponent extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Ween', 
            age: 15,
            address: 'HQV', 
            location: 'Bac Tu Liem'
        };
        //state luôn luôn phải được khai báo trong contructor, sau hàm super() - kế thừa
        // this.state = {address: 'Ween', location: 15}; Không được khai báo 2 state - nếu khai báo 2 state sẽ chỉ nhận state cuối cùng
    }
    _onpress(){
        this.setState({name: 'John Wick'}); //Giao diện tự render lại
    };
    render(){
        
        return(
            <View>
                <Text onPress={this._onpress.bind(this)}>Click vào để thay đổi nội dung name</Text>
                <Text>{this.state.name}</Text>
                <Text>{this.state.age}</Text>
                <Text>{this.state.address}</Text>
                <Text>{this.state.location}</Text>
            </View>
            
        )
    }
}
AppRegistry.registerComponent('firstapplication',()=>stateComponent);