import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import Tilt from "react-tilt";
import Link from "next/link";

export default function Products() {
  const { data } = useSWR("/api/products", fetcher);
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.map((product) => (
            <Link className="group" href={"/product/" + product.id} key={product.id}>
              <a>
                <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 group-hover:shadow-lg">
                  <Tilt
                    className="w-full h-full object-center object-cover group-hover:opacity-70"
                    options={{ max: 35 }}
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-70"
                    />
                  </Tilt>
                </div>
                <h3 className="mt-4 text-sm text-gray-100">{product.imageAlt}</h3>
                <p className="mt-1 text-lg font-medium text-gray-300">
                  {product.price}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
