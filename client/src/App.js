import React from 'react';
import Images from "./components/images";

function App (props) {

  return (
    <div>
        <div className="alignment">
          <h1>Flickr infinite scroll</h1>
        </div>
        {/* SEARCH CRITERIA */}
        <Images search = "mountain"/>  
    </div>
  );

}

export default App;
