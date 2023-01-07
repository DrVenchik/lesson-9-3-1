import React from "react";
// import "./style.css"

function Toolbar({ filters, selected, onSelectFilter }) {
  const sectionRef = React.useRef();

  React.useEffect(() => {
    document.getElementById(filters[0]).classList.add("active");
  }, [])
  
  React.useEffect(() => {
    

    document.querySelectorAll(".btn").forEach((element) => {
      element.addEventListener('click', onSelectFilter)
    })
  }, [onSelectFilter])

  
  return (
    <section ref={sectionRef}>
      {filters.map(element => (
        <button className="btn" id={element} key={element+1}>{element}</button>
      ))}
    </section>
  )
}

export default Toolbar;
