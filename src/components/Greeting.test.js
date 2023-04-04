import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
// Describe: useable as grouping method to organize code
describe("Greeting components", () => {
  test("Testing hello world in the screen", () => {
    // Arrange
    render(<Greeting />);
    // Act
    //...nothing
    // Assert
    const helloWorld = screen.getByText("Hello world!", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders good to see you! Button was not clicked!", () => {
    // Arrange
    render(<Greeting />);
    // Act
    //...nothing
    // Assert
    const changedTextSeeYou = screen.getByText("It's good to see you!");
    expect(changedTextSeeYou).toBeInTheDocument();
  });

  test("renders changed! Button was clicked!", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'good to see you' is not visible! Button was clicked!", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
