import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class MainTasksTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tasks = [{
    task: "Make 10 phone calls",
    startDate : "23 Jan 2018",
    endDate: "24 Jan 2018",
    timeLeft: "00:02:21:31", // !TEMP - will be recalculated
    executionStatus : "In progress",
    checkStatus : "None"
  },
  {
    task: "Schedule an interview",
    startDate : undefined,
    endDate: "28 Jan 2018",
    timeLeft: "00:02:21:31", // !TEMP - will be recalculated
    executionStatus : "Not started",
    checkStatus : "None"
  },
    {
    task: "Schedule an interview",
    startDate : "22 Jan 2018",
    endDate: "30 Jan 2018",
    timeLeft: "04:02:21:31", // !TEMP - will be recalculated
    executionStatus : "In progress",
    checkStatus : "None"
  }
  ];
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Task</TableHeaderColumn>
            <TableHeaderColumn>Start date</TableHeaderColumn>
            <TableHeaderColumn>End date</TableHeaderColumn>
            <TableHeaderColumn>Time left</TableHeaderColumn>
            <TableHeaderColumn>Execution status</TableHeaderColumn>
            <TableHeaderColumn>Check status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map(task => {
            return (
              <TableRow>
                <TableRowColumn>{task.task}</TableRowColumn>
                <TableRowColumn>{task.startDate || (<RaisedButton label="Start task" primary={true} />) }</TableRowColumn>
                <TableRowColumn>{task.endDate}</TableRowColumn>
                <TableHeaderColumn>{task.timeLeft}</TableHeaderColumn>
                <TableHeaderColumn>{task.executionStatus}</TableHeaderColumn>
                <TableHeaderColumn>{task.checkStatus}</TableHeaderColumn>        
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  }
}

export default MainTasksTable;