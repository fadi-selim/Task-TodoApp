import React from 'react';
import { Text, View, Button, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  appContainer: {
    paddingTop: 5,
  },
  fill: {
    flex: 1,
  },
});
export default class Todo extends React.Component {

  render() {
    return (
      <View style={styles.todoContainer}>
        <Text style={{fontSize:23 , marginRight:10 , fontWeight:"bold",textTransform:"uppercase"}}>
          {this.props.todo.text}
        </Text>
        <Button title ="Delete" onPress={this.props.ondeleteprop} />
        
      </View>
    );
  }
}

