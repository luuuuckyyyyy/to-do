"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importStar(require("react"));
const ToDo_tsx_1 = require("./ToDo.tsx");
const AddItemForm_tsx_1 = __importDefault(require("./AddItemForm.tsx"));
const uuid_1 = require("uuid");
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
const react_bootstrap_2 = require("react-bootstrap");
function App() {
    // let a = [
    //   {
    //     index: v1(),
    //     title: "what to learn"
    //   },
    //   {
    //     index: v1(),
    //     title: "What to watch"
    //   }
    // ]
    // let learn = [
    //   {
    //     index: v1(),
    //     title: "CSS",
    //     isDone: true
    //   },
    //   {
    //     index: v1(),
    //     title: "JAVA",
    //     isDone: false
    //   },
    //   {
    //     index: v1(),
    //     title: "Python",
    //     isDone: true
    //   }
    // ]
    // let watch = [{
    //   index: v1(),
    //   title: "Youtube",
    //   isDone: true
    // },
    // {
    //   index: v1(),
    //   title: "Pornhub",
    //   isDone: true
    // },
    // {
    //   index: v1(),
    //   title: "Cinema",
    //   isDone: false
    // },
    // {
    //   index: v1(),
    //   title: "Twitch",
    //   isDone: false
    // }
    // ]
    let ToDoListID1 = uuid_1.v1();
    let ToDoListID2 = uuid_1.v1();
    let [ToDoLists, SetToDoLists] = react_1.useState([{ id: ToDoListID1, title: "what to learn ", filter: "all" },
        { id: ToDoListID2, title: "what to watch", filter: "all" }]); //массив объектов
    let [NewTasksObj, SetTasksObj] = react_1.useState({
        [ToDoListID1]: [{ index: uuid_1.v1(), title: "CSS", isDone: true },
            { index: uuid_1.v1(), title: "JAVA", isDone: false },
            { index: uuid_1.v1(), title: "Python", isDone: true }],
        [ToDoListID2]: [{ index: uuid_1.v1(), title: "Youtube", isDone: true },
            { index: uuid_1.v1(), title: "Pornhub", isDone: true },
            { index: uuid_1.v1(), title: "Cinema", isDone: false },
            { index: uuid_1.v1(), title: "Twitch", isDone: false }]
    }); //объект массивов
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let images = ["./img/beautiful-desktop-animal-pv3a0wo9cys7rt1k.webp", "/img/iStock-1420676204-1536x1020.webp"];
    function ChangeCheckbox(IndexId, inversion, UniqueToDoID) {
        const tasks = NewTasksObj[UniqueToDoID].find(t => t.index === IndexId);
        if (tasks) {
            tasks.isDone = inversion;
        }
        SetTasksObj(Object.assign({}, NewTasksObj));
    }
    function AddNewTask(NewTaskTitle, UniqueToDoID) {
        let NewTask = { index: uuid_1.v1(), title: NewTaskTitle, isDone: false };
        let AddTask = [NewTask, ...NewTasksObj[UniqueToDoID]];
        NewTasksObj[UniqueToDoID] = AddTask;
        SetTasksObj(Object.assign({}, NewTasksObj));
    }
    function ClickRemoveTasks(index, UniqueToDoID) {
        let RemoveTask = NewTasksObj[UniqueToDoID].filter(i => i.index !== index);
        NewTasksObj[UniqueToDoID] = RemoveTask;
        SetTasksObj(Object.assign({}, NewTasksObj));
    }
    function FilteredTasks(value, UniqueToDoID) {
        let UniqueToDoFilter = ToDoLists.find(tl => tl.id === UniqueToDoID);
        if (UniqueToDoFilter) {
            UniqueToDoFilter.filter = value;
            SetToDoLists([...ToDoLists]);
        }
    }
    let ToDoListsDelete = (UniqueToDoID) => {
        let LilteredList = ToDoLists.filter(i => i.id !== UniqueToDoID);
        SetToDoLists(LilteredList);
        delete NewTasksObj[UniqueToDoID];
        SetTasksObj(Object.assign({}, NewTasksObj));
    };
    function AddNewFormTaskTitle(NewFormTitle) {
        let AddNewForm = { id: uuid_1.v1(), title: NewFormTitle, filter: "all" };
        ToDoLists = [AddNewForm, ...ToDoLists];
        SetToDoLists([...ToDoLists]);
        NewTasksObj = Object.assign({ [AddNewForm.id]: [] }, NewTasksObj);
        SetTasksObj(Object.assign({}, NewTasksObj));
    }
    function ChangeTaskTitle(title, UniqueToDoID, IndexId) {
        const tasks = NewTasksObj[UniqueToDoID].find(t => t.index === IndexId);
        if (tasks) {
            tasks.title = title;
        }
        SetTasksObj(Object.assign({}, NewTasksObj));
    }
    function ChangeTaskTitleToDo(Title, UniqueToDoID) {
        let ToDoListsTitle = ToDoLists.find(tl => tl.id === UniqueToDoID);
        if (ToDoListsTitle) {
            ToDoListsTitle.title = Title;
            SetToDoLists([...ToDoLists]);
        }
    }
    // let AddNewFormTaskTitle = (NewFormTitle: string) => {
    //   let NewFormTaskTitle : UniqueToDoLists = {id: v1(), title: NewFormTitle, filter: "all" }
    //   SetToDoLists([NewFormTaskTitle, ... ToDoLists])
    //   SetTasksObj({[NewFormTaskTitle.id] : [], ...NewTasksObj})
    // }
    return react_1.default.createElement("div", null,
        react_1.default.createElement(react_bootstrap_2.Container, { className: 'my-5 ' },
            react_1.default.createElement(react_bootstrap_2.Row, { className: ' w-auto ' },
                react_1.default.createElement(AddItemForm_tsx_1.default, { AddNewItem: AddNewFormTaskTitle })),
            react_1.default.createElement(react_bootstrap_2.Row, null, ToDoLists.map((tl) => {
                let image = images[getRandom(0, images.length)];
                let TasksForToDoList = NewTasksObj[tl.id];
                if (tl.filter === "completed") {
                    TasksForToDoList = TasksForToDoList.filter(i => i.isDone === true);
                }
                if (tl.filter === "active") {
                    TasksForToDoList = TasksForToDoList.filter(i => i.isDone === false);
                }
                if (tl.filter === "all") {
                    TasksForToDoList = TasksForToDoList.filter(i => i.isDone === i.isDone);
                }
                return react_1.default.createElement(react_bootstrap_2.Col, { md: "6" },
                    react_1.default.createElement(react_bootstrap_2.Container, null,
                        react_1.default.createElement(react_bootstrap_2.Row, null,
                            react_1.default.createElement(react_bootstrap_2.Col, { md: "6", className: 'w-100 my-2' },
                                react_1.default.createElement(react_bootstrap_2.Card, null,
                                    react_1.default.createElement(react_bootstrap_2.Card.Body, null,
                                        react_1.default.createElement(react_bootstrap_2.Card.Img, { src: "https://www.desktopbackground.org/download/1280x900/2012/07/10/418553_pets-animals-wallpapers-38745689-fanpop_2000x1400_h.jpg", alt: "Alternative text" }),
                                        react_1.default.createElement(react_bootstrap_2.Card.Text, null,
                                            react_1.default.createElement(ToDo_tsx_1.ToDo, { key: tl.id, id: tl.id, title: tl.title, tasks: TasksForToDoList, ClickRemoveTasks: ClickRemoveTasks, FilteredTasks: FilteredTasks, AddNewTask: AddNewTask, ChangeCheckbox: ChangeCheckbox, filter: tl.filter, ToDoListsDelete: ToDoListsDelete, ChangeTaskTitle: ChangeTaskTitle, ChangeTaskTitleToDo: ChangeTaskTitleToDo })),
                                        react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary" }, "Go somewhere")))))));
            }))));
}
exports.default = App;
