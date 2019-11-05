
const defaultState ={
    topicList:[],
    list:[],
    scanList:[],
    sineList:[]


};
export  default (state =defaultState,action)=>{
   if(action.type==='init_home_data'){
       const   newState=JSON.parse(JSON.stringify(state));
       newState.topicList =action.data.topicList;
       newState.list =action.data.list;
       newState.scanList =action.data.scanList;
       newState.sineList =action.data.sineList;
       return newState;
   }
    return state
}