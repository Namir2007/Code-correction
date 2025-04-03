var items = [];
var tasks = [];

function addItem() {
  let input = document.getElementById("itemInput");
  let item = input.value;
  if (item != "") items.push({ name: item, bought: false });
  input.value = "";
  renderItems();
}

function renderItems() {
  document.getElementById("shoppingList").innerHTML = "";
  for (var i = 0; i < items.length; i++) { // ovdje sam promjenio da petlja ne prelazi duzinu niza
    let itemElement = document.createElement("div");
    itemElement.className = "item";

    if (items[i].bought) { // ovdje sam sklonio true zato sto nam nije potrebno jer ako je item.bought true onda je dovoljno da samo napisemo item.bought
      itemElement.classList.add("bought");
    }

    itemElement.innerHTML =
      "<span>" +
      items[i].name +
      "</span><button onclick='toggleBought(" +
      i +
      ")'>Toggle Bought</button><button onclick='deleteItem(" +
      i +
      ")'>Delete</button>";

    document.getElementById("shoppingList").appendChild(itemElement);
  }
}

function toggleBought(index) {
  if (index >= 0 && index < items.length) { // ovdje sam dodao da index mora biti manji ili jednak broju elemenata u nizu jer bi moglo doci do greske da izbaci nepostojeci index
    items[index].bought = !items[index].bought;
    renderItems();
  }
}

function deleteItem(index) {
  if (index >= 0 && index < items.length) { // ovdje sam dodao if petlju kao i za toggleBought isti razlog
    items.splice(index, 1); // ovdje smo imali bug kada se klikne na delete button izbrise sve elemente niza, zato sam dodao 1 kao drugi parametar u splice metodu i zbog toga ce se prisati samo taj item koji smo kliknuli
    renderItems();
  }
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
  if (task != "") { // ovdje sam u if petlju stavio funkciju renderTasks() kako bi se automatski azurirala lista zadataka kad se dodje novi zadatak
    tasks.push({ name: task, completed: false });
    input.value = "";
    renderTasks();
  }
}


function renderTasks() {
    let taskList = document.getElementById("taskList"); // ovdje sam pozvao div koji sam kreirao u html-u za taskove jer mi se ne ispisuju na klik buttona
    taskList.innerHTML = ""; // Dodano kako bi se lista pravilno osvježavala
  
    tasks.forEach((task, index) => { // ovdje sam koristio forEach metodu umjesto for petlje
      let taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.dataset.index = index; // Dodano kako bi se tačno pratili indeksi
  
      if (task.completed) {
        taskElement.classList.add("completed");
      }
  
      taskElement.innerHTML = `<span>${task.name}</span>
          <button onclick='toggleCompleted(${index})'>Toggle Completed</button>
          <button onclick='deleteTask(${index})'>Delete</button>`;
      
      taskList.appendChild(taskElement); // ovdje sam dodao novi element u div koji smo kreirali u html-u
    });
}

function toggleCompleted(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

window.onload = function () {
  renderItems();
  renderTasks();
};
