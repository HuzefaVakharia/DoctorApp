import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "./StylesForAnimatedLoginScreen";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
/*using Ellipse and ClipPath we will make our background image seen rounded*/
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring
} from "react-native-reanimated";

import RegisterNow from '../Screens/RegisterNow'

//We use Animated before any UI tag like View or FlatList to make animation in that UI Component by passing animated:true in some events like onPress={...}. To use Animated with any UI component we will have to first import Animated by syntax: import Animated from "react-native-reanimated"; 

//useSharedValue is like a state hook. useSharedValue is a value which is being shared between javascript Threads and UI  and updation to useSharedValue results into animation.

/*We will initialize useSharedValue hook like this 

  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  
  here we have initialize the value of imagePosition useSharedValue int variable to 1 */

  /*useAnimatedStyle is another hook which is associated between useSharedValue and UI component where we have use Animated like Animated.View, Animated.Pressable*/

/*Note that in this AnimatedLoginScreen file we are creating buttons using Pressable tags and not by using TouchableOpacity or Button tags.

Pressable is all-in-one touchable components
Pressable component has all the features of Touchable components. Therefore, we can replace all TouchableOpacity, TouchableHighlight, TouchableNativeFeedback and TouchableWithoutFeedback with a single component.

 The Pressable component is flexible and lets app developers use any feedback animations they wish.*/


import BottomNavigationBtns from './BottomNavigationBtns'
import AppNavigator from './AppNavigator'

export default function AnimatedLoginScreen({navigation}) {
  const { height, width } = Dimensions.get("window");

    let [mobile_no,setMobile_no] = useState('');
let [password,setPassword] = useState('');
 let [result, setResult] = useState([]);
 let [resultsecond, setResultsecond] = useState([]);
 let [resultThird, setResultThird] = useState([]);

  const imagePosition = useSharedValue(1);

/*Note that imagePosition variable is very important in this animation and we will use this imagePosition too much in this file and also note that initial value of imagePosition is 1.*/





  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);

  const [email, changeEmail] = useState('');                                                                               //        const [password, changePassword] = useState('');

  let email_chk_for_login='';
  let password_chk_for_login='';


  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    /*interpolate() is hook which works as terrnery operator which will make our background image seen full when our imagePosition value will be 1 i.e. when our app will start the value of our useSharedValue hook int variable imagePoisition will have value of 1 so the interpolate() hook will return value of 0 and then value will be fetched into transform: parameter i.e. the transform: parameter will get value 0 will  and when we will change the value of our useSharedValue variable imagePosition to 0 on clicking any button like LOGIN or REGISTER then we will change the value of imagePosition to 0 and ,then interpolate() hook will return value of -height/2 into transform: parameter and make our background image looks half of device screen.*/
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],

      /*Note that transform: is also one kind of attibute which will contain another attribute with name translateY.*/

      /*the translateY means to slide up from bottom. The translateY parameter will get value which will be returned by interpolate() hook and once translateY will get its required value from interpolate() hook, then ultimately our value for transform: will also get value since translateY is inside transform: attribute.And this will make our background image move from bottom to top direction since we have use Y axis ie. our image will seen half in horizontal direction and if we use X axis then our image of background will go from right to left direction */
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    /*On changing the background image size by changing the imagePosition from 1 to 0 the trasform: parameter and opacity parameter for buttonsAnimatedStyle will get value of 250 with animation of withYiming of duration which is passed in duration parameter so our animation will be seen held gradually which will take about specified duration miliseconds.
    
    So basically what is happening that when our background image will be fully seen which is the initial scence then the buttonsAnimatedStyle will get opacity of 0 since at that time no buttons will be seen on screen. But when the background image will become half of the screen, i.e. when imagePosition.value will be 0 then buttonsAnimatedStyle will get opacity of 250  */
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  
  
  
  
  
  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);

    /*This above interpolation value will change from 360 to 180 on changing the value of imagePosition from 1 to 0 and this change of 360 to 180 will be returned as value to rotate: parameter which will result in rotation of our x round symbol which comes at boarder of our elipse curve in our background image. */
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),

      /*The above opacity: attribute will be passed value of 0 means to totaly hide the buttons when the background image will be seen fully, so when imagePosition.value will be 1 which will be initially then we will see full background image and we will not see any buttons because we are passing the opacity of 0 to buttons at that time, but when the imagePosition.value will change and it will not be equal to 1 then at that time the opacity of button will be 1 and so we will see our buttons fully. */
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  
  const login = (mobile_no,password) => {
    console.log('Login function executing..');
    //fetch('https://reqres.in/api/posts', requestOptions)
    //fetch('milanjwels.com/sbm/api/login', requestOptions)
    //fetch('https://rajeshwersoftsolution.com/jwelcart/api/login', requestOptions)
    fetch('https://rajeshwersoftsolution.com/jwelcart/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    mobile_no:mobile_no,
    password:password,
    
    
  })
    })
   .then(response => {
    result= response.json()
     result.then(values => {
    console.log(values);
    setResultsecond(values.message);
    setResultThird(values.data);
    })
      navigation.navigate('BottomNavigationTab')                      
     })
                    
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
            Alert.alert('User ID or Password is incorrect')
        });
    
  };
 
  
  
  
  
  
  const formAnimatedStyle = useAnimatedStyle(() => {
    /*This const function formAnimatedStyle will add animation to our form in which all our edit text are like name, email, password. This function will make our form appear on our device screen with delay of 400 miliseconds when the background image will be made half. But if we again make our background image seen full then the form will disapear without any delay within the duration of 300 miliseconds.*/
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  
  
  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    /*This const function formButtonAnimatedStyle will make our button which is seen below our form and that button will rise and shrink when it will be clicked. And to give that effect we will use this functions.*/
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })

  
  
  
  const loginHandler = () => {
    
    imagePosition.value = 0;
    /*here when LOGIN button is pressed then first of all we are changing the value of imagePosition from 1 to 0, so our background image will result into seen half of our device screen*/
    if (isRegistering) {
      //This if() condition will get true when we want to Log In once we have registered     
      //Alert.alert('Your email id  which you have entered is: '+email+' and password is: '+password );
      runOnJS(setIsRegistering)(false);
    
     
    }

//navigation.navigate('BottomNavigationTab');
    

    email_chk_for_login=email;
    password_chk_for_login=password;
    

    
  };

  const verify=()=>{

    if(email==='H' && password==='H')
    {
      
    navigation.navigate('BottomNavigationTab')
    }
    else
    {
      Alert.alert('User ID or Password is incorrect')
    }
  }

  const registerHandler = () => {
    navigation.navigate('RegisterNow')
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
            {/*cx is the position of our x axis and rx is for radius of our ellipse on x axis and ry is for radius of our ellipse on y axis*/}
          </ClipPath>
          <Image
            href={require("../assets/login-background.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
          {/*Here we have passed width+100 and height+100 to stretch our image by 100.*/}
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="black"
            style={styles.textInput}
            //onChangeText={(emailProvidedByUser)=>changeEmail(emailProvidedByUser)}
            onChangeText={(mobileNoProvidedByUser)=>setMobile_no(mobileNoProvidedByUser)}
          />

          
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(passwordProvidedByUser)=>setPassword(passwordProvidedByUser)}
            
          />



        <TouchableOpacity style={styles.button} onPress={()=>login(mobile_no,password)}>
            <Text style={styles.buttonText}>Please Verify</Text>
          </TouchableOpacity>




          
        </Animated.View>
      </View>
    </Animated.View>
  );
}
