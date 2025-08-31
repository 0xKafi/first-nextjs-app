import Link from 'next/link';
import React from 'react';

const page = ({params}) => {
    const {id} = params
    return (
        <div>
            <p className='mt-10'>this is user-{id}</p>
            <Link href={`/user/${id}/reviews`}>View Review</Link>
        </div>
    );
};

export default page;