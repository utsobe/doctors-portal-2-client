import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>You have selected date: {format(date, 'PP')}</h2>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointments;