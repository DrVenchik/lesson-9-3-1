import React from "react";
// import "./style.css";

function ProjectList({ projects }) {
  
  function keyId(max) {
    return Math.floor(Math.random() * max);
  }
  
  
  return (    
    <div className="item">
      {projects.map((elem) => (
        <button className="item_projects" key={keyId(1000)+keyId(100)}>
          <div>          
            <img src={elem.img} alt=""/>
          </div>
        </button>
      ))}
    </div>
  )
}

export default ProjectList;