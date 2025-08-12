import Link from 'next/link';
import React from 'react';

const page = () => {
    const userData = [
        {
            id : 1,
            name : 'kafi'
        },
                {
            id : 2,
            name : 'mafi'
        },
                {
            id : 3,
            name : 'safi'
        },
    ]
    return (
        <div className='mt-10'>
            blog page
            {userData.map((user)=>
                <li key={user.id}>
                    <Link href={`/user/${user.id}`}>{user.name}</Link>
                </li>
            )}
        </div>
    );
};

export default page;