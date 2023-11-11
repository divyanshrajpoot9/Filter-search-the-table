# Filter-search-the-table
### Hosted Link : https://divyanshrajpoot9.github.io/Filter-search-the-table/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.

  const populateTableData = () => {
  const myTableRef = document.getElementById("myTable");
  let tableRow = "";

  // Loop through the tableData and generate HTML rows
  for (let i of tableData) {
    const trString = `<tr>
      <td>${i.Name}</td>
      <td>${i.Country}</td>
    </tr>`;
    tableRow += trString;
  }

  // Set the HTML content of the table
  myTableRef.innerHTML = tableRow;
};

Here, we define a function populateTableData which populates the HTML table with data. It retrieves the table element by its id ("myTable") and then iterates over each object in tableData. For each object, it generates an HTML string for a table row (<tr>) with cells (<td>) for the 'Name' and 'Country' properties. The generated HTML rows are concatenated into the tableRow variable. Finally, the HTML content of the table is set to tableRow.

const myInput = document.getElementById('myInput');
myInput.addEventListener('keyup', (e) => {
  // Get user input and convert it to lowercase
  const userInput = e.target.value.toLowerCase();

  // Use filter to find items in tableData that match the user input
  const filterTableData = tableData.filter(item => {
    return item.Name.toLowerCase().includes(userInput);
  });

  const myTableRef = document.getElementById("myTable");
  myTableRef.innerHTML = ""; // Clear the table content
  let tableRow = "";

  // Loop through filtered data and generate HTML rows
  for (let i of filterTableData) {
    const trString = `<tr>
      <td>${i.Name}</td>
      <td>${i.Country}</td>
    </tr>`;
    tableRow += trString;
  }

  // Set the HTML content of the table with the filtered rows
  myTableRef.innerHTML = tableRow;
});

This section deals with the filtering mechanism. It selects the input element with the id "myInput" and adds an event listener for the keyup event. When a key is released in the input field, the event listener is triggered.

const userInput = e.target.value.toLowerCase();: Retrieves the user input from the input field and converts it to lowercase for case-insensitive comparison.

const filterTableData = tableData.filter(item => { ... });: Uses the filter function to create a new array (filterTableData) that includes only the items from tableData where the 'Name' property contains the user input.

const myTableRef = document.getElementById("myTable");: Retrieves the table element.

myTableRef.innerHTML = "";: Clears the current content of the table.

The subsequent loop generates HTML rows for the filtered data and sets the table content with the updated rows, effectively updating the table to display only the rows that match the user's input.

In summary, the script creates an interactive table where users can filter the displayed rows based on the input in a text field. The table is initially populated with data, and as the user types, the displayed rows are dynamically filtered and updated in real-time.
