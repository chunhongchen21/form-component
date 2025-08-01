import { useEffect } from "react";

export default Interests = ({ state, setState, error, isError }) => {
  const { interests } = state;
  const { interest } = error;
  const handleInterestChange = (e, interest) => {
    console.log(e.target.checked, e.target.value);
    setState((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.value]
        : prev.interests.filter((i) => i !== interest),
    }));
    console.log(interests);
  };
  useEffect(() => {
    if (isError()) {
      console.log("There is an error");
    }
  }, [state]);
  return (
    <div className="interest-tab">
      {/* only show the interests which I like */}
      {interests.map((interest) => (
        <label key={interest}>
          <input
            type="checkbox"
            checked={interests.includes(interest)}
            onChange={(e) => handleInterestChange(e, interest)}
          />
          {interest}
        </label>
      ))}
      <div className="input-error">{interest}</div>

      {/* There are lots of interests, and check if it is belongs to my interests */}
      <div className="interest-item">
        <label>apple</label>
        <input
          type="checkbox"
          value="apple"
          onChange={(e) => handleInterestChange(e, "apple")}
          checked={interests.includes("apple")}
        />
      </div>
      <div className="interest-item">
        <label>music</label>
        <input
          type="checkbox"
          value="apple"
          onChange={(e) => handleInterestChange(e, "music")}
          checked={interests.includes("music")}
        />
      </div>
      <div className="interest-item">
        <label>apple</label>
        <input
          type="checkbox"
          value="dance"
          onChange={(e) => handleInterestChange(e, "dance")}
          checked={interests.includes("dance")}
        />
      </div>
    </div>
  );
};
