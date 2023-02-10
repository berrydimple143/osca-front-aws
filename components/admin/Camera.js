import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Space, message } from 'antd';

const WebcamComponent = () => <Webcam />
let ratio = 490 / 350;
const videoConstraints = {
  width: 490,
  height: 350,
  facingMode: 'user',
  aspectRatio: ratio,
}
const Camera = ({
  setShowCameraModal,
  userCamera,
  selectedItemForCamera,
  setSaving,
  setShowCardSuccess,
  setSuccessMessage,
  setUploadData,
  page
}) => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  const handleSave = async () =>
  {
    if(picture == '') {
      message.error("Please take a shot ...");
    } else {
      setShowCameraModal(false);
      if(page == 'vaccine') {
        setUploadData(picture);
        setSuccessMessage('Vaccine card picture was taken and prepared for saving.');
        setShowCardSuccess(true);
      } else {
        setSaving(true);
        try {
            const { data } = await userCamera(selectedItemForCamera, picture);
            setSaving(false);
        } catch (error) {
            setSaving(false);
            message.error("Something went wrong.");
        }
      }
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={350}
            ref={webcamRef}
            width={490}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <Space>
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="px-5 py-3 border border-dotted bg-red-500 text-white"
          >
            Capture
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-3 border border-dotted bg-green-500 text-white"
          >
            Save
          </button>

          <button
            onClick={() => setShowCameraModal(false) }
            className="px-5 py-3 border border-dotted bg-orange-500 text-white"
          >
            Close
          </button>

        </Space>
      </div>
    </div>
  )
}
export default Camera;
