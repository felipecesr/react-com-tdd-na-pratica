const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, coin } = e.target.elements;

    onSubmit({
      value: value.value,
      coin: coin.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="value">Valor</label>
      <input type="number" id="value" />

      <label htmlFor="coin">Moeda</label>
      <select id="coin">
        <option value="USD">Dolar Americano</option>
        <option value="EUR">Euro</option>
        <option value="GBP">Libra Esterlina</option>
      </select>

      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
