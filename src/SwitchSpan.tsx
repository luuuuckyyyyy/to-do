import React, { ChangeEvent, useState } from 'react';


type SwithSpanPropsType = {
  title: string;
  ChangeTaskTitle : (Title : string) => void
};




export function SwitchSpan(props: SwithSpanPropsType) {
  const [Switcher, SetSwitcher] = useState(true);
  const [Title, SetTitle] = useState(props.title);

  const ActivateSwitcherHandler = () => SetSwitcher(false);
  const DeactivateSwitcherHandler = () =>  {SetSwitcher(true); props.ChangeTaskTitle(Title)}
  const OnChangeTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {SetTitle(e.currentTarget.value);}
  const KeyDownDeactivateSwitherHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      {SetSwitcher(true); props.ChangeTaskTitle(Title)}
    }

  }
  
  return Switcher 
  ? <span onDoubleClick ={ActivateSwitcherHandler}>{props.title} </span>
  : <input autoFocus onBlur={DeactivateSwitcherHandler} onKeyDown={KeyDownDeactivateSwitherHandler} onDoubleClick = {DeactivateSwitcherHandler} value = {Title} onChange={OnChangeTaskHandler}/>;


}

