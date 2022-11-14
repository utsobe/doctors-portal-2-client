import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex items-center justify-center' style={{
            backgroundImage: `url('${appointment}')`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum alias temporibus quas repellat odio pariatur consectetur atque perferendis doloribus cupiditate quia consequuntur totam mollitia autem eos placeat nostrum earum iusto harum explicabo laboriosam, soluta illum consequatur adipisci! Quae, sint quam!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;