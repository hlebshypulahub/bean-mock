import { useState, useCallback, useEffect } from "react";
import "./Main.scss";
import SimpleSpinner from "../components/SimpleSpinner";
import PhotoUploader from "../components/PhotoUploader";

function Main() {
  const [regionPng, setRegionPng] = useState("");
  const [regionPngLoaded, setRegionPngLoaded] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");

  const handlePhotoUrlChange = (value) => {
    setPhotoUrl(value);
  };

  const resourcesLoaded = useCallback(() => {
    return regionPngLoaded;
  }, [regionPngLoaded]);

  const fetchRegionPng = useCallback(() => {
    setRegionPngLoaded(false);

    fetch("https://picsum.photos/200/300")
      .then((response) => response.blob())
      .then((blob) => {
        setRegionPng(URL.createObjectURL(blob));
        setRegionPngLoaded(true);
        // Do something with the image URL, such as displaying it on a webpage
        // For example, if you have an <img> element with id "myImage":
        // document.getElementById('myImage').src = imageUrl;
      })
      .catch((error) => {
        console.log("Error fetching regionPng:", error);
        setRegionPngLoaded(true);
      });
  }, []);

  const handleUpload = () => {
    // Here, you can implement your upload logic
    // You can use the 'photoUrl' state variable to access the uploaded photo
    // and send it to your server or perform any desired operations
    console.log("Uploading photo:", photoUrl);
  };

  useEffect(() => {
    fetchRegionPng();
  }, []);

  console.log(regionPng);

  return (
    <div className="Main">
      <h1>CAPGEMINI</h1>
      <PhotoUploader onPhotoUrlChange={handlePhotoUrlChange} />
      {photoUrl && <img src={photoUrl} alt="Captured" />}
      {photoUrl && <button onClick={handleUpload}>Upload</button>}
      {resourcesLoaded() ? (
        <img src={regionPng} alt="Region PNG" />
      ) : (
        <SimpleSpinner />
      )}
      {resourcesLoaded() && photoUrl && (
        <div className="layered-images">
          <div className="photo"><img src={photoUrl} alt="Captured" /></div>
          <div className="regions"><img src={regionPng} alt="Region PNG" /></div>
        </div>
      )}
    </div>
  );
}

export default Main;
