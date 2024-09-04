import { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [showModal, setshowModel] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("theme");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu"
      ></button>

      <nav>
        <ul className="flex">
          <li>
            <a href="123">About</a>
          </li>
          <li>
            <a href="2313">Article</a>
          </li>
          <li>
            <a href="121">Projects</a>
          </li>
          <li>
            <a href="12">Speaking</a>
          </li>
          <li>
            <a href="545">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        <span className="icon-moon"></span>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cancel"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="ygk">About</a>
            </li>
            <li>
              <a href="gjh">Articles</a>
            </li>
            <li>
              <a href="v">Projects</a>
            </li>
            <li>
              <a href="ghkv">Speaking</a>
            </li>
            <li>
              <a href="fhjv">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
