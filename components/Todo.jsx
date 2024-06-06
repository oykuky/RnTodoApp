import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconTrash from "react-native-vector-icons/FontAwesome5";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    const initial = Array.from(Array(1000).keys()).map(index => ({ text: `Todo ${index}` }));
    setTodo(initial);
  }, []);

  const add = () => {
    if (newTodoText.trim()) {
      setTodo([...todo, { text: newTodoText }]);
      setNewTodoText('');
    }
  };

  const remove = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };
  const removeAll= () =>{
    setTodo([]);
  }

  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.title}>To Do App</Text>
      <View style={styles.smContainer}>
        <TextInput
          style={styles.input}
          placeholder="New task"
          onChangeText={(text) => setNewTodoText(text)}
          value={newTodoText}
        />
        <TouchableOpacity style={styles.addButton} onPress={add}>
          <Icon
            style={styles.buttonText}
            name="add-outline"
            size={25}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rmvallButton} onPress={removeAll}>
          <Text style={styles.rmvall}>Remove All
          </Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <FlatList
          data={todo}
          renderItem={({ item, index }) => (
            <View style={styles.items}>
              <Text style={styles.itemText}>{item.text}</Text>
              <TouchableOpacity style={styles.rmvBut} onPress={() => remove(index)}>
                <IconTrash
                  style={styles.rmvbuttonText}
                  name="trash"
                  // color= '#F1E7EB'
                  size={17}
                />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ maxHeight: todo.length * 60 }} // Adjust based on item height
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff', 
  },
  smContainer: {
    // Light pink for header section
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  title: {
    backgroundColor: '#FFD3E0',
    textAlign: 'center',
    paddingVertical: 19,
    fontSize: 26,
    color: '#000',
    marginBottom: 3,
    fontWeight:'600',
    height:70,

  },
  input: {
    height: 60,
    borderRadius: 10,
    borderColor: '#754B88',
    borderWidth: 2,
    padding: 12,
    marginBottom: 10, // Additional margin for spacing
    backgroundColor: '#FFFFFF', // White background for input
  },
  addButton: {
    backgroundColor: '#FE3E6C',
    paddingVertical: 4,
    height: 43,
    width:76,
    color: '#7036C9',
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    paddingVertical: 6,
    color:'#fff',
  },
  wrapper: {
    flex: 1, // Occupies remaining space
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: '#F6F4F4',
    marginVertical: 9,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: '#5F5F5F',
  },
  rmvBut: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rmviconbuttonText: {
    color: '#ffff',
    paddingTop:12,
  },
  rmvallButton:{
    borderColor:'#fffff',
    backgroundColor: '#FE3E6C',
    height:40,
    width:300,
    borderRadius:20,
    color:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  rmvall:{
    color:'#fff'
  },
  rmvbuttonText:{
    color:'#494848',
  }
});

export default Todo;