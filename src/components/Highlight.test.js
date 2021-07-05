import ReactDOM from "react-dom"
import Highlight from './Highlight'

function render(component) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  ReactDOM.render(component, container)
}

afterEach(() => {
  document.body.innerHTML = "";
});

test("renders a value", () => {
  const value = "3000";
  render(<Highlight value={value} />);
  expect(document.body.textContent).toBe(value);
});

test("renders another value", () => {
  const value = "5000";
  render(<Highlight value={value} />);
  expect(document.body.textContent).toBe(value);
});
