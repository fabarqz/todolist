const toDoArray=[]
let counter=0;

function addToArray(){
 

  const getTask=document.getElementById('inputTask');
  const getDate=document.getElementById('inputDate');

  const task=getTask.value;
  const date=getDate.value;
  toDoArray.push({task,date})

 

  loopThrough(toDoArray);
}

function loopThrough(){
  let mainDiv=document.getElementById('outputContainer')

  let newDiv=document.createElement('div');
  let newTask=document.createElement('p');
  let newDate=document.createElement('p');
  let newButton=document.createElement('button');

  newTask.className='task-paragraph';
  newDate.className='date-paragraph';
  newDiv.className="task-container";
  const arrayItem=toDoArray[counter];
  const{task,date}=arrayItem;

  newTask.innerHTML=`${task}`;
  newDate.innerHTML=`${date}`
  newButton.id='addButton'
  newButton.innerText='Delete';
  newButton.onclick= function deleteMe(){
  mainDiv.removeChild(newDiv);
  }

  newDiv.appendChild(newTask);
  newDiv.appendChild(newDate)
  newDiv.appendChild(newButton);

  mainDiv.appendChild(newDiv);

  counter++;
  console.log(task,date);

}

function testButton(){
  console.log('the script is working');
}