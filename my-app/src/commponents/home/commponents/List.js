import  React,{Component} from 'react'
import {ListWarp,ListItem} from './../homeStyle'
import {connect} from 'react-redux'

class List extends  Component{
    state={
        list:[]
    }
   render(){
       return(
           <div>
               <ListWarp>
                   {this.props.list.map((item,index)=>{
                       return(
                           <ListItem key={index}>
                           <img src={item.imgUrl} alt=""/>
                           <div>
                           <h3 >{item.txt}</h3>
                       <p>{item.desc}</p>
                       </div>
                   </ListItem>
                       )
                   })}

               </ListWarp>
           </div>
       )
   }
}
const mapState =(state)=>({

    list:state.home.list
});
export default connect(mapState,null) (List)