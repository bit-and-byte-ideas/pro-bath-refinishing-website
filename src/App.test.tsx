import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /better than new/i }),
    ).toBeInTheDocument();
  });

  it('exposes the business phone number as a tel link', () => {
    render(<App />);
    const links = screen.getAllByRole('link', { name: /781-6348/ });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', 'tel:+16197816348');
  });

  it('lists the core services', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /bathtub & shower refinishing/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /imitation stone coatings/i }),
    ).toBeInTheDocument();
  });

  it('validates the quote form before submitting', async () => {
    const user = userEvent.setup();
    render(<App />);

    const form = screen
      .getByRole('heading', { name: /request a free quote/i })
      .closest('form') as HTMLFormElement;
    const submit = within(form).getByRole('button', { name: /send & text us/i });

    await user.click(submit);

    expect(within(form).getByText(/please tell us your name/i)).toBeInTheDocument();
    expect(
      within(form).getByText(/let us know what you’d like refinished/i),
    ).toBeInTheDocument();
  });
});
