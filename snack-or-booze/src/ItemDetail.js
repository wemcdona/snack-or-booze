import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * Generic ItemDetail component to display details of an item.
 * @param {Object} props - The component props.
 * @param {Array} props.items - List of items to search from.
 * @param {string} props.cantFind - Redirect path if item not found.
 */
function ItemDetail({ items, cantFind }) {
  const { id } = useParams();
  const itemId = parseInt(id, 10); // Ensure id is an integer

  let item = items.find(item => item.id === itemId);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetail;
