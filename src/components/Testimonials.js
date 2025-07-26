import React from 'react'
import Card from './Card'

const Testimonials = (props)=>
{
    let reviews=props.review;
    const[index,setIndex]=useState(0);

    function leftShiftHandler()
    {
      if(index-1<0)
      {
        setIndex(reveiews.length-1)
      }
      else{
        setIndex(index-1);
      }
    }
    function rightShiftHandler()
    {
      if(index+1>=reviews.length)
      {
        setIndex(0)
      }
      else{
        setIndex(index+1);
      }
    }

    function surpriseHandler()
    {
        // to create some random index\
        
        let randomIndex=Math.floor(Math.random()* reviews.length());
        setIndex(randomIndex)
    }
    return (
        <div>
            
                <Card reviews={reviews[0]}></Card>

            <div onClick={leftShiftHandler}><FaQuoteLeft/></div>

            <div onClick={surpriseHandler }>
                {reviews.text}
            </div>

            <div on Click={rightShiftHandler}>
                <FaQuoteRight/>
            </div>
            
        </div>
    )
}
export default Testimonials         