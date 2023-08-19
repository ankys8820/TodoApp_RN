import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useReducer, useState } from "react";
import TaskItem from "./conponents/TaskItem";

const Task = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  // Handle Input Values
  const handleInputValues = (inputTask) => {
    setTask(inputTask);
  };
  // add task Button
  const handleAddTaskButton = () => {
    setTaskList((prev) => [
      ...prev,
      task,
      { task: task, id: Math.random().toString() },
    ]);
    // alert("task Added Successfully");
  };
  // Delete
  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={handleInputValues}
            placeholder="Add Your Task"
            style={styles.inputBox}
          />
          <Button onPress={handleAddTaskButton} title="Add Task" />
        </View>
        <View>
          <Text style={styles.border}></Text>
          <Text style={styles.textTitle}>Your Task:</Text>
          <View>
            {/* {taskList?.map((items, index) => (
              <Text style={styles.taskItem} key={index}>
                {items}
              </Text>
            ))} */}
            <FlatList
              data={taskList}
              renderItem={({ item, index }) => (
                <TaskItem
                  handleDelete={handleDelete}
                  index={index}
                  item={item}
                />
              )}
              keyExtractor={(item, index) => {
                return index;
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "blue",
    marginTop: 10,
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 1,
    padding: 5,
    paddingLeft: 15,
  },
});
