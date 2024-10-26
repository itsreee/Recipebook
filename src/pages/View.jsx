import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const View = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"));
      setRecipe(allRecipes?.find(item => item.id == id));
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Header />
      <Container style={{ paddingTop: "50px" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img
              src={recipe.image}
              className="img-fluid" 
              alt={recipe.name}
            />
          </Col>
        </Row>
        <Row className="justify-content-center text-center pt-2">
          <Col xs={12}>
            <h3 style={{ fontFamily: "Afacad Flux" }}>Recipe ID: {recipe.id}</h3>
            <h2 style={{ fontFamily: "Afacad Flux" }}>{recipe.name}</h2>
            <h4 style={{ fontFamily: "Afacad Flux" }}>
              Rating: {recipe.rating} <i className="fa-solid fa-star text-warning"></i>
              <span> Reviews: {recipe.reviewCount}</span>
            </h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} className="text-justify border-primary shadow rounded border p-3" style={{ backgroundColor: "bisque", fontFamily: "Afacad Flux" }}>
            <h2 style={{ textAlign: "center", fontFamily: "Afacad Flux" }}>How To Prepare!!</h2>
            <h4 style={{ fontFamily: "Afacad Flux" }}>Ingredients: <br />
              {recipe.ingredients}
            </h4>
            <h4 style={{ textAlign: "justify", fontFamily: "Afacad Flux" }}>Instructions: <br />
              {recipe.instructions}
            </h4>
            <h4 style={{ fontFamily: "Afacad Flux" }}>Cuisine: {recipe.cuisine}</h4>
            <h5 style={{ fontFamily: "Afacad Flux" }}>#{recipe.tags}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default View;
