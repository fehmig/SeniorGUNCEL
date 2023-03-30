import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const Star = ({rating}) => {
    const rate = Math.round(rating);

    return (

        <div>
            {
                [...Array(5)].map((_, i) =>
                    (
                        <span>

                            {rate > i ? (<AiFillStar style={{ color: "#26A2F5"}} /> ) : (<AiOutlineStar/>)}
                        </span>

                    )
                )
                    }
        </div>
    )
}

export default Star