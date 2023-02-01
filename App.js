import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoaText] = useState('') //state is intially set to empty because the textbox will be empty at the start
  const [courseGoals, setCourseGoals] = useState([])
  //enteredGoalText becomes the app state
  // setEnteredGoalText is the function that can be called to update the state

  function goalInputHandler(enteredText) {
    setEnteredGoaText(enteredText) //setEnteredGoaText is passed the enteredText paramater so it updates the state
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler} //onChangeText runs functions in {} when text is changed
        />
        <Button title='Connect' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
        {/*curly braces means dynamic, map gets every value in courseGoals, goal represents every item in courseGoals, is what rendered */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8

  },
  goalsContainer: {
    flex: 3,
  }
});
