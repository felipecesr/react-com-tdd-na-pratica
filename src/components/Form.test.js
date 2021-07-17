import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

test("submitting the form calls onSubmit with value and coin", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/valor/i), "3000");
  userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD");
  userEvent.click(screen.getByRole("button", { name: /calcular/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    value: "3000",
    coin: "USD",
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
