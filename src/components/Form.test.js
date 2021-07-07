import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("submitting the form calls onSubmit with value and coin", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  screen.getByLabelText(/valor/i).value = "3000";
  screen.getByLabelText(/moeda/i).value = "USD";
  fireEvent.click(screen.getByRole("button", { name: /calcular/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    value: "3000",
    coin: "USD",
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
