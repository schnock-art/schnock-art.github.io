import React from 'react';
import MyEducation from '../Home/MyEducation';
import MyLanguages from '../Home/MyLanguages';
import MyWorkExperience from '../Home/MyWorkExperience';
import html2pdf from 'html2pdf.js';
import './CVComponent.css';

export default function CVComponent() {
    const exportPDF = () => {
        const {width,height} = document.body.getBoundingClientRect();
        html2pdf(document.querySelector('body'), {jsPDF: {format: [width, height],unit: 'px'}})
      };
    return (
        <div>
        <button onClick={exportPDF}>Export as PDF</button>
        <div id='cv'>
            <h1>CV</h1>
            <div style={{ display: 'flex' }}>

                <div style={{ flex: 1 }}>
                    <MyLanguages />
                </div>
                <div style={{ flex: 2 }}>
                    <MyWorkExperience />
                    <MyEducation />
                    
                </div>
            </div>
        </div>
        </div>
    );
};

