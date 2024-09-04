import { useState } from "react";
import "./Main.css";

const myproject = [
  { projectTitle: "react project",category: "react",imgPath: "./1.JPG" },
  { projectTitle: "css project",category: "css",imgPath: "./1.JPG" },
  { projectTitle: "java project", category: "java", imgPath: "./1.JPG" },
  { projectTitle: "Typescript project", category: "Type", imgPath: "./1.JPG" },
];

export default function Main() {
  const [currentactive, setcurrentactive] = useState("all");
  const [arr, setArr] = useState(myproject);

const handelcheck =(buttoncategory)=>{
  setcurrentactive(buttoncategory)

  const newArr = myproject.filter((item) => {
          

    return item.category=== buttoncategory;
    });
    setArr(newArr);
}
  return (
    <div className="flex">
      <section className="left-section">
        <button
          onClick={() => {
            setcurrentactive("all");
            setArr(myproject)
          }}
          className={currentactive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handelcheck("css")
          
          }}
          className={currentactive === "css" ? "active" : null}
        >
          HTML$CSS
        </button>
        <button
          onClick={() => {
            handelcheck("java")
          }}
          className={currentactive === "java" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
          handelcheck("react")
          }}
          className={currentactive === "React" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handelcheck("Type")
          }}
          className={currentactive === "Type" ? "active" : null}
        >
          Typescript
        </button>
      </section>
      <section className="flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>

                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  distinctio consequatur quod! Dignissimos deserunt voluptate
                  quis odit unde quam quisquam deleniti, a, laudantium ea
                  quibusdam fugiat. Dignissimos rerum quidem nulla.
                </p>

                <div className="flex icons">
                  <div className="flex">
                    <div className="icon icon-link"></div>
                    <div className="icon icon-github"></div>
                  </div>
                  <a className="link" href="545">
                    <span className="icon icon-envelope"></span>
                    more
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
