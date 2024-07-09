import { render, screen } from '@testing-library/react';
import About from '../../pages/screen/About/About.tsx';

jest.mock('../../pages/components/Layout/Layout', () => ({ children }) => <div>{children}</div>);
jest.mock('../../pages/components/About/Container', () => () => <div>Mock Container</div>);
jest.mock('../../pages/components/About/Timeline', () => () => <div>Mock Timeline</div>);


describe('About', () => {
        it('renders About page with all components and text data', () => {
            render(<About />);

            expect(screen.getByAltText(''));

            expect(screen.getByText('Mock Container'));

            expect(screen.getByText('Mock Timeline'));
    });
});
