import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {default as mainStyles} from '../../styles/styles';
import Icon from 'react-native-remix-icon';
import {default as taskCardStyles} from './styles';

function TaskCard({task, toggleTaskStatus, removeTask}) {
  const taskIsDoneStyle = useMemo(() => {
    if (task.isDone) {
      return {textDecorationLine: 'line-through', opacity: 0.5};
    } else {
      return {textDecorationLine: 'none', opacity: 1};
    }
  }, [task.isDone]);

  return (
    <View style={[mainStyles.chatelle.background, taskCardStyles.container]}>
      <View style={taskCardStyles.container.left}>
        <Text style={[taskCardStyles.container.left.taskName, taskIsDoneStyle]}>
          {task.name}
        </Text>
      </View>
      <View style={taskCardStyles.container.right}>
        <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
          <Icon name="ri-check-double-line" size="36" color="#faf0e6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTask(task.id)}>
          <Icon name="eraser-fill" size="36" color="#faf0e6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TaskCard;
