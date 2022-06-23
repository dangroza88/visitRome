import React from "react";
import Tweet from "../tweet/Tweet";

function Story() {

    return(
        <div>
          <Tweet name ="Mark" message="Rome is awsome!!"/>
          <Tweet name ="Maria" message="Modern Rome has 280 fountains and more than 900 churches."/>
          <Tweet name ="Luigi" message="Rome has a museum dedicated entirely to pasta."/>
          <Tweet name ="Frank" message="The first shopping mall in the world was built in Rome, in 110 AD"/>
          <Tweet name ="Levi" message="Only 10% of Ancient Rome has been excavated."/>
        </div>
    )
}

export default Story;