var AppointmentsList = createReactClass({displayName: 'AppointmentsList',
  render: function(){
    return(
      <div>
        {this.props.a.map(function(a){
          return(
            <Appointment a={a} />
          )
        })}
      </div>
    )
  }
});
