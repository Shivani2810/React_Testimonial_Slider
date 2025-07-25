import React from 'react'

const Testimonials = (props)=>
{
    let reviews=props.review;
    return (
        <div>
            {
                <Card review={reviews[0]}></Card>
            }
        </div>
    )
}