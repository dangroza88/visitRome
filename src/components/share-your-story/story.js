import React from "react";
import Tweet from "../tweet/Tweet";

function Story() {

    return(
        <div>
          <Tweet name ="Dan" message="Rome is awsome!!"/>
          <Tweet name ="Maria" message="Modern Rome has 280 fountains and more than 900 churches."/>
          <Tweet name ="Luigi" message="Rome has a museum dedicated entirely to pasta."/>
        </div>
    )
}

export default Story;