const Birthday = ({ item }) => {
  return (
    <section className="birthday">
      <img src={item.pic} alt=""></img>
      <div className="item-info">
        <h2>{item.name}</h2>
        <h3>{item.age}</h3>
      </div>
    </section>
  );
};

export default Birthday;
