var items = []; // kreira prazan niz za unos itema za shooping
var tasks = []; // kreira prazan niz za unos zadataka

function addItem() { // kreira se funkcija za unos itema u niz
    let input = document.getElementById("itemInput"); // uzima se input polje iz html kako bi ga mogli koristiti u js
    let item = input.value ; // poziva se vrijednost unosa iz input polja
    if (item != "") items.push({name: item, bought: false}); // ako unos nije prazan, unos se dodaje u niz items
    input.value = "" // nakon unosa, input polje se restartuje da ne bude nista u njemu
    renderItems() // poziva se funkcija za prikaz itema
} 

function renderItems() { // funkcija za prikaz itema
    document.getElementById("shoppingList").innerHTML = "" // prazni se sadržaj diva iz htmla koji sadrži iteme
    for (var i = 0; i <= items.length; i++) { // kreira se petlja za prolazak kroz niz itema koja ide do kraja niza i pocinje od 0 tj. pocetka
        let itemElement = document.createElement("div") // kreira se novi div koji će sadržavati item
        itemElement.className = "item" // dodaje se klasa item da bi se moglo kasnije uređivati u css

        if(items[i].bought == true) { // ako je item kupljen prikazat ce se kao kupljen
            itemElement.classList.add("bought") // dodaje se klasa bought-u da bi se mogla uređivati u css
        }

        itemElement.innerHTML = "<span>" + items[i].name + "</span><button onclick='toggleBought(" + i + ")'>Toggle Bought</button><button onclick='deleteItem(" + i + ")'>Delete</button>" // prikazuje se ime itema i dva buttona za toggle i delete koji ce se pozivati na klik

        document.getElementById("shoppingList").appendChild(itemElement) // dodaje se novi div u div iz htmla koji sadrži iteme 
    }
}

function toggleBought(index) { // funkcija za krizanje kupljenih itema
    items[index].bought = !items[index].bought // krizanje kupljenih itema, ako item nije kupljen onda postaje kupljen i obrnuto
    renderItems() // poziva se funkcija za prikaz itema
}

function deleteItem(index) { // funkcija za brisanje itema
    items.splice(index) // brise se item iz niza
    renderItems() // poziva se funkcija za prikaz itema
}

function addTask() { // funkcija za dodavanje zadataka
    let input = document.getElementById("taskInput") // uzima se input polje iz html kako bi ga mogli koristiti u js
    let task = input.value // poziva se vrijednost unosa iz input polja
    if (task != "") tasks.push({name: task, completed: false}); // ako unos nije prazan unos se dodaje u niz tasks
    input.value = "" // nakon unosa input polje se restartuje da ne bude nista u njemu
    renderTasks() // poziva se funkcija za prikaz zadataka
}

function renderTasks() { // funkcija za prikaz zadataka ipak potrebna za Task
    document.getElementById("taskList").innerHTML = "" // prazni se sadržaj diva iz htmla koji sadrži zadatak
    for (var i = 0; i <= tasks.length; i++) { // kreira se petlja za prolazak kroz niz zadataka koja ide do kraja niza i pocinje od 0 tj. pocetka
        let taskElement = document.createElement("div") // kreira se novi div koji će sadržavati zadatak
        taskElement.className = "task" // dodaje se klasa task da bi se moglo kasnije uređivati u

        if(tasks[i].completed == true) { // ako je zadatak završen prikazat će se kao završen
            taskElement.classList.add("completed") // dodaje se klasa completed da bi se mogla uređivati u css
        }

        taskElement.innerHTML = "<span>" + tasks[i].name + "</span><button onclick='toggleCompleted(" + i + ")'>Complete</button><button onclick='deleteTask(" + i + ")'>Delete</button>" // prikazuje se ime zadataka i dva buttona za complete i delete koji će se pozivati na klik

        document.getElementById("taskList").appendChild(taskElement) // dodaje se novi div u div iz htmla koji sadrži zadatak
    }
}

function toggleCompleted(index) { // funkcija za krizanje završenih zadataka
    tasks[index].completed = !tasks[index].completed // krizanje završenih zadataka, ako zadatak nije završen onda postaje završen i obrnuto
    renderTasks() // poziva se funkcija za prikaz zadataka
}

function deleteTask(index) { // funkcija za brisanje zadataka
    tasks.splice(index) // brise se zadatak iz niza
    renderTasks() // poziva se funkcija za prikaz zadataka
}

window.onload = function() { // funkcija koja se poziva kada se stranica otvori
    renderItems() // poziva se funkcija za prikaz itema
    renderTasks() // poziva se funkcija za prikaz zadataka
}