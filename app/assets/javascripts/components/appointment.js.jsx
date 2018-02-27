var Appointment = createReactClass({displayName: 'Appointment',
  render: function(){
    return(
      <div>
        <h3>{this.props.a.title}</h3>
        <p>{this.props.a.appt_time}</p>
      </div>
    )
  }
});
