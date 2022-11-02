const List = ({ food }) => {
  return (
    <div className="main-container">
      {food.map((item) => {
        const { id, food_name, type, price } = item;
        return (
          <div
            className="food-card"
            key={id}
            id={type === "vej" ? "vej" : "non-vej"}
          >
            <h3>Food: {food_name}</h3>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
            <button>Not Intrested</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
