const redux=require('redux')
const createStore=redux.createStore
const bindActionCreators=redux.bindActionCreators
const ORDER_CAKE='ORDER_CAKE'
const CAKE_RESTORED='CAKE_RESTORED'
const ICECREAM_ORDER='ICECREAM_ORDER'
const ICECREAM_RESTORED='ICECREAM_RESTORED'
//action creater 
const orderCake=()=>{
    return{
        type:ORDER_CAKE,
        info:'orderd cake'
    }
}
//action for cakerestore
function cakeRestore(qnt=1){
    return{
        type:'CAKE_RESTORED',
        payload:qnt
    }
}
//action for icecream
const icecreamOrder = (qty=1) => {
    return {
        type: ICECREAM_ORDER,
        payload: qty
    }
}
//action for icecreamrestore
const icecreamRestore = (qty=1) => {
    return {
        type: ICECREAM_RESTORED,
        payload: qty
    }
}

const icecreamRestored = (quantity = 1) => {
    return {
        type: ICECREAM_RESTORED,
        payload: quantity
    }
}
const initialState={
    numOfCakes:10,
    //lets us add others state
    numbersOfIcecream:20
}
//reducer: we can split the reducer and state for larger app
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        case CAKE_RESTORED:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload
            }
        case ICECREAM_ORDER:
            return{

                ...state,
                numbersOfIcecream:state.numbersOfIcecream-1
            }
        case ICECREAM_RESTORED:
            return{
                ...state,
                numbersOfIcecream:state.numbersOfIcecream+action.payload
            }
        default:
            return state
    }
}
//create store
const store=createStore(reducer)
console.log('Initial state',store.getState())
const unSubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState())
})
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(cakeRestore(3))
// store.dispatch(icecreamOrder())
// store.dispatch(icecreamOrder())
// store.dispatch(icecreamRestored(3))


//alternatively we can implement the above using action binder

const action=bindActionCreators({orderCake,cakeRestore,icecreamOrder,icecreamRestore},store.dispatch)
action.orderCake()
action.orderCake()
action.cakeRestore(3)
action.icecreamOrder()
action.icecreamOrder()
action.icecreamRestore(3)

unSubscribe()
