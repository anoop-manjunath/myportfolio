import React, { useEffect, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setwid(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDocumentLoad = ({ numPages: totalPages }) => {
    setNumPages(totalPages);
  };

  const pageScale = wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1;

  return (
    <div className='ResumePage'>
      <div className='resumeScroller'>
        <Document
          file={pdf}
          className="resumeview"
          onLoadSuccess={handleDocumentLoad}
        >
          {Array.from({ length: numPages || 1 }, (_, index) => (
            <div className='resumePageWrapper' key={`resume-page-${index + 1}`}>
              <Page
                pageNumber={index + 1}
                scale={pageScale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>

      <a href={pdf} download="Anoop-DM-Resume.pdf">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume
