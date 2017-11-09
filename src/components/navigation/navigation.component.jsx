import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom';
import './index.css';
class Navigation extends Component {
    render(){
        return(
            <div className="Navigation">
                <div id="navbar" className=" navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="col-xs-3">
                            <span className="glyphicon glyphicon-home"></span>
                            <NavLink to="/">首页</NavLink></li>
                        <li className="col-xs-3">
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                            <NavLink to="/store">商城</NavLink></li>
                        <li className="col-xs-3">
                            <span className="glyphicon glyphicon-star-empty"></span>
                            <NavLink to="/remark">点评</NavLink></li>
                        <li className="col-xs-3">
                            <span className="glyphicon glyphicon-user"></span>
                            <NavLink to="/my">我的</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Navigation