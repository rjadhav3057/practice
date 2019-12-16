import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Employee from "./Employee";
import Department from "./Department";
import Leave from "./Leave";
import Student_Form from './Student_Form'

export default function Content() {
    return (
        <div>  
        <Switch >
          <Route path='/employee' component={Employee} />
          <Route path='/department' component={Department} />
          <Route path='/leave' component={Leave} />
          <Route path="/student" component={Student_Form}/>
        </Switch>
        </div>
    )
}
