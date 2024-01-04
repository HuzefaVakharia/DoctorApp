import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React,{useState,useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {deleteProductFromCart,cartReducer} from '../src/features/todos/todosSlice';


const Cart = ({navigation}) => {
 // const navigation = useNavigation();
 let [total, setTotal] = useState(0);
  let items = useSelector(state => state.todosData);
   
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(deleteProductFromCart(index));
  };








function Totals()
 {
  //let [total, setTotal] = useState();
  useEffect(() =>
  {
    let result=items.reduce((sum,item)=>sum+item.price,0);
    console.log('Result is:'+result);
    
    
   setTotal(result.toFixed(2));
  },[]);
  return (
   <View style={ styles.cartLineTotal }>
    <Text style={ [styles.lineLeft, styles.lineTotal] }>Total</Text>
    <Text style={ styles.lineRight }>Rs.{total}</Text>
   </View>
  );
 }




  return (
    <SafeAreaView style={{flex: 1,marginTop:5,}}>
      <View style={{flex: 1,marginTop:5,}}>
        <View
          style={{
            width: '100%',
            height: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          
        </View>
        <FlatList
          data={items}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text>{item.name}</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Rs.
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'red',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      removeItem(index);
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 100,
                    height: 90,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                />
              </View>
            );
          }
          
          }
          ListFooterComponent={ Totals }
          
        />


        
      </View>
      <View style={styles.annouc}>
<Text style={styles.anncText}>Please confirm your order and checkout your cart.</Text></View>
      <View><Text>Total Price:{total}</Text></View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
 cartLine: {
  flexDirection: 'row',
 },
 cartLineTotal: {
  flexDirection: 'row',
  borderTopColor: '#dddddd',
  borderTopWidth: 1
 },
 lineTotal: {
  fontWeight: 'bold',
 },
 anncText:{
        textAlign: 'center',
        color: '#fff'  
    },
 lineLeft: {
  fontSize: 20,
  lineHeight: 40,
  color: '#333333'
 },
 annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
 lineRight: {
  flex: 1,
  fontSize: 20,
  fontWeight: 'bold',
  lineHeight: 40,
  color: '#333333',
  textAlign: 'right',
 },
 itemsList: {
  backgroundColor: '#eeeeee',
 },
 itemsListContainer: {
  backgroundColor: '#eeeeee',
  paddingVertical: 8,
  marginHorizontal: 8,
 },
});
