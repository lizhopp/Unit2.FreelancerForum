const freelancers = [];

class Freelancer {
  name;
  occupation;
  startingPrice;
  constructor(name, occupation, startingPrice) {
    this.name = name;
    this.occupation = occupation;
    this.startingPrice = startingPrice;
  }
}

function makeTableHeadings(table, ...headerText) {
  const tr = document.createElement("tr");
  for (let header of headerText) {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  }
  table.appendChild(tr);
}

function makeTableRow(table, ...textContent) {
  const row = document.createElement("tr");
  for (let text of textContent) {
    makeTableCell(row, text);
  }
  table.append(row);
}

function makeTableCell(tableRow, content) {
  const cell = document.createElement("td");
  cell.textContent = content;
  tableRow.append(cell);
}

function update(){
  const table = document.querySelector("table")
  freelancers.forEach(freelancer =>{
    makeTableRow(table, freelancer.name, freelancer.occupation, freelancer.startingPrice)
  })
}

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");


  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);
  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */

  const table = document.createElement("table");
  rootContainer.append(table);

  makeTableHeadings(table, "Name", "Occupation", "Starting Price");
  for(freelancer in freelancers){
    makeTableRow(table, freelancer.name, freelancer.occupation, freelancer.startingPrice);
  }

}
init();
setInterval(() => {freelancers.push(new Freelancer("Alice", "Writer", "$30")); update();}, 1000);
setInterval(() => {freelancers.push(new Freelancer("Bob", "Teacher", "$50")); update();}, 2000);
setInterval(() => {freelancers.push(new Freelancer("Carol", "Programmer", "$70")); update();}, 3000);

