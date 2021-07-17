import { useState } from "react";
import Form from "./components/Form";
import Highlight from "./components/Highlight";
import { multiply } from "./utils/math";

const App = () => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async ({ value, coin }) => {
    const res = await window.fetch(
      `https://economia.awesomeapi.com.br/json/last/${coin}-BRL`
    );
    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    const result = multiply(data[`${coin}BRL`].ask, value).toFixed(2);
    setValue(result);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Highlight value={value} />
      {error ? <div role="alert">{error}</div> : null}
    </>
  );
};

export default App;
