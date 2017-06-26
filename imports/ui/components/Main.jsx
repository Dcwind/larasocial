import React, {Component} from 'react';
import StatusBar from './StatusBar';
import Posts from '../post/Posts';
import Ads from '../ads/Ads';

export default class Main extends Component{
    render(){
        var adObj = {_id:1,text:'My First Ad',title:'Some Company',image:'http://placehold.it/150x150'};
        return(
            <div className="col-sm-9 col-sm-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9"> 
                                <StatusBar/>
                                <Posts/>
                                <button className="btn btn-md">More</button>
                            </div>
                            <div className="col-sm-3"> 
                                <Ads ad={adObj}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}