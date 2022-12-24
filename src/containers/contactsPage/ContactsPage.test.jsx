import { render, screen } from '@testing-library/react';
import { ContactsPage } from './ContactsPage';

describe("ContactsPage component", () => {
    it("rendered", () => {
        render(<ContactsPage />);
        const element = screen.getByRole("headng")
        expect(element).toBeIntheDocument();
    })
})