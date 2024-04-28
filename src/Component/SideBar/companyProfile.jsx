import * as React from "react";
import "../../Styles/SideBar/CompanyProfile.css";

function CompanyProfile() {
  return (
    <div className="profile">
      <img
        src="https://pbs.twimg.com/profile_images/595945451880341504/rhKb__Ou_400x400.jpg"
        alt="profile"
        className="profile--image"
      />
      <div className="profile--details">
        <h3 className="profile--name">
          Amsafe <span>Bridport</span>
        </h3>
        <p className="profile--tag">Aviation and Aerospace</p>
      </div>
    </div>
  );
}

export default CompanyProfile;
