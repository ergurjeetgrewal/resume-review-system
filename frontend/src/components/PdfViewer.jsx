import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfViewer(props) {
    const { resume } = props;
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                <Viewer fileUrl={resume}
                    plugins={[defaultLayoutPluginInstance]}></Viewer>
            </Worker>
        </div>
    );
}

export default PdfViewer;