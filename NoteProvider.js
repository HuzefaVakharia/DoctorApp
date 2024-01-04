import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Pending from './Screens/Pending';

export const NoteContext = createContext();


const NoteProvider = ({children}) => {
 
/* If we delete our note from AsyncStorage using filter() method of array by creating new updated array and storing that new updated array in AsyncStorage then also we were seeing deleted note in Pending Screen, so this happeded because our pending screen is rendering notes from useState array variable whose name is 'notes', so to make single source of notes for rendering and displaying in our app we will create this NoteContext  */

  const [notes, setNotes] = useState([]);
  const [completedNotes, setcompletedNotes] = useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) setNotes(JSON.parse(result));
  };

  
  
  
  const findCompletedNotes = async () => {
   const result = await AsyncStorage.getItem('AllCompletedNotesKey');
   // Alert.alert(result);
    if (result !== null){

       setcompletedNotes(JSON.parse(result))
      
      }else{
      Alert.alert('Result is blank');  
      }
      


    //Alert.alert(result)
    //Alert.alert(completedNotes)
  };

  useEffect(() => {
    findNotes();
    //findCompletedNotes();
  }, []);

 /*   useEffect(() => {
    findCompletedNotes();
  }, []);*/

  return (
    <NoteContext.Provider value={{ notes, setNotes, findNotes,completedNotes, setcompletedNotes,findCompletedNotes }}>
      {children}
    </NoteContext.Provider>
  );
};



export default NoteProvider;
