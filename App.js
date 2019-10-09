import React from 'react';
import {
  Text,
  View,
  Button,
  Switch,
  StyleSheet,
  ScrollView,TextInput
} from 'react-native';
//import {Gun} from 'gun/gun.min.js'
import Todo from './Todo.js';

let id = 0;
const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: 20,
  },
  fill: {
    flex: 1,
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      Temp:"",
      status:true,
    };
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text>
          {'Total number of todos = '}
          {this.state.todos.length}
        </Text>
      
	<View style={{flexDirection:"row",margin:5 ,}}>
	<TextInput style={{flex:1 ,borderWidth:2 ,marginRight:3 , padding:3}}
          value={this.state.Temp}
          onChangeText={this.handleTextInput}
          placeholder="Type A Todo"
        	ref={input => { this.textInput = input }}
	/>
        <Button
	        style={{flex:1}}
          title="Add"
          onPress={() => {
            this.addTodo();
          }}
          disabled={this.state.status}
        />
	</View>
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              ondeleteprop={() => {
                this.onDelete(todo.id);
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
  handleTextInput=(Temp)=>{
  this.setState({Temp})
  this.setState({status:false})
}
  addTodo = () => {
    id++;
    const text = this.state.Temp;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text }],
    });
  this.textInput.clear();
  this.setState({status:true})
  };
  onDelete = idarg => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== idarg)],
    });
  };
  
}

/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo.js'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working kkkk your app!</Text>
	<Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/