const redux=require('redux')
const createStore=redux.createStore
//when there is deep nested state using this method of updating is difficult and there is a library to simplify this and we can use it 
// npm install immer
const produce=require('immer').produce
const UPATE_CITY='UPDTE_CITY'
const initialState={
    name:"Mequannt",
    address:{
        street:"123 street",
        city:"Addis Ababa",
        state:"Ethipia"
    }
}


// Action creator
const updateCity = (city) => {
  return {
    type: UPATE_CITY,
    payload: city
  }
}
//I want to update the city only
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case UPATE_CITY:
            return{
                ...state,
                address:{
                    ...state.address,
                    city:action.payload
                }
    }
    default:
        return state
    
    }
    //use produce intead the above
    // return produce(state,(draftState)=>{
    //     draftState.address.city=action.payload
    // })
}
const store=createStore(reducer)
console.log('initail state',store.getState())
const unSubscribe=store.subscribe(()=>{
    console.log('update state',store.getState())
})
store.dispatch(updateCity ('Bahir Dar'))
store.dispatch(updateCity ('Gonder'))
store.dispatch(updateCity ('Hawwasa'))
unSubscribe()