import alt from '../alt';
import MissionListActions from '../actions/MissionListActions';
import TaskActions from '../actions/TasksActions';
import AddMissionActions from '../actions/AddMissionActions';

class MissionListStore {
  constructor() {
    this.bindActions(MissionListActions);
    this.bindActions(TaskActions);
    this.bindAction(AddMissionActions.addMissionSuccess, this.handleAddMissionSuccess);
    this.missions = [];
    this.isDone;
    this.missionId = '';
  }

  onGetMissionsSuccess(data) {
    this.missions = data;
  }

  onChangeStatus(event) {
    this.isDone = event.target.checked;
    this.missionId = event.target.parentNode.parentNode.id;
    MissionListActions.updateStatus(this.missionId, this.isDone);
  }

  onUpdateMissionsSuccess(data) {
    for (var i in this.missions) {
      if (this.missions[i]._id == this.missionId) {
        this.missions[i].isDone = this.isDone;
        this.missions.splice(i, 1);
      }
    }
  }

  onUpdateMissionsFail(errorMessage) {
    alert(errorMessage);
  }

  handleUpdateMissionsSuccess(data){
    MissionListActions.getMissions();
  }

  handleAddMissionSuccess(data){
    MissionListActions.getMissions();
  }

  onSelectToDo(event){
    var toDoCheck = event.target.parentNode.childNodes[0].checked;
    var doneCheck = event.target.parentNode.childNodes[2].checked;
    var isDone;

    if(toDoCheck && !doneCheck){
      isDone = [false,false];
    }

    if(toDoCheck && doneCheck){
      isDone = [false,true];
    }

    if(!toDoCheck && doneCheck){
      isDone = [true,true];
    }

    if(!toDoCheck && !doneCheck){
      isDone = null;
    }
    var status;
    if(isDone){
      status = {$in:isDone}
    }

    var para = {type:"TASK",isDone:status};
    MissionListActions.getMissions(para);
  }

  onSelectDone(event){
    var toDoCheck = event.target.parentNode.childNodes[0].checked;
    var doneCheck = event.target.parentNode.childNodes[2].checked;
    var isDone;

    if(toDoCheck && !doneCheck){
      isDone = [false,false];
    }

    if(toDoCheck && doneCheck){
      isDone = [false,true];
    }

    if(!toDoCheck && doneCheck){
      isDone = [true,true];
    }

    if(!toDoCheck && !doneCheck){
      isDone = null;
    }

    var status;
    if(isDone){
      status = {$in:isDone}
    }

    var para = {type:"TASK",isDone:status};
    MissionListActions.getMissions(para);
  }

}

export default alt.createStore(MissionListStore);