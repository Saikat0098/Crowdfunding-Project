import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
   
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);  
  }, [theme]);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light";
    setTheme(selectedTheme);
  };

  return (
    <label className="flex cursor-pointer gap-2 items-center">
      <span className="label-text">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleThemeChange}
        className="toggle theme-controller"
      />
    </label>
  );
};

export default ThemeToggle;
