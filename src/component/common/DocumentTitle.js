import * as React from 'react';
import withSideEffect from 'react-side-effect';
import { WXUtil } from '../../utils/wexin';
class DocumentTitle extends React.Component {
    render() {
        if (this.props.children) {
            return React.Children.only(this.props.children);
        }
        else {
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
export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(DocumentTitle);
