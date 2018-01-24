import React, {Component} from 'react';
import MainAppBar from './MainAppBar/MainAppBar.component.jsx';
import MainTasksTable  from './MainTasksTable/MainTasksTable.component.jsx';

class MainContentContainer extends Component {

  render() {
    return (
      <div>
        <div>
          <div>
            <MainAppBar />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <MainTasksTable />
          </div>
        </div>
      </div>      

    );
  }
}

export default MainContentContainer;