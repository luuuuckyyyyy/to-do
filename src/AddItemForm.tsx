import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import { errorValues } from './ToDo';
import "./AddItemForm.module.css";
import { Button, Col, Container, Row } from 'react-bootstrap';




type AddItemFormType = {
  AddNewItem: (NewTaskTitle: string) => void
 
}

function AddItemForm(props: AddItemFormType) {
  let [error, SetError] = useState<errorValues>(false);
  const [NewTaskTitle, SetState] = useState("");

  const AddTask = () => {
    if (NewTaskTitle.trim() !== "") {
      props.AddNewItem(NewTaskTitle.trim());
      SetState("");
    }
    else SetError("Field is requied")
    return
  }

  const OnChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => { SetState(e.currentTarget.value); };
  const onKeyDownTaskTitleHandler = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    SetError(false);
    if (e.key === "Enter") {
      { props.AddNewItem(NewTaskTitle); SetState(""); }
    }
  }

  return <Container className="AddItemForm my-5 d-flex p-2 justify-content-center ">
    <Row className='w-100'>
      <Col md = "10">
        
          <input placeholder = "enter your task here" value={NewTaskTitle}
            onChange={OnChangeTaskTitleHandler}
            onKeyDown={onKeyDownTaskTitleHandler}
            className= {error ? "error" : ""}
            style = {{width: "100%"}}
            />
      </Col>
      
        <Col md ="2">
          <Button variant="primary" onClick={AddTask}>+</Button>
          {error ? <div className='error-massage'> {error} </div> : null}
        </Col>
    </Row>
  </Container>

};


export default AddItemForm;