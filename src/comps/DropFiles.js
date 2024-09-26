import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Fire } from './Fire'; // Import firebase config

function DropFiles(props) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Destructure props from react-dropzone
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileDrop, // Trigger this when files are dropped
  });

  // Handle files dropped or selected
  function handleFileDrop(acceptedFiles) {
    acceptedFiles.forEach((file) => {
      uploadFileToFirebase(file);
    });
  }

  // Upload file to Firebase Storage
  function uploadFileToFirebase(file) {
    const storageRef = Fire.storage().ref(); // Firebase storage reference
    const fileRef = storageRef.child(`files/${file.name}`); // File path in Firebase Storage

    // Upload the file and monitor progress
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Update progress state
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        // On successful upload, get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setUploadedFiles((prevFiles) => [...prevFiles, { name: file.name, url: downloadURL }]);
          console.log('File available at:', downloadURL);
        });
      }
    );
  }

  // Display selected files and uploaded files
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>

        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
        
        {uploadedFiles.length > 0 && (
          <div>
            <h4>Uploaded Files</h4>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </section>
  );
}

export default DropFiles;
