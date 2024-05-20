import { render, screen } from '@testing-library/react';
import App from './App';

// import * as testData from './sampleData'

test('renders learn react link', () => {
  render(
    <App
      projectId={'project-1'}
      sectionId={'section-1'}
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
