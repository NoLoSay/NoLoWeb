import { render, screen } from '@testing-library/react';
import Home from '../../pages/screen/home/Home.tsx';

jest.mock('../../pages/components/Home/DownloadContainer', () => () => <div>Download Container</div>);
jest.mock('../../pages/components/Home/VideoCreationContainer', () => () => <div>Video Creation Container</div>);
jest.mock('../../pages/components/Layout/Layout', () => ({ children }) => <div>{children}</div>);


describe('Home', () => {
    it('renders Home page with all components and text data', () => {
        render(<Home />);

        expect(screen.getByText('Download Container'));

        expect(screen.getByText('Video Creation Container'));

        expect(screen.getByAltText('Video Creation Image'));

    });
});
