import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from "../home/homeStyle";
import List from "./commponents/List";
import Topic from "./commponents/Topic";
import Sine from "./commponents/Sine";
import Scan from "./commponents/Scan";
import {connect} from 'react-redux'
import axios from  'axios'
import Head from '../head/Head'
import Foot from '../foot/Foot'
class Home extends Component {
    render(){

        return(
            <div>
                <Head/>
              <HomeWrap>
                  <HomeLeft>
                      <img src='//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848' alt=""/>
                      <Topic/>
                      <List/>
                  </HomeLeft>
                  <HomeRight>
                      <Scan/>
                      <Sine/>

                  </HomeRight>
              </HomeWrap>
                <Foot/>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res.data);
                const data=res.data.data;
                const action ={
                    type:'init_home_data',
                    data
                };
                this.props.changeHomeDate(action)
            })
    }
}
const mapDispatch =(dispatch)=>({
changeHomeDate(action){
    dispatch(action)
}
});

export  default connect(null,mapDispatch)(Home)