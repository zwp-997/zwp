import React from 'react';
import  {FootWrap,FootAll,FootLeft,FootCenter,FootRight} from "./footStyle";

function Foot() {
return(
    <div >

        <FootWrap>
            <FootAll>
                <FootLeft>
                    <div>
                        <img src={require('./../../static/logo.jpg')} alt=""/>
                        <p>
                            青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料
                            ，控制甲醛低量无害，采用进口工艺， 国际生产线不断优化，食材保证核心原产地新鲜直供 ，让你享受品质生活
                        </p>
                    </div>
                </FootLeft>
                <FootCenter>
                 <div>
                     <img src={require('./../../static/wb1.jpg')} alt=""/>
                     <img src={require('./../../static/wb2.jpg')} alt=""/>
                 </div>
                </FootCenter>
                <FootRight>
                    <ul>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                    </ul>
                    <ul>
                        <li>支付方式</li>
                        <li>支付方式</li>
                        <li>支付方式</li>
                        <li>支付方式</li>
                        <li>支付方式</li>
                    </ul>
                    <ul>
                        <li>相关服务</li>
                        <li>相关服务</li>
                        <li>相关服务</li>
                        <li>相关服务</li>
                        <li>相关服务</li>
                    </ul>
                </FootRight>
            </FootAll>

        </FootWrap>
    </div>
    )

}
export default  Foot