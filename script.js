const tableData = [
        {
            Name: "Alfreds Futterkiste",
            Country: "Germany",
        },
        {
            Name: "Berglunds snabbkop",
            Country: "Sweden",
        },
        {
            Name: "Island Trading",
            Country: "UK",
        },
        {
            Name: "Koniglich Essen",
            Country: "Germany",
        },
        {
            Name: "Laughing Bacchus Winecellars",
            Country: "Canada",
        },
        {
            Name: "Magazzini Alimentari Riuniti",
            Country: "Italy",
        },
        {
            Name: "North/South",
            Country: "UK",
        },
        {
            Name: "Paris specialites",
            Country: "France",
        },
        {
            Name: "Cafe de Paris",
            Country: "France",
        },
        {
            Name: "Pasta Palace",
            Country: "Italy",
        },
        {
            Name: "Quick Bites",
            Country: "USA",
        },
        {
            Name: "Sushi Haven",
            Country: "Japan",
        },
        {
            Name: "Taco Time",
            Country: "Mexico",
        },
        {
            Name: "Burger Joint",
            Country: "INDIA"
        },
        {
            Name: "Pizza Palace",
            Country: "INDIA"
        },
        {
            Name: "Taco Haven",
            Country: "Australia"
        }
];


// console.log(myTableRef);
const populateTableData = () => {
    const myTableRef = document.getElementById("myTable");
    let tableRow = "";
      
    for(let i of tableData){
        const trString = `<tr>
        <td>${i.Name}</td>
        <td>${i.Country}</td>
    </tr>`; 
    tableRow += trString;
    }
    myTableRef.innerHTML = tableRow;
};

populateTableData();

const myInput = document.getElementById('myInput');
myInput.addEventListener('keyup', (e) => {
  const userInput = e.target.value.toLowerCase();
 const filterTableData = tableData.filter(item => {
    if(item.Name.toLowerCase().includes(userInput)){
        return true;
    }
    return false;
  });
  const myTableRef = document.getElementById("myTable");
  myTableRef.innerHTML = "";
  let tableRow = "";
      
    for(let i of filterTableData){
        const trString = `<tr>
        <td>${i.Name}</td>
        <td>${i.Country}</td>
    </tr>`; 
    tableRow += trString;
    }
    myTableRef.innerHTML = tableRow;
});