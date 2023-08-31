import React from 'react';
import './Employee.css';

function Employee() {
    return (
        <div>
            <h2>Find applicant you think is gonna make it and contact them!</h2>
            
            <iframe 
                title="Applicant Spreadsheet"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT7gGPst2NLdFeEpLajPJrMMvPEly5bN9hPyer6fgVypiHYUipODbZijTUEUYkN7LDb0YF-T8BHUrpj/pubhtml?widget=true&amp;headers=false"
                width="100%" 
                height="500" 
                frameborder="0" 
                scrolling="no">
            </iframe>
        </div>
    );
}

export default Employee;