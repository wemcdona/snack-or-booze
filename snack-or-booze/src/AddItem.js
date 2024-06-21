import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";

/**
 * AddItem component to add a new snack or drink.
 */
function AddItem() {
  const [formData, setFormData] = useState({
    type: "snack",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (formData.type === "snack") {
      await SnackOrBoozeApi.createSnack(formData);
    } else {
      await SnackOrBoozeApi.createDrink(formData);
    }
    setFormData({
      type: "snack",
      name: "",
      description: "",
      recipe: "",
      serve: ""
    });
  }

  return (
    <div className="AddItem">
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe:</label>
          <input
            type="text"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="serve">Serve:</label>
          <input
            type="text"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
