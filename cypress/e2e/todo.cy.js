import todoPage from "../support/POM/todoPage.js"; //Importo la clase todoPage

describe('Pruebas del Page Object Model', () => {
  beforeEach(() => {
    todoPage.visit();
  })

  it("1. Ingresar Tarea", () =>{
    todoPage.addTodo("Aprender Cypress");
  });
  
  it("2. Marcar tarea como completada", () =>{
    todoPage.addTodo("Aprender Cypress");
    todoPage.toggleTodo(1);
    todoPage.haveCompleted();
  });
  
  it("3. Marcar Tarea como no completada", () =>{
    todoPage.addTodo("Aprender Cypress");
    todoPage.toggleTodo(1);
    todoPage.toggleTodo(1);
    todoPage.todoList()
    todoPage.notHaveCompleted();
  });
  
  it("4. Editar la tarea correctamente", () => {
    todoPage.addTodo("Aprender Cypress");
    todoPage.todoEdit("Tarea Editada");
  })
  
  it("5. Borrar la tarea de la lista", () =>{
    // Agrega una tarea
    todoPage.addTodo("Aprender Cypress");
    todoPage.destroyTodo(1);
  });
  
  it("6. Filtrar adecuadamente las tareas", () =>{
    todoPage.addTodo("Aprender Cypress");
    todoPage.addTodo("Aprender Abeto");
    todoPage.addTodo("Aprender Olivo");
  
    todoPage.toggleTodo(1);
  
    todoPage.filterCompleted();
  
    todoPage.filterActive();
    
    todoPage.filterAll();
  
  });

});