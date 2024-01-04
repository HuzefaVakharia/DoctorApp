import { View, Text, StyleSheet, FlatList, Image, Alert, ScrollView, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RoundIconBtn from '../components/RoundIconBtn';
import NoteInputModal from '../components/NoteInputModal';

import { NoteContext } from '../NoteProvider';
import Note from '../components/Note';
import NotFound from '../components/NotFound';

import SearchBar from '../components/SearchBar';

const Pending = ({ navigation }) =>
{
  const { notes, setNotes, findNotes } = useContext(NoteContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [resultNotFound, setResultNotFound] = useState(false);






  const handleOnSubmit = async (title, desc) =>
  {

    const note = {
      id: Date.now(),
      title: title,
      desc: desc,
      time: Date.now()
    };

    const updatedNotes = [...notes, note];


    setNotes(updatedNotes);

    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };







  const showStoredData = async () =>
  {
    const result = await AsyncStorage.getItem('notes');
    Alert.alert(result);
  }






  const openNote = note =>
  {
    navigation.navigate('NoteDetail', { note });
  };




  const handleOnSearchInput = async text =>
  {
    setSearchQuery(text);
    if (!text.trim())
    {
      setSearchQuery('');
      setResultNotFound(false);
      return await findNotes();
    }
    
    
    const filteredNotes = notes.filter(note =>
    {
      if (note.title.toLowerCase().includes(text.toLowerCase()))
      {
        return note;
      }
    });

    if (filteredNotes.length)
    {
      setNotes([...filteredNotes]);
    } else
    {
      setResultNotFound(true);
    }
  };










  const handleOnClear = async () =>
  {
    setSearchQuery('');
    setResultNotFound(false);
    await findNotes();
  };



















  return (
    <>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <View style={ styles.container }>

          <View>
            <Text style={ styles.status }>{ 'PENDING' }</Text>
            { notes.length ? (
              <SearchBar
                value={ searchQuery }
                onChangeText={ handleOnSearchInput }
                containerStyle={ { marginVertical: 15 } }
                onClear={ handleOnClear }
              />
            ) : null }



            { resultNotFound ? (
              <NotFound />
            ) : (
              <ScrollView>



                <FlatList
                  data={ notes }
                  keyExtractor={ item => item.id.toString() }
                  ListFooterComponent={ <View /> }
                  ListFooterComponentStyle={ { height: 200 } }

                  renderItem={ ({ item }) => (
                    <Note onPress={ () => openNote(item) } item={ item } />
                  ) }
                />

              </ScrollView>

            ) }



            { !notes.length ? (
              <View>
                <Text style={ styles.emptyHeader }>Add Notes</Text>
              </View>
            ) : null }
          </View>
        </View>

      </TouchableWithoutFeedback>



      <RoundIconBtn
        onPress={ () => setModalVisible(true) }
        antIconName='plus'
        style={ styles.addBtn }
      />


      <NoteInputModal
        visible={ modalVisible }
        onClose={ () => setModalVisible(false) }
        onSubmit={ handleOnSubmit }
        moveToCompleteProps={ () => setModalVisible(false) }
      />

      {/*Note: Note that we are sending our method handleOnSubmit when we are calling NoteInputModal page so that method handleOnSubmit which is defined in this file Pending.js can collect data from NoteInputModal and run there in NoteInputModal whose all code is present in Pending.js  */}







    </>
  );
};

export default Pending;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    marginTop:35,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,


    alignSelf: 'center',
    justifyContent: 'center',


    color: 'black',


  },

  notFoundStyle: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
    margin: 100,



    color: 'black',


  },





  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    marginTop: 50,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',

    fontSize: 25,
    color: 'orange',
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});
