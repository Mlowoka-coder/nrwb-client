import React from 'react';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableListHead = ({ items }) => {
    return (
        <React.Fragment>
                <TableRow>
                    {items.map((item, id) => (
                        <TableCell>
                            <Typography
                                variant='caption'>
                                {item}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
        </React.Fragment>
    );
};

export default TableListHead;