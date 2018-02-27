//const createReactClass = require('create-react-class');
var Appointments = createReactClass({displayName: 'Appointments',
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList a={this.props.appointments}/>
      </div>
    )
  }
});
