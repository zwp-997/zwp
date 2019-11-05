// 创建store(服务员),引入创建的方法
import { createStore } from 'redux'
import reducer from './reducer'

// 创建store,并且关联reducer(菜单)
const store = createStore(reducer)

// 公开store
export default store

/*
store 相当于组件和reducer的桥梁,不去处理数据,但是组件派发的事件会通过
store传递给reducer,reducer接收到事件修改过共有数据之后,会把新的state
值先返回给store,由store发送给组件,重新渲染视图
*/