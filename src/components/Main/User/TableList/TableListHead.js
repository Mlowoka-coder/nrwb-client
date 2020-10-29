import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableListHead = ({ items }) => {
    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                    {items.map((item, id) => (
                        <TableCell>
                            <Typography
                                variant='caption'>
                                <b>{item}</b>
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </React.Fragment>
    );
};

export default TableListHead;