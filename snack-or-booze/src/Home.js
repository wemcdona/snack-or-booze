import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * Home component to display welcome message and counts of snacks and drinks.
 * @param {Object} props - The component props.
 * @param {Array} props.snacks - List of snacks.
 * @param {Array} props.drinks - List of drinks.
 */
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>We have {snacks.length} snacks and {drinks.length} drinks available.</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
