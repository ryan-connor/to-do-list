//TODO: task object factory function, put into it's own module later

const Task = (title, desc) => {

    let complete = false;
    let completeStatus = () => {
        return complete;
    }

    let toggleComplete = () => {
        if (complete===false) {
            complete=true;
        }
        else {
            complete=false;
        }
    };

    let currTitle = title;
    let editTitle = (txt) => {
        currTitle= txt;       
    };

    let getCurrTitle = () => {
        return currTitle;
    }

    let currDesc = desc;
    let editDesc = (txt) => {
        currDesc= txt;
    };

    let getCurrDesc = () => {
        return currDesc;
    };

    return {completeStatus, toggleComplete, editTitle, editDesc, getCurrTitle, getCurrDesc};

};


//test task object

let laundry = Task("Do Laundry","Need to do my laundry today");


//project object factory function

const Project = (title) =>{

let currTitle= title;
let getTitle= () => {
    return currTitle;
};
let editTitle= (txt) => {
    currTitle=txt;
};
let projectTasks = [];
let getProjectTasks = () =>{
    return projectTasks;
}
let addTask = (task) => {
    projectTasks.push(task);
};
//might need to mess with how to pass task/index for removal purposes, goes with storing index in html
let removeTask = (index) => {
    projectTasks[index]=""; //just sets item to an empty string instead of splicing it out since want to maintain all other index positions
};

    return {getTitle, editTitle, addTask, removeTask,projectTasks, getProjectTasks};
};

let newProj = Project ("cleaning");


//Dom/Display module

const domDisplay = (() => {

//reference for a single task
/* <div class="task">
<div class="checkCont"><input type="checkbox" class="checkmark"></div>
<div class="taskContent">
    <div class="taskTitle">
        <textarea value="" placeholder="Take out Trash">Take out Trash</textarea>
    </div>
    <div class="taskDesc">
        <textarea type="text" value="" placeholder="Remember to take the trash out by 7PM">Remember to take the trash out by 7PM</textarea>
    </div>
</div>
<div class="deleteTask"><div id="delKey">X</div></div>     
</div> */

    //display an individual task
    //create all elements, add relevant attributes/classes
    //append in order that is needed

//note need to add in all other attributes like values, placeholders, etc

    let contentContainer = document.getElementById("content"); //task content div, parent of all tasks displayed, might not need to do this one dynamically
    //contentContainer.classList.toggle("task");

    //need to include contTitle

    let taskContainer = document.createElement("div");
    taskContainer.classList.toggle("task");
    contentContainer.appendChild(taskContainer)
    

    let checkCont = document.createElement("div");
    checkCont.classList.toggle("checkCont");
    taskContainer.appendChild(checkCont);

    let checkmark = document.createElement("input");
    checkmark.classList.toggle("checkmark");
    checkCont.appendChild(checkmark);

    let taskContent = document.createElement("div");
    taskContent.classList.toggle("taskContent");
    taskContainer.appendChild(taskContent);

    let taskTitle = document.createElement("div");
    taskTitle.classList.toggle("taskTitle");
    taskContent.appendChild(taskTitle);


    let titleText = document.createElement("textarea");
    taskTitle.appendChild(titleText);


    let taskDesc = document.createElement("div");
    taskDesc.classList.toggle("taskDesc");
    taskContent.appendChild(taskDesc);

    let descText = document.createElement("textarea");
    taskDesc.appendChild(descText);

    let delCont = document.createElement("div");
    let delKey = document.createElement("div");










    //display project with tasks

    //remove task from visual

    //remove project from visual

    //in html/logic for editing stuff, need to hook it up with input/forms



return {};

})();