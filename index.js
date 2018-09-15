import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'; 
export default class RNSimpleRnButton extends Component {
 
  render() {
    return (
      <TouchableOpacity  hitSlop={{ top: this.props.hitSlop, left: this.props.hitSlop, bottom: this.props.hitSlop, right: this.props.hitSlop }} onPress={()=>this.props.onClick()}>
        <View  style={[styles.btnContainer,{backgroundColor:this.props.backgroundColor}]}>
            <Text style={[styles.textStyle,{color:this.props.textColor}]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

RNSimpleRnButton.propTypes = {
  title:PropTypes.string,
  hitSlop:PropTypes.number,
  onClick:PropTypes.func.isRequired,
  textColor:PropTypes.string,
  backgroundColor:PropTypes.string,
}
RNSimpleRnButton.defaultProps = {
  title: 'Title',
  hitSlop:0,
  textColor:"white",
  backgroundColor:"#2ecc71"
};


const styles={
  btnContainer:{
    padding:16,
    borderRadius:7
  },
  textStyle:{
    textAlign:"center"
  }
}
