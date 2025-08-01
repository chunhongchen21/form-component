import { useEffect } from "react";

export default Profile = ({ state, setState, error, isError }) => {
  const { name, age, email } = error;
  const handleInputChange = (e, filed) => {
    setState((prev) => ({
      ...prev,
      [filed]: e.target.value,
    }));
  };
  useEffect(() => {
    if (isError()) {
      console.log("there is an error");
    }
  }, [state]);
  return (
    <div className="profile-tab">
      <div className="input-item">
        <span>name: </span>
        <input
          type="text"
          value={state.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
      </div>
      <div className="input-error">{name}</div>
      <div className="input-item">
        <span>age: </span>
        <input
          type="number"
          value={state.age}
          onChange={(e) => handleInputChange(e, "age")}
        />
      </div>
      <div className="input-error">{age}</div>
      <div className="input-item">
        <span>email: </span>
        <input
          type="text"
          value={state.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
      </div>
      <div className="input-error">{email}</div>
    </div>
  );
};
