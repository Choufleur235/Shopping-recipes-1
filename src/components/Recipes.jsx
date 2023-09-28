import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import listRecipes from '../Data/ListRecipes';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Recipes({setAddNewRecipe}) {

  function addNewRecipe() {
    setAddNewRecipe(false);
    console.log("Clicked");
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  
  

  return (
    <div>
      <h3 className="title">Recipes</h3>
      
      <Container>
        <Row>
          {listRecipes.map(recipe =>
            <Col md={6} lg={4} className="box recipe" key={recipe.id} onClick={() => setModalShow(true)}>
              
                <h2 className="recipeTitle">{recipe.title}</h2>
                <ul>
                  {recipe.items.map(item =>
                  <div>
                    <li key={item.name}>{item.name}</li>
                    <p>{item.quantityPerPerson} {item.unit}</p>
                  </div>
                  )}
                </ul>
              
            </Col>
          )}
          <Col md={6} lg={4} className="box recipe">
            <IconButton  aria-label="add" className="addButton" onClick={addNewRecipe}>
              <AddCircleOutlineIcon style={{ fontSize:140 }}/>
            </IconButton>
          </Col>
        </Row>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


          
 
      </Container>
    </div>

  )
}


// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
  
  // <div className="container">
  //     <div className="grid-item" style={{gridArea: "header"}}><Heading/></div>
  //     <div className="grid-item recipes" style={{gridArea: "recipes"}}><h3>Recipes</h3></div>
  //     <div className="grid-item shopping" style={{gridArea: "shopping"}}><h3>Shopping</h3></div>
  //     {/* <div className="grid-item" style={{gridArea: "right"}}><h3>Right</h3></div> */}
  //     <div className="grid-item" style={{gridArea: "footer"}}><h3>Footer</h3></div>
  // </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={1} className="content">
    //     <Grid item xs={8}  className="box recipes">
    //         <Item className="title">
    //             <h1>Recipes</h1> 
    //         </Item>
    //         <Item>
    //           <container>

    //           </container>
    //         </Item>
    //     </Grid>
    //     <Grid item xs={4} className="box shoppingList">
    //         <Item  className="title">
    //             <h1>Shopping List</h1>
    //         </Item>
    //     </Grid>
    //   </Grid>
    // </Box>
//   );
// }

// function () {
//     return (
//         <Container>
//             <Grid>
//                 <Col sm={8} >
//                         <h1>Recipes</h1>
//                         <container></container>
//                 </Col>
//                 <Col sm={4} >
//                     <h1>Shopping List</h1>
//                 </Col>
//                 </Grid>

 
//         </Container>
//     )
// }

export default Recipes;