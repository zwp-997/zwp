// defaultState 是清单，是vuex中state
const defaultState = {
    flag: false
}

export default (state = defaultState, action) => {
    // console.log(action)
    // 先判断事件的类型再处理
    // if (action.type === 'input_focus') {
    //     // state 是只读的,不能直接去改动state,把它深拷贝出来一份再改动
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.flag = true
    //     // 改变过数据之后,返回新数据,通过store传递给组件进行视图变动
    //     return newState
    // } else if (action.type === 'input_blur') {
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.flag = false
    //     return newState
    // }
    const newState =JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'input_focus':
            newState.flag=true;
            return newState;
        case 'input_blur':
            newState.flag=false;
            return newState;
        default:
            return state

    }
}