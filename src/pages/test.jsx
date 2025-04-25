import { useState } from "react";
import uploadMediaToSupabase from "../utils/mediaUpload";

export default function FileUploadTest() {
  const [file, setFile] = useState(null);
  async function handleUpload() {
    uploadMediaToSupabase(file)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>File Upload Test</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
