import React from 'react';
import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head'
import RequestCard from '@/components/RequestCard';
import Label from '@/components/Label'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Button from '@/components/Button'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { DateRangePicker } from 'react-date-range';
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { addDays } from 'date-fns';

const Request = () => {
    
    const { request } = useAuth({
        middleware: 'user',
        redirectIfAuthenticated: '/dashboard',
    })
    
    const [reason, setReason] = useState('')
    const [errors, setErrors] = useState([])
    const [date, setDate] = useState('')
    const [state, setState] = useState([
      {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
    ]);
    
    const submitForm = event => {
        event.preventDefault()
        
        register({
            reason,
            setErrors,
        })
    }
    
    return (
        <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Make a vacation request
                </h2>
            }>

            <Head>
                <title>Make a vacation request</title>
            </Head>

            <RequestCard>
                <form onSubmit={submitForm}>
                    {/* Reason for vacation */}
                    <div className="mt-4">
                        <Label htmlFor="reason">Reason for vacation</Label>

                        <Input
                            id="reason"
                            type="text"
                            value={reason}
                            className="block mt-1 w-full"
                            onChange={event => setReason(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.reason} className="mt-2" />
                    </div>

                    {/* Date range picker */}
                    <div className="mt-4">
                        <Label htmlFor="date">Choose Date:</Label>

                        <DateRangePicker
                          onChange={item => setState([item.selection])}
                          showSelectionPreview={true}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          ranges={state}
                          direction="horizontal"
                        />;

                        <InputError messages={errors.date} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4">Request</Button>
                    </div>
                    </form>
                </RequestCard>
        </AppLayout>
    )
}

export default Request