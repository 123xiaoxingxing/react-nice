import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';





import Home from './home/home.component.jsx';
import Navigation from './navigation/navigation.component.jsx';
import My from './my/my.component.jsx';
import Remark from './remark/remark.component.jsx';
import Store from './store/store.component.jsx';



class Routing extends Component {

   
    render() {

        return(
            <HashRouter>
            <div style={{height:'100%'}}>
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route path="/my"  component={My}/>
                    <Route path="/remark" component={Remark}  />
                    <Route path="/store"  component={Store}/>
                 </main>
                <Navigation />
            </div>
          </HashRouter>
        )
    }
}
export default Routing