import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './src/styles/styles';
import Header from './src/components/Header';
import SearchInput from './src/components/SearchInput';
import TaskList from './src/components/TaskList';
import uuid from 'react-native-uuid';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Dialog,
} from 'react-native-alert-notification';
import {getData, storeData} from './src/utils/storageHelper';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasksFromStorage = async () => {
      getData('tasks').then(result => {
        if (result) {
          setTasks(result);
        } else {
          setTasks([]);
        }
      });
    };

    fetchTasksFromStorage();
  }, []);

  const addTask = async name => {
    const newTasks = [...tasks, {id: uuid.v4(), name, isDone: false}];

    await storeData('tasks', newTasks);
    setTasks(newTasks);
  };

  const toggleTaskStatus = async id => {
    const foundTask = tasks.find(task => task.id === id);
    foundTask.isDone = !foundTask.isDone;

    const updatedTasks = [...tasks];

    await storeData('tasks', updatedTasks);
    setTasks(updatedTasks);
  };

  const removeTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: 'Uyarı',
      textBody: 'Bu görevi silmek istediğinizden emin misiniz ?',
      button: 'Evet',
      onPressButton: async () => {
        setTasks(updatedTasks);
        await storeData('tasks', updatedTasks);
        Dialog.hide();
      },
    });
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.container}>
        <View style={{padding: 10, flex: 9.5, marginBottom: 30}}>
          <Header count={tasks.length} />
          <TaskList
            tasks={tasks}
            toggleTaskStatus={toggleTaskStatus}
            removeTask={removeTask}
          />
        </View>
        <SearchInput addTask={addTask} />
      </SafeAreaView>
    </AlertNotificationRoot>
  );
}

export default App;
