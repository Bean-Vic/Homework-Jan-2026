import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RandomDog from './RandomDog';

describe('RandomDog', () => {
    let fetchMock;

    beforeEach(() => {
        fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => ({}),
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders title and fetch button', () => {
        render(<RandomDog />);
        expect(screen.getByRole('heading', { name: 'Random Dog' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Get Another Dog' })).toBeInTheDocument();
    });

    it('fetches and displays dog image on button click', async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                status: 'success',
                message: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3240.jpg',
            }),
        });

        render(<RandomDog />);
        await userEvent.click(screen.getByRole('button', { name: 'Get Another Dog' }));

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        const img = await screen.findByRole('img', { name: 'Random Dog' });
        expect(img).toHaveAttribute(
            'src',
            'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3240.jpg'
        );
        expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('shows error when fetch fails', async () => {
        fetchMock.mockRejectedValueOnce(new Error('network error'));

        render(<RandomDog />);
        await userEvent.click(screen.getByRole('button', { name: 'Get Another Dog' }));

        expect(await screen.findByText('Failed')).toBeInTheDocument();
    });

    it('shows error when API failed', async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ status: 'error' }),
        });

        render(<RandomDog />);
        await userEvent.click(screen.getByRole('button', { name: 'Get Another Dog' }));

        expect(await screen.findByText('Failed')).toBeInTheDocument();
    });
});
