# solo-project

/\*
SOLO PROJECT

CRUD APP => PERN?

Prompt:
Create an app that converts your recipe measurements into uniform metric units for precise results every time.  
 -CREATE recipes
-READ (retrieve) recipes
-UPDATE recipes
-DELETE recipes
(extensions: sign in, nav bar on top )

name: mise

(CREATE) ADD NEW RECIPE
Recipe Name: input box

    Unit Amount: input box (number)
    Measurement Unit: drop down (cups, tablespoon, teaspoon, oz)
    Recipe Ingredient: input box/drop down?
    (start with 6 sets)

    Add More Ingredients: button adds 3 more sets

    Directions: large input box

    Add Recipe: button
      -store in recipe cards/ their own links or pages?

(READ) FIND RECIPES
Search Input Field and Button
Page that stores all recipe cards/links
Routes to '/find-recipes'
SQL queries to find recipes based on user input and returns the recipe

UPDATE RECIPES ?????
In recipe link, pulls up input fields filled in with current inputs
Allow user to change units

DELETE RECIPES
Find the recipe and delete it.

Other things to do:
-page not found for an invalid link

[Page Details:]
Recipe Index Button (top right) => '/recipe-index'

Header: App Name/Logo

line break

Header 3: blurb

line break

HOME PAGE:
div class container
div class outerBox
Header 1: Convert Recipe
div class innerBox
'Recipe Name' input box #recipe-name
'Unit Amount' input box #unit-amount (numbers only)
'Measurement Type' drop down menu (cups, tbsp, tsp, oz?)
'Ingredient' input box? drop down menu?

        'Add More Ingredients' button
        (populates 3 more rows of boxes)

        ~convert button?~

        'Directions' input box (large)
          ~'Oven Temp' input box~
          ~'Time'  input box~
        'Save Recipe' Button

RECIPE INDEX PAGE: (or just populate it below!)
div class container
div class outerBox
Header 1: Recipe Index
div class innerBox
h3 'Recipes'
div class recipeBox
p tag recipeName
'See More' button
'Edit Recipe' button
'Delete Recipe' button

\*

[DEPENDENCIES]

"dependencies": {
"react": "^16.12.0",
"react-dom": "^16.12.0"
"react-hot-loader": "^4.6.3",
"react-router": "^4.3.1",
"react-router-dom": "^4.3.1"
"express": "^4.16.3",
"node-fetch": "^2.3.0",
//"prop-types": "^15.6.1", //? from build tools
//"gulp": "^4.0.2", // ? from build tools
//"browserify": "^17.0.0", //from build tools
},
"devDependencies": {
"@babel/core": "^7.7.2",
"@babel/preset-env": "^7.7.1",
"@babel/preset-react": "^7.7.0",
"babel-loader": "^8.0.6",
"concurrently": "^6.4.0",
"cross-env": "^7.0.3",
"css-loader": "^6.5.1",
"eslint": "^7.12.1",
"eslint-import-resolver-webpack": "^0.13.0",
"eslint-plugin-import": "^2.22.1",
"eslint-plugin-jsx-a11y": "^6.4.1",
"eslint-plugin-react": "^7.21.5",
"html-loader": "^0.5.5",
"html-webpack-plugin": "^5.5.0",
//"isomorphic-fetch": "^3.0.0", //? build tools
"copy-webpack-plugin": "^9.0.1",
"webpack": "^5.62.1",
"webpack-cli": "^4.9.1",
"webpack-dev-server": "^4.4.0",
"file-loader": "^6.2.0",
"nodemon": "^2.0.15",
"style-loader": "^3.3.1",
"url-loader": "^4.1.1",
"webpack-hot-middleware": "^2.24.3"
}

/\*
CREATE TABLE heroes (
\_id SERIAL PRIMARY KEY,
login VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(50) UNIQUE NOT NULL,
fullName VARCHAR(50),
birthdate VARCHAR,
powers VARCHAR(50),
age INT
);

//query
const queryStr = `INSERT INTO heroes (login, password, fullName, birthdate, powers, age) VALUES ('tony', '1234' ,'Tony Stark', '1996-03-27', 'React,Redux,Express', 25 )`;

\*/
