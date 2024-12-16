class TodoPage{
    
    visit() {
        cy.visit("https://todomvc.com/examples/react/dist/#/");
    }

    addTodo(todoText){
        cy.get(".new-todo")
        .type(`${todoText}{enter}`);
    }

    todoList(){
        return cy.get(".todo-list li");
    }

    haveCompleted(){
        this.todoList()
        .first()
        .should("have.class", "completed");
    }

    notHaveCompleted(){
        this.todoList()
        .first()
        .should("not.have.class", "completed");
    }

    toggleTodo(index){
        cy.get(`.todo-list li:nth-child(${index}) .toggle`)
        .click();
    }

    todoEdit(todoText){
        this.todoList()
        .first()
        .dblclick()
        .find("input")
        .clear()
        .type(`${todoText}{enter}`);
    }
        /*this.todoList()
        .first()
        .find("button.destroy")
        .click({force: true});*/
    destroyTodo(index){
        cy.get(`.todo-list li:nth-child(${index}) .destroy`)
        .click({force: true});
    }

    filterCompleted(){
        cy.contains("Completed").click();

        this.todoList()
        .should("have.length", 1)
        .and("contain.text", "Aprender Cypress");
    }

    filterActive(){
        cy.contains("Active").click();

        this.todoList()
        .should("have.length", 2)
        .and("not.contain.text", "Aprender Cypress");
    }

    filterAll(){
        cy.contains("All").click({force: true});
    }

    clearcompleted(){
        cy.contains('Clear completed').click();
    }
}

export default new TodoPage();