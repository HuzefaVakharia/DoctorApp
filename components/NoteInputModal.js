import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Icon,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';
import { Ionicons } from '@expo/vector-icons';

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit,moveToCompleteProps}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  
  const handleModalClose = () =>
  {
    Keyboard.dismiss();
  };

  
  
  
  useEffect(() =>
  {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  
  
  
  
  const handleOnChangeText = (text, valueFor) =>
  {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  
  
  
  
  
  
  const handleMovingFromPendingToComplete=()=>{
    if (!title.trim() && !desc.trim()) return onClose();
    
    
    moveToCompleteProps(title, desc)
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const handleSubmit = () =>
  {
    /* The functional component is use to store our Title and Description in Async Storage. */
    if (!title.trim() && !desc.trim()) return onClose();
    /* Using this above if condition, if user will not enter any text in Title or Description and hit save to Async Storage button, then the modal popup form in which there is EditText but title and description will get close and we will see NoteScreen where all our previously saved notes will display. */
    
    
    if (isEdit)
    {

      /* Under stand this concept there are two different onSubmit={} props avaialbe in this program in two different .js files.

      1. First onSubmit={} props is available in NoteDetail.js file in which onSubmit={} props contains 'handleUpdate' arrow functional component like this:

       onSubmit={handleUpdate};

      2. Second onSubmit={} props is available in Pending.js file in which onSubmit={} props contains 'handleOnSubmit' arrow functional component like this:

       onSubmit={handleOnSubmit}
      
      
      
      If user wants to Edit the already written note then onSubmit() props of NoteDetail will be fetched by NoteInputModal.js. And The arrow functional component written in onSubmit={} props of NoteDetail.js file will execute which requires three things to perform execution and those three things are title, desc and Date.now() 
      
      But if user do not want to Edit the existing note but if user want to create the new note then also same props name is avaialbe in Pending.js file in which there is arrow functional component with name 'handleOnSubmit' is present. So if user want to create new note then we will not use onSubmit={} props from NoteDetail.js but we will use onSubmite={} props of Pending.js file and after that our functional component handleOnSubmit will execute which requires only two arguments to perform execution and those two argument are title and desc. Which we are passing from another onSubmit={} props which is outside of this if(isEdit){..} condition i.e. below if(isEdit){..} condition. */
      onSubmit(title, desc, Date.now());  
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  
  
  
  const closeModal = () =>
  {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  
  
  
  
  return (
    <>
      
      <Modal visible={ visible } animationType='fade'>
        {/* Modal is one type of Pop up window */}
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={text => handleOnChangeText(text, 'title')}
            placeholder='Title'
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder='Note'
            style={[styles.input, styles.desc]}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              size={25}
              antIconName='check'
              onPress={handleSubmit}
            />
           
              <RoundIconBtn
                size={25}
                style={{ marginLeft: 15 }}
                antIconName='close'
                onPress={closeModal}
              />







   








              <RoundIconBtn
                size={25}
                style={{ marginLeft: 15 }}
                antIconName='like1'
                onPress={handleMovingFromPendingToComplete}
              />
            
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});

export default NoteInputModal;
