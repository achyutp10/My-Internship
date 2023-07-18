import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: "https://cdn-icons-png.flaticon.com/512/66/66841.png",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://www.ikea.com/images/a1/f3/a1f3a28f8295be2e6093c49327aa3ca3.jpg?f=s",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img: "https://clipart-library.com/images/8ixngkjBT.jpg",
    backdrop: "#E5F3F3",
    inactive_img: "https://clipart-library.com/images/rijGgkqrT.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_adqeufyGMHGbFxS6BDroMyGbIB55eLh1w&usqp=CAU",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYznm8uwiuddifEj_fgLZhu-fSY4c2lgGCB0U04otk_ODon4ZLBtNQJZB2gg4Y9WOXNC8&usqp=CAU",
  },
];
const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`tab-item absolute-center cur-po ${
                activeTab === tab.name && "active-tab"
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundcolor: `${
                    activeTab === tab.name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === tab.name ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.name}
                  className="tab-image"
                  // style={{
                  //   height: "60px",
                  //   width: "60px",
                  //   borderRadius: "50%",
                  // }}
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabOptions;
