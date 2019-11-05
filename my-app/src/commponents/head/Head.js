import React from 'react';
import  {HeadWrap,Logo,Nav,Ipt,Serch,SearchInfo} from "./headStyle";
import {connect} from 'react-redux'
import * as headActionCreaters from './store/headActionCreates'
import {Link} from "react-router-dom"
function showInfo(flag) {
    if(flag){
        return(
            <SearchInfo>
                <span>手机卖场</span>
                <span>笔记本</span>
                <span>液晶电视</span>
            </SearchInfo>
        )
    }else {
        return null
    }
    
}
function Head(props) {

        return (
            <div>
                <HeadWrap>
                    <Logo/>
                        <Link to='/home'>
                            <Nav>首页</Nav>
                        </Link>
                        <Link to='/details'>
                            <Nav>详情</Nav>
                        </Link>
                    <Serch>
                        <Ipt className={props.flag?'flag':''}
                             onFocus={props.inputFocus}
                             onBlur={props.inputBlur}
                        />
                        <span className={'glyphicon glyphicon-search'}>

                        </span>
                    </Serch>
                    {showInfo(props.flag)}


                </HeadWrap>
            </div>
        )
}
const mapState =(state)=>({

    flag:state.head.flag
});
const mapDispath=(dispatch)=>({
    inputFocus(){
        dispatch(headActionCreaters.handFocus())
        //     const action ={
        //         type:'input_focus'
        //     };
        //     dispatch(action )
        // },
    },


    inputBlur(){
        // const action ={
        //     type:'input_blur'
        // };
        // dispatch(action )
        dispatch(headActionCreaters.handBlur())

    }
});
export default connect(mapState,mapDispath) (Head);


