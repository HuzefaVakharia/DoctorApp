import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
   Image,
} from 'react-native';
import colors from '../misc/colors';

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemView}>
   {/*   <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text numberOfLines={3}>{desc}</Text>*/}

       <Image
                  source={ require('../images/medicalIcon.png') }
                  style={ styles.docImage }
                />
                <View>
                 
                 
                  <Text 
                  style={ styles.name }
                  numberOfLines={2}
                  >
                  {item.title}
                  </Text>
                 
                 
                 
                 
                 
                 
                  <Text 
                  style={styles.timing}
                  numberOfLines={3} 
                  >
                  {item.desc}
                  </Text>
                  
                  
                </View>

    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    width: width / 2 - 10,
    padding: 8,
    borderRadius: 10,
  },
  itemView: {
    width: '94%',
    height: 130,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
  },
  name: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color:'purple',
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    marginRight:100,
  },
  status: {
    marginLeft: 30,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    
    color: 'orange',
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.LIGHT,
  },
});

export default Note;
