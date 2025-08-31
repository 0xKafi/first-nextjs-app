import React from 'react';

const page = ({params}) => {
    const {reviewId} = params
    console.log(params)
    return (
        <div>
            <p>its came here {reviewId}</p>
        </div>
    );
};

export default page;