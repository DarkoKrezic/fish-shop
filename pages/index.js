import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWRMutation from "swr/mutation";
import { useState } from "react";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const [formHeading, setFormHeading] = useState("Add a new Fish");
  const { trigger } = useSWRMutation("/api/products", sendRequest);

  async function sendRequest(url, { arg }) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    });

    if (!response.ok) {
      console.error(response.status);
    }
  }
  async function handleAddProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    await trigger(productData);
    event.target.reset();
  }
  const defaultValue = {
    name: "fischmisch",
    price: null,
    description: "",
    currency: "euro",
  };
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} value={defaultValue} />
      <hr />
      <ProductList />
    </>
  );
}
