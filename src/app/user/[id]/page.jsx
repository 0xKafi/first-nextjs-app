import React from 'react';

const page = ({params}) => {
    const {id} =params
    return (
        <div>
            <p className='mt-10'>this is user-{id}</p>
        </div>
    );
};

export default page;