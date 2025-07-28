import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import '@testing-library/jest-dom';


// describe("we can use this describe to wrap all test cases", () => {

// })

test("Should check contact is loaded", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("heading");

    expect(heading.length).toBe(2);
})

// we can use 'test' also.. 'it'