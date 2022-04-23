import React, { useState, useRef } from "react";
import { Link, Router } from "react-router-dom";
import "bootstrap";
import "../../css/Profile.scss";

export default function Profile() {
  const [profileImg, setImg] = useState("defaultProfile.jpg");
  const fileInput = useRef(null);
  const [nickName, setNick] = useState("닉네임을 설정해주세요");
  const [rate, setRate] = useState(3.3);
  const percent = rate * 20;

  //프로필 사진 변경 함수
  const onChange = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    await axios.post(`${process.env.REACT_APP_BASE_URL}/mypage/img`,
        {img : profileImg})
  };

  return (
    <div className="profile">
      <img
        className="profileImg"
        src={profileImg}
        onClick={() => {
          fileInput.current.click();
        }}
      />
      <input
        type="file"
        name="profileImageUpload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={onChange}
        ref={fileInput}
      />

      <div className="userInfo">
        <span className="nick">{nickName}</span>

        <div className="star-ratings">
          <div className="star">
            <div
              className="fill-star space-x-2"
              style={{ width: `${percent}%` }}
            >
              <img src="fullStar.png" />
              <img src="fullStar.png" />
              <img src="fullStar.png" />
              <img src="fullStar.png" />
              <img src="fullStar.png" />
            </div>
            <div className="empty-star space-x-2">
              <img src="emptyStar.png" />
              <img src="emptyStar.png" />
              <img src="emptyStar.png" />
              <img src="emptyStar.png" />
              <img src="emptyStar.png" />
            </div>
          </div>
          <span>{rate}점</span>
        </div>
      </div>

      <Link to="/withdraw">
        <button type="button" className="btn btn-danger">
          회원탈퇴
        </button>
      </Link>
    </div>
  );
}
