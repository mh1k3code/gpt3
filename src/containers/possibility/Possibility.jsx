import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'; 

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding " id="posibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradiet__text">The possibilities are beyond your imagination </h1>
        <p>Yet bed Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi fugiat voluptate unde quo mollitia placeat, laudantium qui quaerat, consequuntur dignissimos obcaecati, ratione praesentium blanditiis molestias autem? Ad, laboriosam quia!</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
