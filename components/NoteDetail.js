import React, {useState,useContext} from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';

import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoteContext } from '../NoteProvider';
import NoteInputModal from './NoteInputModal';

const formatDate = ms => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

const NoteDetail = (props,{navigation}) => {
  const [note, setNote] = useState(props.route.params.note);
  
  const { setNotes } = useContext(NoteContext);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  
  //const [allCompletedNotes,setAllCompletedNotes]=useState([]);
      const { completedNotes, setcompletedNotes,findCompletedNotes }=useContext(NoteContext);
  const deleteNote = async () => {
    
    const result = await AsyncStorage.getItem('notes');
    /* First we will fetch all the notes from AsyncStorage using above syntax in const result variable*/
    
    
    let notes = [];   //This [] curly brackets is for array, if we had used let notes = []; as let notes = {}; then notes will become Object and not an array.

    /* Then we will create new blank array without anything in it with name notes */
    
    
    if (result !== null) notes = JSON.parse(result);
    /* Now we will check using if condition that result variable is having something and it is not null then we will convert our feteched all notes from string to JSON object using   JSON.parse(result); and after converting all these notes to JSON Object we will send it to our new array i.e. into notes*/
    
    
    
    const newNotes = notes.filter(n => n.id !== note.id);

    
    /*Now this is the way by using filter function to delete a single element from array. The filter function we will not delete required element from array, but filter function will create new array in which the desired element which we want to delete will not be included.  
    
    Now here we will make new array with name newNotes in which the note from which delete button has been clicked will not get stored, for that we will use filter method of array. The concept of filter method is that it will return all those notes whose id is not equal to the single note from where delete button has been clicked. We will check this condition by 
    
    notes.filter((n)=>n.id!==note.id)
    
    Here n is a temperary variable which will store single note at a time and in this n all the notes will get fetched one by one and that note's id which is fetched currently in n will be said n.id and our note from where delete button has been clicked will be note.id  
    
    Now filter function will compare these two id and if the id of note from where delete button has been clicked is not equal to the note which is currently present in n variable then that n note will be returned by filter function into new array whose name is  newNotes. 
    
    But if the n.id is equal to the note.id i.e. if the id get matched for the note from where delete has been pressed with the note which is inside n variable then that n note will not get return by filter function and it will be kept as it is. So we get new array with name newNotes in which our selected note which we want to delete will not be present. Thus new that note will not be included in our new array newNotes. Thus deleted...*/
    
    
    
    setNotes(newNotes);
    /* Once our newNotes array is ready we will use setNotes method of useState hook to pass newNotes array data into our useState array whose name is notes. */
    
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    /* Now once new data gets into our notes array we will store this new array in our AsyncStorage using above syntax after converting it from JSON Object to string. */
    
    props.navigation.goBack();
    /* And we will go to our NoteScreen from this above syntax. */
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      'Are You Sure!',
      'This action will delete your note permanently!',
      [
        {
          text: 'Delete',
          onPress: deleteNote,
        },
        {
          text: 'No Thanks',
          onPress: () => console.log('no thanks'),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const moveToCompleted = async (title,desc) =>
  {

      const noteComp = {
      id:Date.now(),
      title: title,
      desc: desc,
      time: Date.now(),
    };
    

    //const updatedCompletedNotes = [...allCompletedNotes, noteComp];


    const updatedCompletedNotes = [...completedNotes, noteComp];


     setcompletedNotes(updatedCompletedNotes);
   
    await AsyncStorage.setItem('AllCompletedNotesKey', JSON.stringify(updatedCompletedNotes));

    deleteNote();


  };

  const handleUpdate = async (title, desc, time) => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => {
      if (n.id === note.id) {
        n.title = title;
        n.desc = desc;
        n.isUpdated = true;
        n.time = time;

        setNote(n);
      }
      return n;
    });

    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };
  
  
  
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };














  
  
  return (
    <>
      <ScrollView
        style={ styles.container }
      >
        <Text style={styles.time}>
          {note.isUpdated
            ? `Updated At ${formatDate(note.time)}`
            : `Created At ${formatDate(note.time)}`}
        </Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.desc}>{note.desc}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <RoundIconBtn
          antIconName='delete'
          style={{ backgroundColor: colors.ERROR, marginBottom: 15 }}
          onPress={displayDeleteAlert}
        />
        
        
        <RoundIconBtn 
        antIconName='edit' 
        style={{marginBottom: 15 }}
        onPress={openEditModal} />
        
        
        
        
        <RoundIconBtn 
        antIconName='like1'
        onPress={openEditModal}
         />

        
      </View>
      <NoteInputModal
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        moveToCompleteProps={moveToCompleted}
        visible={showModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    paddingRight:10,
    paddingLeft:10,
    //paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 20,
    opacity: 0.6,
  },
  time: {
    textAlign: 'right',
    fontSize: 12,
    opacity: 0.5,
  },
  btnContainer: {
    position: 'absolute',
    right: 15,
    bottom: 50,
  },
});

export default NoteDetail;
