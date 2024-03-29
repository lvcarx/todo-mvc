/**
 * 
 */
class TodoItem {
    constructor(id, content, done, favorite) {
        this.id = id;
        this.content = content;
        this.done = done;
        this.favorite = favorite;
    }

    displayTodoItem() {
        const todoItems = document.getElementById('todoItems');
        const todoItemWrapper = document.createElement("div");
        const todoItemWrapperText = document.createElement("p");

        todoItemWrapper.setAttribute('id', this.id);
        todoItemWrapper.setAttribute('class', 'todoItem');

        todoItemWrapperText.textContent = this.content;
        todoItemWrapperText.classList.add('edit');

        todoItemWrapper.append(todoItemWrapperText);
        todoItems.append(todoItemWrapper);

       
        if (this.favorite) {
            todoItemWrapper.classList.add('favorite');
        }
        if (this.done) {
            todoItemWrapper.classList.add('done');
        }

        const controlWrapper = document.createElement("div");
        controlWrapper.setAttribute('class', 'controls');
        todoItemWrapper.append(controlWrapper);

        // add controls
        this._addFavorite(controlWrapper);
        this._addDone(controlWrapper);
        this._addDelete(controlWrapper);        
    }

    _addFavorite(controlWrapper) {
        const favorite = document.createElement("a");
        const favoriteImg = document.createElement("img");
        favoriteImg.setAttribute('src', './img/favorite.svg');
        favoriteImg.setAttribute('class', 'controlBtn favorite');
        favorite.setAttribute('class', 'favorite');

        favorite.append(favoriteImg);
        controlWrapper.append(favorite);

        
    }
    _addDone(controlWrapper) {
        const done = document.createElement("a");
        const doneImg = document.createElement("img");
        done.setAttribute('class', 'done');
        done.append(doneImg);
        controlWrapper.append(done);
    }
    _addDelete(controlWrapper) {
        const deleteItem = document.createElement("a");
        const deleteImg = document.createElement("img");
        deleteItem.setAttribute('class', 'controlBtn delete');
        deleteImg.setAttribute('src', './img/close.svg');
        deleteImg.setAttribute('class', 'delete');
        deleteItem.append(deleteImg);
        controlWrapper.append(deleteItem);
    }
}

module.exports = TodoItem;