import React from 'react';
import AddMissionStore from '../stores/AddMissionStore';
import AddMissionActions from '../actions/AddMissionActions';

class AddMission extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddMissionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddMissionStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddMissionStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    var name = this.state.name.trim();
    if (name) {
      AddMissionActions.addMission(name);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="row flipInX animated">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className='panel-heading'>Add Mission</div>
              <div className="panel-body">
                <div role="form" className="form-horizontal" >
                  <div className="col-sm-10">
                    <input type='text' className="form-control" ref='nameTextField' value={this.state.name}
                           onChange={AddMissionActions.updateName} autoFocus/>
                  </div>
                  <div className="col-sm-2">
                    <button type='submit' className='btn btn-primary btn-sm' onClick={this.handleSubmit.bind(this)}>   Add   </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddMission;


