import
{
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';
let DaysList = [];
const BookAppointment = ({ navigation }) =>
{
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [slots, setSlots] = useState([
    { sloT: '10:00-12:00PM', selected: false },
    { sloT: '12:00-02:00PM', selected: false },
    { sloT: '02:00-04:00PM', selected: false },
    { sloT: '04:00-06:00PM', selected: false },
    { sloT: '06:00-08:00PM', selected: false },
    { sloT: '08:00-11:00PM', selected: false },
  ]);


  const [days, setDays] = useState([]);

  useEffect(() =>
  {


    DaysList = [];

    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++)
    {
      DaysList.push({ day: i, selected: false });
    }

    /* REMEBER THAT WE DO NOT REQUIRE TO DECLARE FIRST VARIABLE FOR OUR KEY AND WHEN WE ARE DEFINING NEW FUNCTION IN REACT NATIVE, FOR ANY OTHER VARIABLE USAGE WE WILL HAVE TO FIRST DECLARE IT USING CONST, VAR ETC.
 
 
   Step 1:  Here we will generate a DaysList array, initially array will be blank. The DaysList array contains two keys namely day key and selected key. This key we do not have to specify while time of declaring the array in javaScript. We can specify those keys while filling that array.
  
  Step 2: Now to fill this array with number of dates possible in a month we will take one for loop, we will start that for loop with 1 i.e. let i=1, then we will iterate till the number of dates which comes in current month. So now we want to know which month can contain how many days. So for know that which particular month, how many days comes in it. i.e. for a particular month how many dates is possible in that month. So first of all we will know what is the current month running, so that we will know using  'new Date().getMonth() + 1'.
 
 Step 3: Once we will know the number of month which is currently running,  using syntax: 'new Date().getMonth() + 1' we will put this month number in another user defined method called 'getDays'. The getDays method will  
 
 
 
    The  getDays(new Date().getMonth() + 1) will result into passing the current month using new Date().getMonth()+1 in getDays() method. Then using this current month number we will displays dates as how how many dates comes in that month.
    
    Now UNDERSTAND HOW TO PASS AN ARGUMENT TO ANY FUNCTION IN REACT NATIVE: WHEN WE WANT TO CREATE ANY NEW FUNCTION WE WRITE LIKE THIS
    
    const xyz=()=>{.....}
    
    So when we want to pass some arguments using which the function will give us result then we will put that arguments inside () brackets of =()=>{...}
    
    So here we will take one variable named month and that we will pass as argument in const getDays user defined functions.
    
    Step 4:  We will take another new variable named days inside user defined function getDays() and initialize it with 0 first. Now we will match our passed month with number, if month==1, then we will assign days with value days=31, if month==2  we will assign days with number day=28, if month==3  we will assign days = 31 and so on...
    
    Step 5: Once we will gets how many days a month will contain we will again go to our for loop where we want to fill our array DayList, for that we had initialize our for loop with 'let i=1' so if let month is of January then month will be 1 and days will get value 31 and so our for loop will run till <= less than or equal to 31 i.e. i<=31. And for each loop we will put a value of our i variable in key 'day' and our second key 'selected' will always get static value initially which is false. So if our 
    month=1  days will be days=31 and our DayList array will look like this:
 
    DayList=[{day:1,selected:false},
    {day:1,selected:false},
    {day:2,selected:false},
    {day:3,selected:false},
    {day:4,selected:false},
    {day:5,selected:false},
    {day:6,selected:false},
    {day:7,selected:false},
    {day:8,selected:false},
    {day:9,selected:false},
    {day:10,selected:false},
    {day:11,selected:false},
    {day:12,selected:false},
    {day:13,selected:false},
    {day:14,selected:false},
    {day:15,selected:false},
    {day:16,selected:false},
    {day:17,selected:false},
    {day:18,selected:false},
    {day:19,selected:false},
    {day:20,selected:false},
    {day:21,selected:false},
    {day:22,selected:false},
    {day:23,selected:false},
    {day:24,selected:false},
    {day:25,selected:false},
    {day:26,selected:false},
    {day:27,selected:false},
    {day:28,selected:false},
    {day:29,selected:false},
    {day:30,selected:false},
    {day:31,selected:false},
   ]
 
    Step 5: Now our required array DaysList is generated as per current month. Now we will set this new array in our useState array whose name is also days using setDays(DaysList); syntax. And this whole process is kept inside useEffect() hook, so this whole process will run everytime when our BookAppointment.js page will get loaded in our app. 
    */

    setDays(DaysList);
  }, []);

  const todaysdate = new Date().getDate()


  const getDays = (month) =>
  {

    let days = 0;

    if (month == 1)
    {
      days = 31;
    }

    else if (month == 2)
    {
      days = 28;
    }

    else if (month == 3)
    {
      days = 31;
    }

    else if (month == 4)
    {
      days = 30;
    }

    else if (month == 5)
    {
      days = 31;
    }

    else if (month == 6)
    {
      days = 30;
    }

    else if (month == 7)
    {
      days = 31;
    }

    else if (month == 8)
    {
      days = 31;
    }

    else if (month == 9)
    {
      days = 30;
    }

    else if (month == 10)
    {
      days = 31;
    }

    else if (month == 11)
    {
      days = 30;
    }

    else if (month == 12)
    {
      days = 31;
    }

    return days;
  };


  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.container }>

        <Image source={ require('../images/blueStetoscope.png') } style={ styles.docImg } />
        <Text style={ styles.name }>Doctor Rajesh</Text>
        <Text style={ styles.spcl }>M.B.B.S.</Text>
        <Text style={ styles.heading }>Select Date</Text>
        <View style={ { marginTop: 20 } }>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={ false }
            data={ days }
            keyExtractor={ ({ item, index }) => index }//Since we require id in keyExtractor params in usual FlatList, and since we have not created key with name id in our array DaysList, so now we will take the default index which is generated by FlatList automatically and consider the value of index as our uniqe key, so keyExtractor params now required two things, the copy array i.e. item array and its index. So we will pass in keyExtractor={} params two kind of arguments which will be the required data to perform task which is written after => symbol. So we will put two data i..e item,index inside our keyExtractor={} params argument ie like this keyExtractor={({ item, index })}  and after getting required data as argument in our arrow function, our arrow function will perform task of giving keyExtractor params required unique value which will be index, and so we have written index after =>

            renderItem={ ({ item, index }) =>
            {
              return (
                <TouchableOpacity
                  style={ {
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? 'blue' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                  } }
                  onPress={ () =>
                  {
                    if (item.day < new Date().getDate())
                    {
                      Alert.alert('This date has passed for this current month, please select upcomming date date for this current month.')
                    }

                    else
                    {
                      setSelectedDay(index);
                    }
                  } }>

                  {/* ***************** */ }
                  { item.day < todaysdate ? (

                    <Text style={ {
                      color: 'red',
                      fontSize: 16,
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    } }>N/A</Text>

                  ) : (

                    <Text style={ {
                      color: selectedDay == index ? '#fff' : 'blue'
                    } }
                    >{ item.day }</Text>

                  ) }



                  {/* ****************************************** */ }
                  {/*<Text style={ { color: selectedDay == index ? '#fff' : 'blue' } }>
                    { item.day }
                  </Text>*/}
                </TouchableOpacity>
              );
            } }
          />
        </View>
        <Text style={ styles.heading }>Available Slots</Text>
        <View>
          <FlatList
            numColumns={ 2 }
            data={ slots }
            keyExtractor={ ({ item, index }) => index }
            renderItem={ ({ item, index }) =>
            {
              return (
                <TouchableOpacity
                  style={ [
                    styles.timeSlot,
                    { borderColor: index == selectedSlot ? 'blue' : 'black' },
                  ] }
                  onPress={ () =>
                  {
                    setSelectedSlot(index);
                  } }>
                  <Text
                    style={ { color: index == selectedSlot ? 'blue' : 'black' } }>
                    { item.sloT }
                  </Text>
                </TouchableOpacity>
              );
            } }
          />
        </View>
        <Text style={ styles.heading }>Patient Name</Text>
        <TextInput style={ styles.nameInput } placeholder={ 'Enter Name' } />
        <Text style={ styles.heading }>Select Gender</Text>
        <View style={ styles.genderView }>
          <TouchableOpacity
            style={ [
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 0 ? 'blue' : 'black',
              },
            ] }
            onPress={ () =>
            {
              setSelectedGender(0);
            } }>
            <Image
              source={ require('../images/male.png') }
              style={ { width: 24, height: 24 } }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={ [
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 1 ? 'blue' : 'black',
              },
            ] }
            onPress={ () =>
            {
              setSelectedGender(1);
            } }>
            <Image
              source={ require('../images/female.png') }
              style={ { width: 24, height: 24 } }
            />
          </TouchableOpacity>
        </View>
        <View style={ styles.btnView }>
          <CommonBtn
            w={ 300 }
            h={ 45 }
            txt={ 'Book Now' }
            status={ true }
            onClick={ () =>
            {
              navigation.navigate('Success');
            } }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2d8596', },
  docImg: {
    width: 150,
    height: 150,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },

  spcl: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: { marginTop: 20, marginBottom: 20 },
});







