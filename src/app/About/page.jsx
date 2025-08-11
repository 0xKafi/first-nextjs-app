import Link from 'next/link';
import React from 'react';

const page = () => {
    throw new Error("Big Error")
    return (
        <div>
            <Link href='/About/Mission'>Mission</Link>
            <p className='mt-10 h-20 w-100 mx-auto border'>About Page</p>
        </div>
    );
};

export default page;