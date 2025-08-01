import { useState, useEffect } from "react";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
export default TabForm = () => {
  const [state, setState] = useState({
    name: "Jenny",
    age: 18,
    email: "chenj3842@gmail.com",
    interests: ["apple", "music", "dance"],
    theme: "dark",
  });
  const [error, setError] = useState({});
  const isErrorForProfile = () => {
    let err = {};
    if (state.name.length < 2 || state.name.length > 12) {
      console.log("Invalid name");
      err.name = "Invalid name";
    }
    if (state.age < 18) {
      err.age = "Age sould be great than 18";
    }
    if (!state.email.includes("@")) {
      err.email = "Please enter a valid email address";
    }
    setError(err);
    return err.age || err.name || err.email;
  };
  const isErrorForInterest = () => {
    let err = {};
    if (state.interests.length < 1) {
      err.interest = "Please select at least one interest";
    }
    setError(err);
    return err.interest;
  };

  const config = [
    {
      name: "profile",
      component: (
        <Profile
          state={state}
          setState={setState}
          error={error}
          isError={isErrorForProfile}
        ></Profile>
      ),
    },
    {
      name: "interests",
      component: (
        <Interests
          state={state}
          setState={setState}
          error={error}
          isError={isErrorForInterest}
        ></Interests>
      ),
    },
    {
      name: "settings",
      component: <Settings state={state} setState={setState}></Settings>,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleNext = () => {
    if (!(isErrorForProfile() || isErrorForInterest())) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (!(isErrorForProfile() || isErrorForInterest())) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmit = () => {
    console.log("submit button clicked");
    console.log(state);
  };

  return (
    <div>
      <div className="tab-container">
        {config.map((tab, index) => (
          <div className="tab-header" onClick={() => handleTabClick(index)}>
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body"> {config[activeTab].component}</div>
      {activeTab > 0 && <button onClick={handlePrev}> prev </button>}
      {activeTab < config.length - 1 && (
        <button onClick={handleNext}>next</button>
      )}

      {activeTab == config.length - 1 && (
        <button onClick={handleSubmit}> submit </button>
      )}
    </div>
  );
};
