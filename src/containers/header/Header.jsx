import React from 'react';
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Lets build something special with GPT3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing . Not thoughts all exercise blessing
          , Indulgence way everything joy alteration boisterous the attachment . Party we years to order allow asked for
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1600 people requested access </p>
        </div>
      </div>
      <div className="gpt3__header-image">
       <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
