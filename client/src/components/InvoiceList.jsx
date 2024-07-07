import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const InvoiceList = ({ invoices }) => {
    const printInvoice = (invoice) => {
        const doc = new jsPDF();
        doc.text("Invoice Details", 20, 20);
        doc.autoTable({
            head: [['Vendor', 'Product', 'Amount', 'Date', 'Status']],
            body: [
                [invoice.vendor, invoice.product, invoice.amount, invoice.date, invoice.action],
            ],
        });
        doc.save(`invoice_${invoice.id}.pdf`);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell>{invoice.vendor}</TableCell>
                            <TableCell>{invoice.product}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.action}</TableCell>
                            <TableCell>
                                <Button onClick={() => printInvoice(invoice)}>Print</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default InvoiceList;
