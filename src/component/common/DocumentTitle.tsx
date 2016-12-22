/**
 * Created by DuanG on 2016/12/19.
 */
import * as React from 'react';
import  withSideEffect from 'react-side-effect';
import {WXUtil} from '../../utils/wexin';
export interface IDocumentTitleProps {
    title: string;
}

class DocumentTitle extends React.Component<IDocumentTitleProps,void> {
    render() {
        if (this.props.children) {
            return React.Children.only(this.props.children);
        } else {
            return null;
        }
    }
}

function reducePropsToState(propsList) {
    var innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.title;
    }
}

function handleStateChangeOnClient(title) {
    var nextTitle = title || '';
    if (nextTitle !== document.title) {
        WXUtil.setWxTitle(nextTitle);
    }
}

export default withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
)(DocumentTitle);