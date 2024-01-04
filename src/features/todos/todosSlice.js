import {createSlice,} from '@reduxjs/toolkit';






const todosSlice=createSlice({
name:'todos_AnyNameForOurSlice_NoMatterWhat',
initialState:[],

reducers:{

    
    
    
    


 
addProduct(state=[],action){
    return [...state, action.payload];
  },

 
 
 
  deleteProductFromCart(state=[],action){
   const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deleteArray;
  }, 
 
 
 
 
 
 
 
  
  
 
 
  },//reducers ends here

});

export const {addProduct,deleteProductFromCart}=todosSlice.actions


/* Here in the slice file of Redux we have to export two things, 

1. Reducer functions  i.e. say addTodo and we will specify it as our slice.js name . actions which is here in this example todosSlice.actions & 


2. Slice file name which hold return value of createSlice() and we will specify it as our slice.js name . reducer which is here in this example todosSlice.actions 

Note that the const which will hold returned value of createSlice() function should be same as the file name in which createSlice() function is used, i.e. our file name is todosSlice.js and our const which will hold returned value of createSlice() name is also todosSlice which is standard method of using this slice in redux.*/

export default todosSlice.reducer