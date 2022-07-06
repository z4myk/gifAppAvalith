import React from 'react'
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const GifItem = ({url, title}) => {

    const handleModal = () => {
        Swal.fire({
    
          imageUrl: url,
          imageWidth: 500,
          imageHeight: '90%',
          text: title,
          imageAlt: "Custom image",
          color: "#fff",
          background: "#191a19",
          backdrop: "#0000008a",
        });
      };


    return (
        <div className="w-25 my-2">
            <img src={url} alt="gif" className="w-75 rounded gifs" onClick={handleModal} />

        </div>
    )
}
