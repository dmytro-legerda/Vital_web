const input = document.querySelector('#input_field');
const newUL = document.querySelector('#items');

input.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    if (!this.value) return;
      let newLI = document.createElement('li');
      const newTask = this.value;
      newLI.innerText = newTask;
      const newCheckbox = document.createElement('input')
      newCheckbox.type = 'checkbox';
      newLI.appendChild(newCheckbox);
      newUL.appendChild(newLI);
      this.value = '';
      
      const active = document.querySelector('.active');
      active.appendChild(newLI);

      newCheckbox.addEventListener('click', function(e) {
        newLI.style.textDecoration = "line-through";
        const completedTasks = document.querySelector('.completed');
        completedTasks.appendChild(newLI);
      })

 
  }
})





// const container = document.querySelector('.container');
// const newUL = container.createElement('ul');
// const newLI = newUL.appendChild('li');
