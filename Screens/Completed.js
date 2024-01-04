import { View, Text, StyleSheet, FlatList, Image,Alert,ScrollView } from 'react-native';
import React,{useEffect,useState,useContext} from 'react';
import Header from '../components/Header';
import { NoteContext } from '../NoteProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button,} from '@rneui/themed';



const Completed = () =>
{


const { completedNotes, setcompletedNotes,findCompletedNotes }=useContext(NoteContext);

//const result ='';

  

  
useEffect(() => {
    findCompletedNotes();
  }, []); 

  //const refresh=()=>{findCompletedNotes()}





  return (
    
    <View style={ styles.container }>
     <Text style={ styles.status }>COMPLETED TASK</Text>
      <ScrollView>
        <FlatList
          data={completedNotes}
          keyExtractor={ item => item.id.toString() }
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height:200}}
          renderItem={ ({item}) =>
          {
            return (
              <View style={ styles.itemView }>
                <Image
                  source={ require('../images/doctor.png') }
                  style={ styles.docImage }
                />
                <View>
                
                  <Text style={ styles.name }>{item.title}</Text>
                  <Text style={ styles.timing }>{item.desc}</Text>
                  
                  
                </View>
                
              </View>
            );
          } }
        />
      </ScrollView>

  {/*    <Button
       title='COMPLETED LIST'
       onPress={()=>refresh()}
       icon={ {
        name: 'home',
        type: 'font-awesome',
        size: 15,
        color: 'white',
       } }
       iconContainerStyle={ { marginRight: 10 } }
       titleStyle={ { fontWeight: '700' } }
       buttonStyle={ {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
       } }
       containerStyle={ {
        width: 200,                                                                                                                      justifyContent:'center',
        alignSelf:'center',
        marginHorizontal: 50,
        marginVertical: 10,
       } }
      />        */}


    </View>
     
  );
};

export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
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
   alignSelf:'center',
    justifyContent:'center',
    
    fontSize: 25,
    color: 'orange',
  },
});
