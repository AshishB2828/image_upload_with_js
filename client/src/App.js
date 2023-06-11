import axios from 'axios';

function App() {

  async function handleFileUpload(e) {

    const img =  e.target.files[0]
    const formData = new FormData();
    formData.append('myphoto', img )

    try {
      const {data} = await axios.post('http://localhost:5000/upload-img', formData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <div>
          <input type="file" id='file-upload' onChange={handleFileUpload}   />
      </div>
    </div>
  );
}

export default App;
