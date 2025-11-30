import React, { useState } from "react";
import { mockData } from "../data/mockData";

const Review = () =>{

    let [review, setReview] = useState({
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    })

    function prevReview(id){
        if(id>1){
            id--
            let newData = mockData.filter(data => data.id === id)
            console.log(newData)
            setReview(newData[0])
        }
    }

    function nextReview(id){
        if(id<3){
            id = id + 1
            let newData = mockData.filter(data => data.id === id)
            console.log(newData)
            setReview(newData[0])
        }
    }

    function random(id){
        let newId  = Math.floor(Math.random()*4)+1
        if(id != newId){
            let newData = mockData.filter(data => data.id === newId)
            console.log(newData)
            setReview(newData[0])
        }else if(newId == id && newId == 4){
            newId--
            let newData = mockData.filter(data => data.id === newId)
            console.log(newData)
            setReview(newData[0])
        }else if(newId == id && newId == 1){
            newId++
            let newData = mockData.filter(data => data.id === newId)
            console.log(newData)
            setReview(newData[0])
        }
    }

    return(
        <div>
            {/* {mockData.filter(data => data.id === id)} */}
            <div key={review.id} className="review">
                <img src={review.image} alt={review.name} className="person-img"/>
                <h2 className="author" id={"author-"+review.id}>{review.name}</h2>
                <h3 className="job">{review.job}</h3>                
                <p className="info">{review.text}</p>
            </div>
            <button className="prev-btn" onClick={()=>prevReview(review.id)}>Previous</button>
            <button className="next-btn" onClick={()=>nextReview(review.id)}>Next</button>
            <button className="random-btn" onClick={()=>random(review.id)}>surprise me</button>
        </div>
    )
}

export default Review