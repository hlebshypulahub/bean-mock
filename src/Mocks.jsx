import React, { Component } from 'react';

import mixedImg from "./mixed.png";
import paperImg from "./paper.png";
import glassImg from "./glass.png";
import bioImg from "./bio.png";
import plasticImg from "./plastic.png";

class Mocks extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          imageClicked: null,
          collectorId: null,
          userId: null,
        };
      }
    
      componentDidMount() {
        const urlParts = window.location.href.split('/');
        const collectorId = urlParts.pop(); // Get the last part of the URL
        const userId = urlParts.pop(); // Get the part before the collectorId
    
        this.setState({ userId });
        this.setState({ collectorId });
      }



//   /api/users/{userId}/collectors/{collectorId}/detectors/{detectorId}] patch. Lets say detectorId 1=GLASS, 2=PLASTICANDMETAL, 3=PAPER, 4=BIO, 5=MIXED
  

  handleImageClick = (imageStr) => {
    let detectorId;
    if (imageStr === "glass") detectorId = 1;
    if (imageStr === "plastic") detectorId = 2;
    if (imageStr === "paper") detectorId = 3;
    if (imageStr === "bio") detectorId = 4;
    if (imageStr === "mixed") detectorId = 5;

    const postData = {
      userId: this.state.userId,
      collectorId: this.state.collectorId,
      detectorId
    };

    // http://localhost:8000
    fetch(`https://hackyeah-back-production.up.railway.app/api/users/${this.state.userId}/collectors/${this.state.collectorId}/detectors/${detectorId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div>
        <div>
        <img
          src={plasticImg}
          alt="Plastic"
          onClick={() => this.handleImageClick("plastic")}
        />
        </div>
        <div>
        <img
          src={glassImg}
          alt="Glass"
          onClick={() => this.handleImageClick("glass")}
        />
        </div>
        <div>
        <img
          src={paperImg}
          alt="Paper"
          onClick={() => this.handleImageClick("paper")}
        />
        </div>
        <div>
        <img
          src={mixedImg}
          alt="Mixed"
          onClick={() => this.handleImageClick("mixed")}
        />
        </div>
        <div>
        <img
          src={bioImg}
          alt="Bio"
          onClick={() => this.handleImageClick("bio")}
        />
        </div>
      </div>
    );
  }
}

export default Mocks;