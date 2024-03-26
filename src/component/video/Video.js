import React from "react";
import './Video.css'
import ThumbnailComponent from "./Tumbnail";
function Video()
{
return(  <div class="grid"> 
    <img class="tumbnail" src="data:image/png;base64,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" alt="" />
    <div>
      <h3>My video</h3>
      <p>Video description</p>
    </div>
    <span >♡</span>
  </div>
);
}
export default Video;