import React, { ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, KeyboardEventHandler, MouseEventHandler, useState, } from 'react';
import { filterValuesType } from './App';
import { getValue } from '@testing-library/user-event/dist/utils';
import AddItemForm from './AddItemForm.tsx';
import { SwitchSpan } from './SwitchSpan.tsx';
import { MDBCol } from 'mdb-react-ui-kit';



export type ActionType = {
  index: string,
  title: string,
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<ActionType>
  ClickRemoveTasks: (index: string, UniqueToDoID:string) => void
  FilteredTasks: (value: filterValuesType, UniqueToDoID:string) => void
  AddNewTask: (NewTaskTitle: string, UniqueToDoID:string) => void
  ChangeCheckbox: (IndexId: string, inversion: boolean, UniqueToDoID:string) => void
  filter: filterValuesType
  id: string
  ToDoListsDelete: (UniqueToDoID:string) => void
  ChangeTaskTitle : (Title: string, IndexId: string, UniquieToDoID:string) => void
  ChangeTaskTitleToDo : (Title: string, UniqueToDoID : string) => void
}

export type errorValues = boolean | string

export function ToDo(props: PropsType) {

    const FilteredTasksActiveHandler = () => {
      props.FilteredTasks("active", props.id)
    }
    const FilteredTasksCompletedHandler = () => {
      props.FilteredTasks("completed", props.id)
    }

    function AddItem(title:string){
      props.AddNewTask(title, props.id)
    }

    const ChangeTaskTitleToDo = (Title : string) => {props.ChangeTaskTitleToDo(Title, props.id)}
  
    return <div>

      <h3>
        <SwitchSpan title={props.title} ChangeTaskTitle={ChangeTaskTitleToDo}/> <button onClick={()=>{props.ToDoListsDelete(props.id)}}>-</button>  

      </h3>

      <AddItemForm AddNewItem = {AddItem}/>

      <ul>
        {
          props.tasks.map((l) => { 
            const ClickRemoveTasksHandler = () => { props.ClickRemoveTasks(l.index, props.id)};
            const CheckBoxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {props.ChangeCheckbox(l.index, e.currentTarget.checked, props.id)}
            const ChangeTaskTitle = (Title: string) => {props.ChangeTaskTitle(Title, props.id, l.index)}
            return (
              <li key={l.index} className={(l.isDone === true)? "is-done" : ""}>
                <input type="checkbox" onChange={CheckBoxChangeHandler} checked={l.isDone} /> 

                <SwitchSpan title = {l.title} ChangeTaskTitle = {ChangeTaskTitle}/>



                
                <button onClick={ClickRemoveTasksHandler} style = {{color: "#040"}}>х</button>
              </li>
            )
          })
        }
      </ul>

      <div>
        <button onClick={ () => { props.FilteredTasks("all", props.id)}} className={(props.filter === "all") ? "active" : "" } >  all </button>
        <button onClick={ FilteredTasksActiveHandler } className={(props.filter === "active") ? "active" : "" }> active</button>
        <button onClick={ FilteredTasksCompletedHandler } className={(props.filter === "completed") ? "active" : "" }> complited </button>  
      </div>


    </div>;


  }



