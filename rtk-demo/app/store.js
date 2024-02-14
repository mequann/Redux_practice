//in RTK we use configurestore to create store instead createstore methode
const configurestore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../featurs/cake/cakeSlice')
const store=configurestore({
    reucers:{
        cake:cakeReducer
    }
})
module.exports=store