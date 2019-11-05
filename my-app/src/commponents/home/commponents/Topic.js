import  React,{Component} from 'react'
import {TopicWrap,TopicItem} from './../homeStyle'
import  {connect} from 'react-redux'
class Topic extends  Component{
    state ={
        topicList:[]

    };
    render(){
        return(
            <div>
                <TopicWrap>
                    {this.props.topicList.map((item,index)=>{
                        return(
                            <TopicItem key={index}>
                                <img src={item.topicUrl} alt=""/>
                                <span>{item.txt}</span>
                            </TopicItem>
                        )
                    })}
                </TopicWrap>
            </div>
        )
    }
}
const mapState =(state)=>({

    topicList:state.home.topicList
});
export default connect(mapState,null) (Topic)