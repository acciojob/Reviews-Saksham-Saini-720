import "../styles/App.css"
import React from "react"
import Review from "./Review"

const App = () =>{
    return (
        <section className="container"> 
            <h1 id="review-heading">Our Reviews</h1>
            <Review/>
        </section>
    )
}

export default App

