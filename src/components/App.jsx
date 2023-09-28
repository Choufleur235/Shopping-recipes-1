import React, { useState } from 'react';
import Heading from "./Heading";
import Footer from "./Footer";
import RecipeViewer from "./RecipeViewer";
import RecipeEditor from './RecipeEditor';


// const ViewRecipesContext = createContext(false);

// const ViewRecipes = useContext(ViewRecipesContext);


//..............this isnt yet .............

//...........this is working..................................................................
// const addNewRecipe = false;

function App() {

    const [addNewRecipe, setAddNewRecipe] = useState(true);

    // const [recipes, setRecipes] = useState(listRecipes);
    // const [selectedRecipe, setSelectedRecipe] = useState(["blah"]);

    return (
        <div>
            <Heading/>

            {addNewRecipe ? 
             
                  
            <RecipeViewer 
            setAddNewRecipe={setAddNewRecipe}
            />
            : 
            <RecipeEditor/>
            
            }

            <Footer/>
        </div>
    )
        
}

{/* <div>
    <div className="container">
        <div className="grid-item" style={{gridArea: "header"}}><Heading/></div>
        <div className="grid-item box recipes" style={{gridArea: "recipes"}}><Recipes/></div>
        <div className="grid-item box shopping" style={{gridArea: "shopping"}}><Shopping/></div>
        <div className="grid-item" style={{gridArea: "right"}}><h3>Right</h3></div>
        <div className="grid-item" style={{gridArea: "footer"}}><Footer /></div>
    </div>
</div> */}

export default App;