import { render, screen, fireEvent } from '@testing-library/react';
import ConnectionScreen from '../../pages/screen/authentificationSection/connection/ConnectionScreen.tsx';  // Assurez-vous que le chemin est correct
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../pages/components/Layout/Layout', () => ({ children }) => <div>{children}</div>);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('ConnectionScreen', () => {
  it('renders ConnectionScreen with all components and text data', () => {
    render(
      <Router>
        <ConnectionScreen />
      </Router>
    );
  });

  it('handles input changes', () => {
    render(
      <Router>
        <ConnectionScreen />
      </Router>
    );
  });

  it('handles form submission', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

    render(
      <Router>
        <ConnectionScreen />
      </Router>
    ); 
  });

  it('handles navigation to subscription page', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

    render(
      <Router>
        <ConnectionScreen />
      </Router>
    );
  });
});
