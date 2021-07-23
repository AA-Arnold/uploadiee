import React from "react";
import { Transformation, Image } from 'cloudinary-react';
import './App.css';

function App() {
  const [image, setImage] = React.useState("");
  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "interview")
    data.append("cloud_name", "aaatechie")
    fetch("https://api.cloudinary.com/v1_1/aaatechie/image/upload", {
      method: "post",
      body: data
    })
      .catch(err => console.log(err))

    console.log(data)
  }
  console.log(image)
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Uploads</li>
        </ul>
      </nav>

      <div className="App-body">
        <div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
          <button onClick={uploadImage}>Upload</button>
        </div>

        <div>
          <div>Preview</div>
          <Image
            cloudName="aaatechie"
            publicId="https://res.cloudinary.com/aaatechie/image/upload/v1627068379/c7tqoc3lrae7cr1qtfvu.jpg"
            width="300">
            <Transformation width="200" crop="scale" angle="45" />
          </Image>
          <button>Delete</button>
        </div>
      </div>


    </div>
  );
}

export default App;
