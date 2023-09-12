import React from 'react';
import {FlatList, View} from 'react-native';
import TaskCard from '../TaskCard';

function TaskList({tasks, toggleTaskStatus, removeTask}) {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskCard
            task={item}
            toggleTaskStatus={toggleTaskStatus}
            removeTask={removeTask}
          />
        )}
      />
    </View>
  );
}

export default TaskList;
