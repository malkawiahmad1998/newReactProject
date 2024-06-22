import React, { useEffect } from "react"
import '../Css/card.css'
import { useNavigate } from "react-router-dom"



function Card(){

    const items = 
        [
            {name:'Ahmad',age:26,height:180,weight:74}
        ]

    const navigate = useNavigate();
    var readMore = (item) =>{
       
        var query = new URLSearchParams(item).toString();
        navigate(`/readmore?${query}`)


    }


    const listItems = items.map(item=>(
        <div className="card-content">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-description">{item.age}</p>
        <p className="card-description">{item.weight}</p>
        <a href="#" className="card-button">{item.height}</a>
        <button className="styled-button" onClick={()=>{
                readMore(item);
        }
        }>read more</button>

    </div>
        )
    )


    return(
        <div className="card">
            <div className="card-content">
                {/* {listItems} */}
            </div>
        </div>
    );
}

export default Card;
