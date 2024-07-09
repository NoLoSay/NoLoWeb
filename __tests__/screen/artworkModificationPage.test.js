import { render, screen, fireEvent } from '@testing-library/react';
import ArtworkModificationPage from '../../pages/screen/artworkmodificationPage/ArtworkModificationPage.tsx';
import { UserContext } from '../../contexts/UserProvider';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock des composants
jest.mock('../../pages/components/Layout/Layout', () => ({ children }) => <div>{children}</div>);


// Mock de useLocation et useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      item: {
        name: "Mock Artwork",
        description: "Mock Description",
        picture: "https://cataas.com/cat",
        relatedPersonId: 123,
        itemTypeId: 1,
      },
      exhibitionId: 456,
    }
  }),
  useNavigate: () => jest.fn(),
}));

describe('ArtworkModificationPage', () => {
  it('renders ArtworkModificationPage with all components and text data', () => {
    const mockUser = { accessToken: "mockAccessToken" };
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Router>
          <ArtworkModificationPage />
        </Router>
      </UserContext.Provider>
    );




    // Check if buttons are rendered
    expect(screen.getByText('Back'));
    expect(screen.getByText('Save'));
  });

  it('handles input changes', () => {
    const mockUser = { accessToken: "mockAccessToken" };
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Router>
          <ArtworkModificationPage />
        </Router>
      </UserContext.Provider>
    );

  });
});
