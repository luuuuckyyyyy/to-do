import './App.css';
import React, { useState } from 'react';
import { ActionType, ToDo } from './ToDo.tsx';
import AddItemForm from './AddItemForm.tsx';
import { v1 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Col, Container, Row, Card } from "react-bootstrap"


// export function Counter() {
//   let Arr = useState(5)
//   let Count = Arr[0]
//   let SetState = Arr[1]
//   return (
//     <div onClick={()=>{SetState(Count + 1)}}> {Count}</div>
//   ) }



export type filterValuesType = "all" | "completed" | "active"

type UniqueToDoLists = {
  id: string,
  title: string,
  filter: filterValuesType
}




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



  let ToDoListID1 = v1();
  let ToDoListID2 = v1();

  let [ToDoLists, SetToDoLists] = useState<Array<UniqueToDoLists>>([{ id: ToDoListID1, title: "what to learn ", filter: "all" },
  { id: ToDoListID2, title: "what to watch", filter: "all" }]) //массив объектов

  let [NewTasksObj, SetTasksObj] = useState(
    {
      [ToDoListID1]: [{ index: v1(), title: "CSS", isDone: true },
      { index: v1(), title: "JAVA", isDone: false },
      { index: v1(), title: "Python", isDone: true }],

      [ToDoListID2]: [{ index: v1(), title: "Youtube", isDone: true },
      { index: v1(), title: "Pornhub", isDone: true },
      { index: v1(), title: "Cinema", isDone: false },
      { index: v1(), title: "Twitch", isDone: false }]
    }) //объект массивов

    function getRandom(min: number, max: number){
      return Math.floor(Math.random() * (max - min) + min);
    }

  let images = ["./img/beautiful-desktop-animal-pv3a0wo9cys7rt1k.webp", "/img/iStock-1420676204-1536x1020.webp"]




  function ChangeCheckbox(IndexId: string, inversion: boolean, UniqueToDoID: string) {
    const tasks = NewTasksObj[UniqueToDoID].find(t => t.index === IndexId)
    if (tasks) {
      tasks.isDone = inversion;
    }
    SetTasksObj({ ...NewTasksObj })
  }


  function AddNewTask(NewTaskTitle: string, UniqueToDoID: string) {
    let NewTask = { index: v1(), title: NewTaskTitle, isDone: false }
    let AddTask = [NewTask, ...NewTasksObj[UniqueToDoID]]
    NewTasksObj[UniqueToDoID] = AddTask
    SetTasksObj({ ...NewTasksObj })
  }

  function ClickRemoveTasks(index: string, UniqueToDoID: string) {
    let RemoveTask = NewTasksObj[UniqueToDoID].filter(i => i.index !== index)
    NewTasksObj[UniqueToDoID] = RemoveTask
    SetTasksObj({ ...NewTasksObj })
  }

  function FilteredTasks(value: filterValuesType, UniqueToDoID: string) {
    let UniqueToDoFilter = ToDoLists.find(tl => tl.id === UniqueToDoID)
    if (UniqueToDoFilter) {
      UniqueToDoFilter.filter = value
      SetToDoLists([...ToDoLists])
    }

  }


  let ToDoListsDelete = (UniqueToDoID: string) => {
    let LilteredList = ToDoLists.filter(i => i.id !== UniqueToDoID)
    SetToDoLists(LilteredList)
    delete NewTasksObj[UniqueToDoID]
    SetTasksObj({ ...NewTasksObj })

  }


  function AddNewFormTaskTitle(NewFormTitle: string) {
    let AddNewForm: UniqueToDoLists = { id: v1(), title: NewFormTitle, filter: "all" }
    ToDoLists = [AddNewForm, ...ToDoLists]
    SetToDoLists([...ToDoLists])
    NewTasksObj = { [AddNewForm.id]: [], ...NewTasksObj }
    SetTasksObj({ ...NewTasksObj })

  }

  function ChangeTaskTitle(title: string, UniqueToDoID: string, IndexId: string) {
    const tasks = NewTasksObj[UniqueToDoID].find(t => t.index === IndexId)
    if (tasks) {
      tasks.title = title;
    }
    SetTasksObj({ ...NewTasksObj })
  }

  function ChangeTaskTitleToDo(Title: string, UniqueToDoID: string) {
    let ToDoListsTitle = ToDoLists.find(tl => tl.id === UniqueToDoID)
    if (ToDoListsTitle) {
      ToDoListsTitle.title = Title
      SetToDoLists([...ToDoLists])
    }
  }








  // let AddNewFormTaskTitle = (NewFormTitle: string) => {
  //   let NewFormTaskTitle : UniqueToDoLists = {id: v1(), title: NewFormTitle, filter: "all" }
  //   SetToDoLists([NewFormTaskTitle, ... ToDoLists])
  //   SetTasksObj({[NewFormTaskTitle.id] : [], ...NewTasksObj})
  // }


  return <div>

    <Container className='my-5 '>
      <Row className=' w-auto '>
        <AddItemForm AddNewItem={AddNewFormTaskTitle} />
      </Row>



      <Row>
        {
          ToDoLists.map((tl) => {
            let image = images[getRandom(0, images.length)]
            let TasksForToDoList = NewTasksObj[tl.id];
            if (tl.filter === "completed") {
              TasksForToDoList = TasksForToDoList.filter(i => i.isDone === true)
            }
            if (tl.filter === "active") {
              TasksForToDoList = TasksForToDoList.filter(i => i.isDone === false)
            }
            if (tl.filter === "all") {
              TasksForToDoList = TasksForToDoList.filter(i => i.isDone === i.isDone)
            }
            return <Col md = "6">
                <Container>
                  <Row>
                    <Col md="6" className='w-100 my-2'>
                      <Card>
                        <Card.Body>
                        <Card.Img src="https://www.desktopbackground.org/download/1280x900/2012/07/10/418553_pets-animals-wallpapers-38745689-fanpop_2000x1400_h.jpg" alt="Alternative text" />
                          <Card.Text>
                            <ToDo
                              key={tl.id}
                              id={tl.id}
                              title={tl.title}
                              tasks={TasksForToDoList}
                              ClickRemoveTasks={ClickRemoveTasks}
                              FilteredTasks={FilteredTasks}
                              AddNewTask={AddNewTask}
                              ChangeCheckbox={ChangeCheckbox}
                              filter={tl.filter}
                              ToDoListsDelete={ToDoListsDelete}
                              ChangeTaskTitle={ChangeTaskTitle}
                              ChangeTaskTitleToDo={ChangeTaskTitleToDo} />
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
            </Col>
          }
          )
        }
      </Row>


    </Container >





  </div >
}







export default App;
