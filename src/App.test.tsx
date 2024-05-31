import { render, screen } from '@testing-library/react';
import * as testData from './sampleData'
import App from './App';

test('renders learn react link', () => {
  render(
    <App 
    // sectionData={testData.sectionData}
    // chordProgression={testData.currentChordProgression}
    // files={testData.files}
    // comments={testData.comments}
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
