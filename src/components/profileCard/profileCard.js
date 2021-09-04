import React from "react";
import ProfilePic from "../../assets/images/sample-profile-pic.webp";
import SettingIcon from "../../assets/icons/settings.svg";
import "./profileCard.scss";

/**
 * Profile Card
 *
 * @classdesc Renders the user profile details and action items.
 */
const ProfileCard = () => {
  return (
    <div className="profile-card flex-center">
      <div className="image-wrapper">
        <img className="profile-pic" src={ProfilePic} alt={"profile-img"} />
        <div className="setting flex-center">
          <img width={20} height={20} src={SettingIcon} alt="setting" />
        </div>
      </div>
      <h2 className="name">Martha Blair</h2>
      <p className="title">Developer</p>
    </div>
  );
};

export default ProfileCard;
