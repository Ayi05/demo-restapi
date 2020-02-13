import React from 'react';
import Topbar from './home/1_header/topbar';
import Display from './home/2_main/display';

const Home = (props) => {
  return (
    <div style={{ fontFamily: "Cambria" }}>
      <Topbar></Topbar>
      <div className="container">
        <Display></Display>
      </div>
    </div>
  );
};

export default Home;
