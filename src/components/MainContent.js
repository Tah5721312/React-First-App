import React from "react";
import './MainContent.css';
const MainContent = ({aaa,Designer}) => {
  return (
    <div>
      <main>
        {aaa} Page 
        <br/>
        Designed by {Designer}
      </main>
    </div>
  );
};

export default MainContent;
