import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const Card=(props)=>{

    // one card will have will have one review only!

    let review=props.review;
    return(
        <div>
            <div>
                <img src={review.image}/>
            </div>

            <div>
                 <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div><FaQuoteLeft/></div>

            <div>
                {review.text}
            </div>

        </div>
    )
}