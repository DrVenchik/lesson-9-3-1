import React from "react";
// import "./style.css";

function ProjectList({ projects }) {
  // рандом для Key
  function keyId(max) {
    return Math.floor(Math.random() * max);
  }
  
  return (    
    <div className="item">
      {projects.map((elem) => (
        <button className="item_projects" key={keyId(10000)}>
          <div>          
            <img src={elem.img} alt=""/>
          </div>
        </button>
      ))}
    </div>
  )
}

export default ProjectList;