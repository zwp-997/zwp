import  styled from  'styled-components'
import logo from './../../static/logo.jpg';
export  const HeadWrap =styled.div`
width: 100%;
height: 70px;
background: #CCCCCC;

`;
export  const Logo  =styled.div`
width: 140px;
height: 70px;
background: url(${logo})  no-repeat;
background-size: cover;
float: left;
margin-left: 50px;
`;
export  const  Nav =styled.div`
 width: 100px;height: 100%;
font-size: 30px;
color: #2b542c;
 float: left;
 margin-left: 50px;
 text-align: center;
 line-height: 70px;
 
`;
export const Serch =styled.div`
float: right;
position: relative;
margin-right: 40px;
span{position: absolute;top: 25px;right: 20px}
`
export const Ipt =styled.input.attrs({placeholder:'搜索'})`
width: 200px;
height: 40px;
border-radius: 20px;
box-sizing: border-box;
border:none;
outline: none;
padding-left: 20px;
margin-top: 15px;

&.flag{width: 240px;transition: 1s}

`;
export const  SearchInfo =styled.div`
width: 300px;
height: 70px;
float: right;
line-height: 70px;
text-align: center;
span{font-size: 17px;margin: 15px;color: #4cae4c}
`



