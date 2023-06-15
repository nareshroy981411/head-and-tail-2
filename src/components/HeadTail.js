import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function HeadTail() {
    const [selectedValue, setSelectedValue] = useState("");
    const [headChars, setHeadChars] = useState([]);
    const [tailChars, setTailChars] = useState([]);
  
    function handleSelectChange(event) {
      setSelectedValue(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if (selectedValue === "") {
        alert("Please select a value from the dropdown.");
      } else if (selectedValue === "H") {
        setHeadChars(prevChars => [...prevChars, "H"]);
      } else if (selectedValue === "T") {
        setTailChars(prevChars => [...prevChars, "T"]);
      }
      setSelectedValue("");
    }
  
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        <h2>Head &amp; Tail</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Select Value:
            <select value={selectedValue} onChange={handleSelectChange}>
              <option value="">Select Value</option>
              <option value="H">H</option>
              <option value="T">T</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: "10px" }}>
            {headChars.map((char, index) => (
              <p key={index}>{char}</p>
            ))}
          </div>
          <div style={{ margin: "10px" }}>
            {tailChars.map((char, index) => (
              <p key={index}>{char}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
  export default HeadTail
  