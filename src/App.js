import React from "react";
// import { Transformation, Image } from 'cloudinary-react';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState("");

  const uploadImage = async e => {
    const files = e.target.files[0]
    const data = new FormData()
    data.append("file", files)
    data.append("upload_preset", "interview")
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/aaatechie/image/upload", {
      method: "post",
      body: data
    })
      .catch(err => console.log(err))

    const file = await res.json()

    console.log(file)

    setImage(file.secure_url)
    setLoading(false)
  }
  console.log(image)

  const deleteImage = () => {
    setImage("")
  }

  return (
    <div className="App">
      <header>
        <div class="header-title-bar">
          <h1>Upload Your Files</h1>
        </div>
      </header>

      <div className="App-body">

        <div className="image-upload">
          <label htmlFor='file-input'>
            <img src="https://www.freeiconspng.com/uploads/upload-icon-3.png" alt="Icon Drawing Upload" />
          </label>
          <input id='file-input' type="file" onChange={uploadImage}></input>

          <h2>Uploads</h2>
          {
            loading ? <div>Loading...</div> : <img alt='' width='200px' height='200px' src={image} />
          }
          {/* <Image
            cloudName="aaatechie"
            publicId="https://res.cloudinary.com/aaatechie/image/upload/v1627068379/c7tqoc3lrae7cr1qtfvu.jpg"
            width="300">
            <Transformation width="200" crop="scale" angle="45" />
          </Image> */}
          <button onClick={deleteImage}>Delete</button>
        </div>
      </div>


    </div>
  );
}

export default App;
