//import the store
const store=require('./app/store')
const cakeActions=require('./featurs/cake/cakeSlice').cakeActions
//logg the initialstate
console.log('initial state',store.getState())
const unSubscribe=store.subscribe(console.log('updated state',store.getState()))
store.dispatch(cakeActions.oredred())
store.dispatch(cakeActions.oredred())
store.dispatch(cakeActions.oredred())
store.dispatch(cakeActions.restocked(3))
unSubscribe()