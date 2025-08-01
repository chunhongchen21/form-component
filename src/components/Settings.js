export default Settings = ({ state, setState }) => {
  const { theme } = state;
  console.log(theme);
  const handleOnChange = (e) => {
    setState((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };

  return (
    <div className="settings-tab">
      <div className="theme-item">
        <label>dark</label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme == "dark"}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div className="theme-item">
        <label>light</label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme == "light"}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
};
