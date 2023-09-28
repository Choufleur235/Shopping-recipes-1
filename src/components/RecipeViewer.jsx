import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Recipes from "./Recipes";
import Shopping from "./Shopping";


function RecipeViewer({setAddNewRecipe }) {
    return (
        // <div>
        //     <h3>{recipes[3].title}</h3>
        // </div>
        <Container className="container">
                    <Row>
                        <Col md={12} lg={4} className="box shopping">
                            <Shopping/>
                        </Col>
                        <Col md={12} lg={{span: 8, order: 'first' }}className="box recipes">
                            <Recipes 
                            setAddNewRecipe={setAddNewRecipe}
                            />
                        </Col>
                    </Row> 
        </Container>
    )
}

export default RecipeViewer;