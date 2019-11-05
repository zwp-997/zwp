import  React,{Component} from 'react'
import {ScanWarp,ScanItem} from './../homeStyle'
import {connect} from "react-redux";
class Scan extends  Component{
    state={
        scanList:[]
    };
    render(){
        return(
            <div>
                <ScanWarp>
                    {this.props.scanList.map((item,index)=>{
                        return(
                            <ScanItem key={index}>

                                    <img src={item.topicUrl} alt=""/>
                                    <p>{item.title}</p>
                            </ScanItem>
                        )
                    })}
                </ScanWarp>
            </div>
        )
    }
}
const mapState =(state)=>({

    scanList:state.home.scanList
});
export default connect(mapState,null)  (Scan)