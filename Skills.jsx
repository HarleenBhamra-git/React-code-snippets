//make checkboxex
//define state for checkboxex (which are always handled by an array)
//get checkbox value in state
// remove checkbox value in state

import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkill = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item != event.target.value));
    }
  };

  return (
    <div>
      <h1>Experience with which skills</h1>
      <input onChange={handleSkill} type="checkbox" value="react" id="react" />
      <label htmlFor="react"> React </label> <br />
      <br />
      <input
        onChange={handleSkill}
        type="checkbox"
        value="javascript"
        id="javascript"
      />
      <label htmlFor="javascript"> Javascript </label> <br />
      <br />
      <input onChange={handleSkill} type="checkbox" value="java" id="java" />
      <label htmlFor="java"> Java </label>
      <br />
      <br />
      <input onChange={handleSkill} type="checkbox" value="php" id="php" />
      <label htmlFor="php"> PHP </label>
      <br />
      <br />
      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default Skills;
