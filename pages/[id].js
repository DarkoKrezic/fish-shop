// import { useRouter } from "next/router";
// import Product from "../components/product";

// export default function ProductDetailsPage({product}) {
//   const router = useRouter();
//   const { query: { id }, push } = router;

//   async function updateProduct(url, {arg}) {
//   const response = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({arg}),
//   });
//   }
//   }
//   return (
//     <>
//       <Product />
//     </>
//   );
// }
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import Product from "../components/Product";

export default function ProductDetailsPage({ product }) {
  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;
  async function updateProduct(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ arg }),
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error("Error: ${response.status}");
    }
  }
  const { trigger, isMutating } = useSWRMutation(
    "/api/products/${id}",
    updateProduct
  );

  async function handleEditProduct(event) {
    event.preventDefault();
    const productData = Object.fromEntries(new FormData(event.target));

    await trigger(productData);
    push("/");
  }

  return (
    <>
      {isMutating && <p>Submitting your changes.</p>}
      <Product product={product} onSubmit={handleEditProduct} />
    </>
  );
}
