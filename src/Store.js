import { configureStore } from '@reduxjs/toolkit'
import imported_reducer_functions from './features/todos/todosSlice'
import logger from 'redux-logger';
const my_reducer={
  todosData:imported_reducer_functions,
};

/* Now in store file of Redux we have to first create an object which will take our data name in place of attribute key and value will be the imported reducer from slice file. By creating this object we will link our store data with our reducer functions because the structure is as shown below:

storeDate:reducer_functions,
todosData:imported_reducer_functions,

As you can see in place of our storeData comes todosData and in place of reducer_functions comes imported_reducer_functions

Here in this example we will create an object with name my_reducer and in this object we will name our store data as todosData and in the value we will pass variable name i.e imported_reducer_functions which is holding imported result from our slice file i.e from './features/todos/todosSlice'. 


Now this attribute todosData of object my_reducer will be used at time of fetching data from store and displaying it on screen. I.e. this attribute will be used in our TodoList.js or Products.js file on time of using useSelector() hook like this: 

                   useSelector((state)=>state.todosData);




What is useSelector() hook use for?
useSelector() hook is require to fetch our Data whose state we are maintaining in our Redux store and after fetching that data from store we can show it on display screen.

Does useSelector causes re render?
With useSelector() , returning a new object every time will always force a re-render by default. If you want to retrieve multiple values from the store, you can: Call useSelector() multiple times, with each call returning a single field value.

Can we use multiple useSelector?
Yes we can call useSelector() hook to create a const for useSelector() hook in every .js file where we have to display data from our store .You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux Store.


By doing this above task will complete our first work in our Store.js file which is to link our store data with our reducer function.  

Now our second objective in Store.js file will start which is to pass our reducer object into configureStore() function's attribute reducer. So as shown below we will use configureStore() function which will configure a new store and that configured store will be passed into a const whose name is also store. The configureStore() function require two attributes value 

1. reducer attribute value 
2. devTools attribute value, the devTools attibute value will be kept true

but in reducer attribute value we will pass our created reducer object which is my_reducer. 

Thus our all objectives in store file gets completed by configuring new store and linking our store data with our reducer functions.

 */




/*  
 
 Now to send our Completed task from our Pending task in our Doctor app we will have to use useSelector() hook as shown in this video https://www.youtube.com/watch?v=bJJkrhZ8HSo&t=8s&ab_channel=EngineerCodewala at timestamp of 36:20 minutes.*/



const store=configureStore({
  reducer:my_reducer,
  devTools:true,
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});

/* In Redux Store file we have to use configureStore() method of React-Redux which will create new store with name specified as const and in the configureStore() method we will specify reducer by first creating reducer as const my_reducer={} and once our reducer const is created we have to pass that const in attribute reducer of configureStore() method so our app will get redux ready code in which we will store our data and use it centrally*/

export default store;