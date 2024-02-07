'use client'
import React, { useState } from 'react';
import {createWorker} from 'tesseract.js';

const WebcamComponent: React.FC = () => {
    const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
    const [licenseInfo, setLicenseInfo] = useState<string>('');
    const [capturedImage, setCapturedImage] = useState<string>('');

    const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setWebcamStream(stream);
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };

    const processCapturedImage = async () => {
        const worker = await createWorker('eng');
        const ret = await worker.recognize(capturedImage);
        setLicenseInfo(ret.data.text);
        await worker.terminate();
    };

    const captureImage = () => {
        if (!webcamStream) return;
    
        const video = document.createElement('video');
        video.srcObject = webcamStream;
    
        video.addEventListener('playing', async () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
    
            setTimeout(() => {
                context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    
                const dataUrl = canvas.toDataURL('image/jpeg');
                setCapturedImage(dataUrl);
            }, 100);
        });
    
        video.play();
    };

    const stopWebcam = () => {
        webcamStream?.getTracks().forEach(track => track.stop());
        setWebcamStream(null);
        setCapturedImage('');
        setLicenseInfo('');
    };

    return (
        <div>
            {capturedImage ? (
                    <div>
                        <img src={capturedImage} alt="Captured" />
                        <button onClick={processCapturedImage} className='m-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Process Captured Image</button>
                        <button onClick={stopWebcam} className='m-2 m-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded '>Clear</button>
                    </div>
                ) : webcamStream ? (
                    <div className=''>
                        <video autoPlay ref={(video: HTMLVideoElement) => { if (video) video.srcObject = webcamStream; }} />
                        <button onClick={captureImage} className='m-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Capture Image</button>
                        <button onClick={stopWebcam} className='m-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Stop Webcam</button>
                    </div>
                ) : (
                    <button onClick={startWebcam} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Start Webcam</button>
                ) }
             
            {licenseInfo && capturedImage && (
                <div className="mt-5 border border-[#868e9a] p-4">
                    <h2 className="font-bold mb-2 text-white">License Information:</h2>
                    <div className="bg-[#1f2937] p-4 rounded text-white">
                        <pre>{licenseInfo}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebcamComponent;
