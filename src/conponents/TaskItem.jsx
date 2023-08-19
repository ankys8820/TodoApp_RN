import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskItem = ({ index, item, handleDelete }) => {
  return (
    <Pressable onPress={handleDelete.bind(this, item.id)}>
      <View>
        <Text style={styles.taskItem}>
          {index + 1}:{item.task}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "#fff",
  },
});
