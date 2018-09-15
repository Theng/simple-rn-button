import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
export default class RNSimpleRnButton extends Component {
 
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick()}>
        <View>
            <Text>Simple Button Test</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

