//import update from 'react-addons-update';
//var update = require('react-addons-update')
//const createReactClass = require('create-react-class');
var Appointments = createReactClass({
  displayName: 'Appointments',

  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'fitas',
      appt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var appointment = {title: this.state.title, appt_time: this.state.appt_time}
    $.post('/appointments', {appointment: appointment}).done(function(data){
                                                this.addNewAppointment(data);
                                                }.bind(this));
  },

  addNewAppointment: function(appointment) {
    var appointments = this.state.appointments.slice()
    appointments.push(appointment);
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList a={this.state.appointments}/>
      </div>
    )
  }
});