/*import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';
let DaysList = [];
const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [slots, setSlots] = useState([
    {sloT: '10:00-12:00PM', selected: false},
    {sloT: '12:00-02:00PM', selected: false},
    {sloT: '02:00-04:00PM', selected: false},
    {sloT: '04:00-06:00PM', selected: false},
    {sloT: '06:00-08:00PM', selected: false},
    {sloT: '08:00-11:00PM', selected: false},
  ]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }



    setDays(DaysList);
  }, []);



  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
       
        <Image source={require('../images/doctorblue.png')} style={styles.docImg} />
        <Text style={styles.name}>Doctor Neha</Text>
        <Text style={styles.spcl}>Skin Doctor</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? 'blue' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {Alert.alert('This date has passed for this current month, please select upcomming date date for this current month.')
                    } else {
                      setSelectedDay(index);
                    }
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={slots}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    {borderColor: index == selectedSlot ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{color: index == selectedSlot ? 'blue' : 'black'}}>
                    {item.sloT}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder={'Enter Name'} />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 0 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/male.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 1 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}>
            <Image
              source={require('../images/female.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <CommonBtn
            w={300}
            h={45}
            txt={'Book Now'}
            status={true}
            onClick={() => {
              navigation.navigate('Success');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;
const styles = StyleSheet.create({
  container: {flex: 1, 
  
  backgroundColor: '#2d8596',
    },
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },

  spcl: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {marginTop: 20, marginBottom: 20},
});
*/