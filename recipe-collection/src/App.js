// import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }

  // addRecipe = (e) => {
  //   e.preventDefault()
  //   this.setState({listItem: [
  //       {
  //         name: [...this.state.newRecipeName],
  //       }
  //     ]
  //   })
  // }


  submitRecipe = (event) => {
  //   event.preventDefault()
  //   this.setState({recipes: [
  //       {
  //         name: this.state.newRecipeName,
  //         instructions :this.state.newRecipeInstructions
  //       }
  //     ]
  //   })
  // }
  let newRecipe=
    {
      name: this.state.newRecipeName,
      instructions :this.state.newRecipeInstructions
    };

    this.setState({recipes: [newRecipe, ...this.state.recipes]})

    this.setState({
      newRecipeName:'',
      newRecipeInstructions: "",
    })

  }

  handleChange = (event) => {
    event.preventDefault()
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.value});
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          id="newRecipeName"
          name="newRecipeName"
          onChange={this.handleChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions"
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit"/>
      </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        <ul>
        {this.state.recipes.map(recipe => <li key={recipe.name}> { recipe.name } </li>)}
        </ul>
        {
          this.state.isAddRecipeFormDisplayed
          ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
          // onClick={() => { func1(); func2();}}>Test Link</a>
        }
        {
          this.state.recipes.length > 0 ?
          <ul>
            {/* <li>{ this.state.recipes[0].name }</li> */}
          </ul> :
          <p>There are no recipes to list.</p>
        }
      </div>
    )
  }
}

export default App;