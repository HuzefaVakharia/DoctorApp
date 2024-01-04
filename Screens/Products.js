import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
//Copy image address
import {addProduct} from '../src/features/todos/todosSlice';
import Cart from './Cart';
const image2=require('../images/ten.png');
const data = [
  {
    id:'1',
    name: 'Paracetamol',
    price:30.10,
    image: 'https://thumbs.dreamstime.com/z/paracetamol-568890.jpg',
  },
  {
    id:'2',
    name: 'Asprin',
    price:50.10,
    image:
      'https://c8.alamy.com/comp/B8A7K7/bayer-aspirin-tablets-B8A7K7.jpg',
  },
  {
    id:'3',
    name: 'Diclofenac',
    price:20,
    image: 'https://c8.alamy.com/comp/D8J7BD/diclofenac-sodium-tablets-please-note-this-is-an-image-licensing-site-D8J7BD.jpg',
  },
  {
    id:'4',
    name: 'Vitamine B Complex',
    price:50,
    image: 'https://thumbs.dreamstime.com/b/person-holding-bottle-vitamin-b-complex-person-holding-bottle-vitamin-b-complex-close-up-196602734.jpg',
  },
  {
    id:'5',
    name: 'Cheston Cold',
    price:50,
    image:'https://www.netmeds.com/images/product-v1/600x600/303853/cheston_cold_tablet_10s_488307_1_8.jpg',
  },
  {
    id:'6',
    name: 'Glucose Injection',
    price:100,
    image:
      'https://image.made-in-china.com/202f0j00mnItvFbhQLoA/Glucose-Injection-10-.jpg',
  },
  {
    id:'7',
    name: 'Azithromycin-250mg',
    price:80,
    image:
      'https://c8.alamy.com/comp/2BA97C6/azithromycin-250mg-film-coated-tablets-macrolides-antibiotics-photo-only-no-product-sent-uk-2BA97C6.jpg',
  },
  {
    id:'8',
    name: 'Amoxicillin-500mg',
    price:70,
    image:
      'https://c8.alamy.com/comp/KP9KA6/colour-coded-capsules-of-anti-biotic-medicine-amoxicillin-500mg-and-KP9KA6.jpg',
  },
];
const Products = ({navigation}) => {
  

  const dispatch = useDispatch();

  const addItem = item => {
    dispatch(addProduct(item));
  };

  const items = useSelector(state => state.todosData);
  let addedItems = [];
  addedItems = items;



  const getTotalQuantity = (addedItems) => {
    let total = 0
   
    return total
  }




  return (
    <SafeAreaView style={{flex: 1,marginTop:35,}}>
      <View style={{flex: 1}}>
       
       {/*Code for showing how many items we selected in round icon with bag image STARTS here  */}
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, marginLeft: 20, fontWeight: '800'}}>
            Buy 
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#b3ffd9',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 20,
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../images/bag.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '800'}}>
              {addedItems.length}
            </Text>
          </TouchableOpacity>
        </View>
       
       {/*Code for showing how many items we selected in round icon with bag image ends here  */}
       {/*Now we will code for our FlatList Down here  */}
       
       
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderWidth: 0.2,
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
                      backgroundColor: 'green',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      addItem(item);
                    }}>
                    <Text style={{color: '#fff'}}>Add to Cart</Text>
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
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
