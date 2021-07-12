import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeAll(() => jest.spyOn(window, "fetch"));

test("shows the amount in brazilian real after submit", async () => {
  render(<App />);

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      USDBRL: { ask: "4.9363" },
    }),
  });

  userEvent.type(screen.getByLabelText(/valor/i), "3000");
  userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD");
  userEvent.click(screen.getByRole("button", { name: /calcular/i }));

  expect(window.fetch).toHaveBeenCalledWith(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(await screen.findByText("14808.90")).toBeInTheDocument();
});

test("renders an error message from the server", async () => {
  const testError = "test error";
  render(<App />);

  window.fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ message: testError }),
  });

  userEvent.type(screen.getByLabelText(/valor/i), "3000");
  userEvent.selectOptions(screen.getByLabelText(/moeda/i), "USD");
  userEvent.click(screen.getByRole("button", { name: /calcular/i }));

  expect(await screen.findByRole("alert")).toHaveTextContent(testError);
});
