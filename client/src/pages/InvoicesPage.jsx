import React, { useEffect, useState } from 'react';
import InvoiceList from '../components/InvoiceList';
import { getAllInvoices } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await getAllInvoices();
            setInvoices(response.data);
        };

        fetchInvoices();
    }, []);

    return (
        <>
            <Header />
            <InvoiceList invoices={invoices} />
            <Footer />
        </>
    );
};

export default InvoicesPage;
