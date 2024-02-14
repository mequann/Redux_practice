const createSlice=require('@reduxjs/toolkit').createSlice
//using RTK solve 
/**
 no need of many boiler plate codes
 no need of define action type,action object and action creator functions
 no need of switch statement in side the reducer function
 */
const initialState={
    numOfCakes:10
}
const cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        
        oredred:(state)=>{
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.paylload
        }
    }
})
module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions