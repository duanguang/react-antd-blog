import * as React from 'react';
import { Pagination } from 'antd';
import FilterPropsComponent from "../abstract/FilterPropsComponent";
export default class VPagination extends FilterPropsComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const newProps = super.getFilterProps();
        return (React.createElement(Pagination, React.__spread({}, newProps)));
    }
}
