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
        <div class="card-content">
        <h2 class="card-title">{item.name}</h2>
        <p class="card-description">{item.age}</p>
        <p class="card-description">{item.weight}</p>
        <a href="#" class="card-button">{item.height}</a>
        <button class="styled-button" onClick={()=>{
                readMore(item);
        }
        }>read more</button>

    </div>
        )
    )

    useEffect(()=>{
        alert('Fith Data')
    },[items])

    return(
        <div class="card">
            <div class="card-content">
                {listItems}
            </div>
        </div>
    );
}

export default Card;
