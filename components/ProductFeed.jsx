import Products from "./Products";

export default function ProductFeed({ products }) {
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center md:-mt-56">
        {products.slice(0, 4).map((product) => (
          <div key={product.id}>
            <Products product={product} />
          </div>
        ))}
        <img
          className="md:col-span-full mx-auto"
          src="https://links.papareact.com/dyz"
          alt=""
        />
        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <div key={product.id}>
              <Products product={product} />
            </div>
          ))}
        </div>
        {products.slice(5, products.length).map((product) => (
          <div key={product.id}>
            <Products product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
