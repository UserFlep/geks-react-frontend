import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable, {ColumnDescription} from 'react-bootstrap-table-next';
// @ts-ignore
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// @ts-ignore
import paginationFactory from 'react-bootstrap-table2-paginator';
import AppSpinner from "./AppSpinner";

const StatisticTable = ({dataArray}:any) => {
    const columns: ColumnDescription[] = [{
        dataField: 'id',
        text: 'Ид',
        sort: true
    }, {
        dataField: 'target',
        text: 'Полная ссылка',
        sort: true,
        style: {
            // whiteSpace: 'nowrap',
            // textOverflow: 'ellipsis',
            // overflow: 'hidden',
            overflowWrap: 'break-word'
        },
        filter: textFilter({placeholder: 'Поиск...'})
    }, {
        dataField: 'short',
        text: 'Короткая ссылка',
        formatter: (cell:any)=>`${String(process.env.REACT_APP_API_HOST)}/s/${cell}`,
        sort: true
    }, {
        dataField: 'counter',
        text: 'Количество переходов',
        sort: true,
    }];

    return (
        dataArray ?
            <BootstrapTable
                keyField='id'
                data={ dataArray }
                columns={ columns }
                pagination={paginationFactory()}
                filter={ filterFactory() }
                filterPosition="top"
            />
            :
            <AppSpinner/>
    );
};

export default StatisticTable;



