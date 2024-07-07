import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from '@mui/material';
import Invoices from '../components/Invoices';
import AddInvoice from "../components/AddInvoice";
import { getAllInvoices, deleteInvoice } from "../services/api";

const Home = () => {
    const [invoices, setInvoices] = useState([]);
    const [addInvoice, setAddInvoice] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getAllInvoices();
                if (response?.data) {
                    setInvoices(response.data);
                }
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };
        getData();
    }, [addInvoice]);

    const removeInvoice = async (id) => {
        try {
            await deleteInvoice(id);
            const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
            setInvoices(updatedInvoices);
        } catch (error) {
            console.error('Error deleting invoice:', error);
        }
    };

    const toggleInvoice = () => {
        setAddInvoice(true);
    };

    return (
        <Box style={{ margin: 20 }}>
            <Typography variant="h4">Pending Invoices</Typography>
            {
                !addInvoice && 
                    <Button 
                        variant="contained" 
                        onClick={toggleInvoice}
                        style={{ marginTop: 15 }}
                    >Add Invoice</Button>
            }
            {
                addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />
            }
            <Box>
                <Invoices 
                    removeInvoice={removeInvoice}
                    invoices={invoices}
                />
            </Box>
        </Box>
    );
};

export default Home;
