import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import Typography from '@material-ui/core/Typography';


const Table = ({ data, columns, title, detailPanel,actions=null }) => {
    return (
        <React.Fragment>
            <div
                style={{
                    maxWidth: '100%',
                    overflowY: 'auto',
                    height: '448px',
                    border: 'none',
                }}>
                <MaterialTable
                    style={{
                        boxShadow: 'none',
                        border: 'none'
                    }}
                    options={{
                        pageSizeOptions: [5],
                        showFirstLastPageButtons: false,
                        search: true,
                        sorting: true,
                        headerStyle: {
                            fontWeight: 'bold',
                            fontSize: '0.75rem',
                        },
                        rowStyle: {
                            fontSize: '0.75rem',
                            fontFamily: 'Roboto, Helvetica,Arial,sans-serif'
                        }
                    }}
                    onRowClick={() => { return }}
                    columns={columns}
                    data={data}
                    icons={TableIcons}
                    detailPanel={detailPanel}
                    title={
                        <React.Fragment>
                            <Typography variant='subtitle1'>
                                {title}
                            </Typography>
                            <hr />
                        </React.Fragment>
                    
                    } 
                    actions={actions}/>
            </div>
        </React.Fragment>
    );
};

export default Table;