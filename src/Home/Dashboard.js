import React, {Component} from 'react';
import DisplayCheckList from '../Checklist/DisplayCheckList';
import ChecklistApi from '../Checklist/ChecklistApi';
import ErrorBoundary from '../Common/ErrorBoundary';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ChecklistApi />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Dashboard;
