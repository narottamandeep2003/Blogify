import React, { useState } from 'react'
import Nav from './Nav'
import Features from './Features';

export default function Profile() {
  const [SelectedFeature, SetSelectedFeature] = useState("Saved");
  const featuresOnClick = (Feature) => {
    SetSelectedFeature(Feature);
  }
  return (
    <>
      <Nav></Nav>
      <div className="ProfileContent">
        <div className="ProfilePageProfileBox">
          <img src="./imgProfile.jpg" alt="" className='ProfilePageProfileimg' />
          <div className="about">
            <span className='ProfilePageName'>Narotta</span>
            <span className='Intro'>I am a devloper</span>
          </div>
        </div>
        <div className="ProfileList">
          <span className={SelectedFeature === "Saved" ? "Profilefeatures ProfilefeaturesTarget" : "Profilefeatures ProfilefeaturesNotTarget"}
            onClick={() => { featuresOnClick("Saved") }}
          >Saved</span>
          <span className={SelectedFeature === "Following" ? "Profilefeatures ProfilefeaturesTarget" : "Profilefeatures ProfilefeaturesNotTarget"}
            onClick={
              () => { featuresOnClick("Following") }}
          >Following</span>
          <span className={SelectedFeature === "Post" ? "Profilefeatures ProfilefeaturesTarget" : "Profilefeatures ProfilefeaturesNotTarget"}
            onClick={() => { featuresOnClick("Post") }}
          >Post</span>

          <span className={SelectedFeature === "Draft" ? "Profilefeatures ProfilefeaturesTarget" : "Profilefeatures ProfilefeaturesNotTarget"}
            onClick={() => { featuresOnClick("Draft") }}
          >Draft</span>
        </div>
        <div className="featuresContainer">
          <Features Target={SelectedFeature}></Features>
        </div>
      </div>
    </>
  )
}
