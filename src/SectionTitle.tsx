import * as types from './types';
import React, { useState, FormEvent } from 'react'




type SectionDataProps = {
  sectionData: types.SectionData,
}

export const SectionTitle: React.FC<SectionDataProps> = ({ sectionData }) => {
  const [showForm, setShowForm] = useState(false);    //shows the form for when you're entering a new title
  const [currentTitle, setCurrentTitle] = useState(sectionData.name);

  let handleToggleForm = () => {
      console.log('button clicked');
      setShowForm(!showForm);
  };

  // Handle form submission with FormData for TypeScript
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget); // Using event.currentTarget to reference the form
      const newName = formData.get('newName') as string; 
      setCurrentTitle(newName); 
      setShowForm(false);
  };

  return (
      <div className="section-title">
          <div className='text'>
              <h1>{currentTitle}</h1>
              <p>{sectionData.description}</p>
              <button onClick={handleToggleForm}>
                  {showForm ? 'Cancel Editing' : 'Rename Section'}
              </button>
          </div>
          {showForm && (
              <form onSubmit={handleSubmit}>
                  <label htmlFor="newName">New Name:</label>
                  <input id="newName" name="newName" type="text" placeholder="Enter new section name" />
                  <button type="submit">Update Name</button>
              </form>
          )}
          <div className='revisions'>
              <button>{sectionData.numRevisions} revisions</button>
              <button>Save revision</button>
          </div>
      </div>
  );
};
