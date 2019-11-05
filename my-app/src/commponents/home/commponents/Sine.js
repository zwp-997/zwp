import  React,{Component} from 'react'
import {SineWarp,SineItem} from './../homeStyle'
import {connect} from "react-redux";
import src from './../../../static/wb1.jpg'

class Sine extends  Component{
    state={
        sineList:[]
    }

    render(){
        return(
            <div>
                <SineWarp>
                   <div className={'top'}>
                       <ul>
                           <li><img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/></li>
                           <li><img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/></li>
                       </ul>
                   </div>
                    {this.props.sineList.map((item,index)=>{
                        return(
                            <SineItem key={index}>
                                    <p>{item.title}</p>
                            </SineItem>
                        )
                    })}
                </SineWarp>
            </div>
        )
    }
}

const mapState =(state)=>({

  sineList:state.home.sineList
});
export default connect(mapState,null) (Sine)