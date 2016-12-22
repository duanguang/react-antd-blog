/**
 * Created by DuanG on 2016/12/13.
 */
import * as React from 'react';
import 'public/css/style.css';
import {PromiseState} from "../../utils/redux";
import CateItemList from "./CateItemList";
import ContentItemList from "./ContentItemList";

interface IIndexStateProps {

}

export default class Index extends React.Component<void,void> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main" className="wp uk-grid uk-grid-collapse" style={{maxWidth:"1120px"}}>
                <div className="uk-width-small-1-1 uk-width-medium-1-4 uk-width-large-1-6 posr">
                    <div id="head" data-uk-sticky="{boundary: true,top:80}">
                        <div id="op_head">
                            <div className="uk-panel" id="op_hed">
                                <div className="tx"><a href="/" data-uk-modal><img
                                    src={require('../../public/images/827244201012741428.jpg')}/></a></div>
                                <h1 className="uk-panel-title"><a href="/">笔记</a></h1>
                                <span>铃铛咽,百花凋,人影渐瘦鬓如霜</span>
                                <div className="my uk-grid-collapse uk-grid uk-grid-width-1-3">

                                </div>

                                <CateItemList></CateItemList>
                            </div>

                        </div>
                        <div className="ft uk-hidden-small"><p><a href="/" data-uk-modal>友情链接</a> -
                            <a href="/" target="_black" title="">Theme by React</a></p></div>
                    </div>
                </div>

                {this.props.children ||<ContentItemList/>}


                
            </div>
        )
    }
}