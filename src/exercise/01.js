// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

  //extra-1
// const countReducer=(count,step)=>{
//   return count+step;
// }

function Counter({initialCount = 0, step = 1}) {

   //basic excersise
  // const countReducer=(count,action)=>{
  //   return action.payload;    
  // };
  // const [count,dispatch]=React.useReducer(countReducer,initialCount);
  // const increment = () => dispatch({payload:count + step});  

  //extra-1 accept the step as the action
  // const [count,dispatch]=React.useReducer(countReducer,initialCount);
  // const increment = () => dispatch(step) ;

  //extra-2 simulate setState with an object
  // const countReducer=(state,action)=>({...state,...action});  
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // });
  // const {count} = state;
  // const increment = () => setState({count: count + step});


  //extra-3 simulate setState with an object OR function
  // const countReducer=(state,action)=>({
  //   ...state,
  //   ...(typeof action==='function'?action(state):action)});  
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))


  //extra-4 traditional dispatch object with a type and switch statement
  const countReducer=(state,action)=>{
    switch (action.type){
      case 'INCREMENT':
        return {...state,'count':state.count+action.step};
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
}

  };  
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
