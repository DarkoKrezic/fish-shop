import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
//import useSWRMutation from "swr/mutation";

// async function sendRequest(url, { arg }) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(arg),
//   });

//   if (!response.ok) {
//     console.error(response.status);
//   }
// }

export default function ProductForm({ onSubmit, value }) {
  // const { trigger } = useSWRMutation("/api/products", sendRequest);

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const productData = Object.fromEntries(formData);

  //   await trigger(productData);
  //   event.target.reset();
  // }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input defaultValue={value.name} type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          defaultValue={value.description}
          type="text"
          id="description"
          name="description"
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          defaultValue={value.price}
          type="number"
          id="price"
          name="price"
          min="0"
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
