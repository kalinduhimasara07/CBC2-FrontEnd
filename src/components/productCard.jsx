export default function ProductCard(props) {
  return (
    <div>
      <h1>Name :{props.name}</h1>
      <h1>Price :${props.price}</h1>
      <button>Add to cart</button>
    </div>
  );
}
