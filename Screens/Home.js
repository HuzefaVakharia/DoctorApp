import
  {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StatusBar,
    LogBox,
  } from 'react-native';
import React,{useState, useEffect, useRef,} from 'react';
import Header from '../components/Header';

import CommonBtn from '../components/CommonBtn';

const {height, width} = Dimensions.get('window');

const image1=require('../images/stetoscope.jpg');
const image2=require('../images/dna.jpg');
//const image1=require('../images/neuron.jpg');
//const image2=require('../images/neuron.jpg');
//const image3=require('../images/neuron.jpg');
//const image4=require('../images/neuron.jpg');
//const image5=require('../images/neuron.jpg');
//const image6=require('../images/neuron.jpg');
const image3=require('../images/heart.jpg');
const image4=require('../images/dna.jpg');
const image5=require('../images/fourth.jpg');
const image6=require('../images/xrayOfBody.jpg');





const Home = ({ navigation }) =>
{

  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
}, [])
//const styleTypes=['default','dark-content','light-content'];
//const [styleStatusBar,setStyleStatusBar] = useState(styleTypes[0]);
const flatListRef = useRef();
let index=-1;
const totalIndex = 6;

const [value, valuesetter] = useState(0);

useEffect (() => { 
  setInterval (() => {
  index++;
  if(index < totalIndex) {
      flatListRef.current.scrollToIndex({animated: true, index: index});
      
  } 
  }, 1000)
  }, [value]);






const [data,setData]=useState([
    
      
        {
          items:[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6
            ],
            
            },
            
            ],
  

  );

const[selectedIndex,setSelectedIndex]=useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={ styles.container2 }>
        <View style={ styles.container2 }>



        {/*  <Image
            source={ require('../images/banner.jpg') }
            style={ styles.banner }
          />*/} 
         <StatusBar backgroundColor='white' barStyle={"dark-content"}/> 
          <View
        style={{
          //height: height / 2,
          height:310,
          marginTop:15,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'black',
        }}>
        
        
        
        <FlatList
          
          data={data[0].items}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={
          
          e => {
            
            setSelectedIndex((e.nativeEvent.contentOffset.x / width).toFixed(0));

            
          }}

        onEndReached={()=>{
            valuesetter(value + 1);
            }}
          
          ref={flatListRef}
  
          

          
          horizontal
          renderItem={({item, index}) => {
            return (
              
              <View
                style={{
                  width:width, 
                  //height: height / 2,
                  height:300,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}> 

                {/*if we want to show two images on screen at a time when we swipe flatlist we will give width - 50*/}

             <Image
            //resizeMode='contain'
            //resizeMode='center'
          source={item}
          style={ {
             
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          opacity: 1,
          width: width-10,
          height: 300,} }
        /> 
        
        
         </View>
             
             
            );
          }}
        />
      </View>
          
          {/*CODING FOR DOT INDICATOR*******************/}

        <View
        style={{
          flexDirection: 'row',
          width: width,
          //bottom:0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data[0].items.map((item,index) => {
          return (
            <View
              style={{
                width: selectedIndex == index ? 30 : 8,
                height: selectedIndex == index ? 10 : 8,
                borderRadius: selectedIndex == index ? 5 : 4,
                marginLeft: 5,
                backgroundColor: selectedIndex == index ? 'green' : 'gray',
                
              }}></View>
          );
        })}
      </View>

          {/*END OF CODING FOR DOT INDICATOR*******************/}





          <Text style={ styles.heading }>Select Category</Text>
          <View style={ { marginTop: -16 } }>
            <FlatList
              data={ [1, 1, 1, 1, 1, 1, 1] }
              horizontal
              showsHorizontalScrollIndicator={ false }
              renderItem={ ({ item, index }) =>
              {
                return (
                  <TouchableOpacity style={ styles.touchableOpacityStyle }>

                    <Text style={ styles.catName }>
                      { 'Category ' + index }
                    </Text>

                  </TouchableOpacity>

                );
              } }
            />
          </View>
          <Text style={ styles.heading }>Top Rated Doctors</Text>
          <View style={ { marginTop:5, alignItems: 'center' } }>
            <FlatList
              numColumns={ 2 }
              data={ [1, 1, 1, 1, 1, 1] }
              renderItem={ ({ item, index }) =>
              {
                return (
                  <View style={ styles.docItem }>
                    <Image
                      source={ require('../images/blueStetoscope.png') }
                      style={ styles.docImg }
                    />
                    <Text style={ styles.docName }>Doctor { index + 1 }</Text>
                    <Text style={ styles.docSpl }>Skin Specialist</Text>
                    <Text
                      style={ [
                        styles.status,
                        {
                          color: index / 2 == 0 ? 'green' : 'red',
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ] }>
                      { index / 2 == 0 ? 'Available' : 'Busy' }
                    </Text>
                    <CommonBtn
                      width={ 150 }
                      height={ 40 }
                      status={ index / 2 == 0 ? true : false }
                      txt={ 'Get Appointment' }
                      onClick={ () =>
                      {
                        if (index / 2 == 0)
                        {
                          navigation.navigate('BookAppointment');
                        }
                      } }
                    />
                  </View>
                );
              } }
            />
          </View>
        </View>
      </ScrollView>
     
     {/* <View style={ styles.bottomView }>
        <TouchableOpacity
          onPress={ () =>
          {
            navigation.navigate('Completed');
          } }>
          <Image
            source={ require('../images/completed.png') }
            style={ styles.bottomIcon }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () =>
          {
            navigation.navigate('Pending');
          } }>
          <Image
            source={ require('../images/pending.png') }
            style={ styles.bottomIcon }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () =>
          {
            navigation.navigate('CallAmb');
          } }>
          <Image
            source={ require('../images/ambulance.png') }
            style={ styles.bottomIcon }
          />
        </TouchableOpacity>
      </View>*/}
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F00FF',
    //marginTop:15,
  },
  container2: {
    flex: 1,
    backgroundColor: '#8F00FF',
    
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',

  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  touchableOpacityStyle: {
    backgroundColor: '#b388d1',
    marginTop: 30,
    padding: 10,
    margin: 20,
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#b388d1',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    //width: 60,
    width: 100,
    height: 100,
    borderRadius:20,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
  bottomView: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});
