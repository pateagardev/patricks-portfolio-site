import React from "react";
import { Grow } from "@material-ui/core";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal(props) {
  return (
    <div>
      <Grow in={props.isOpen} mountOnEnter unmountOnExit>
        <ModalVideo
          channel="custom"
          url="http://www.pateagar.com/videos/vans_skateclassicspage.mp4"
          title="video"
          width={800}
          isOpen={true}
          onClose={props.close}
        />
      </Grow>
    </div>
  );
}

export default VideoModal;
