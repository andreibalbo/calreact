var AppointmentForm = createReactClass({displayName: 'AppointmentForm',
  render: function(){
    return(
      <div>
        <h2>Make a new fita</h2>
        <form>
          <input name='title' placeholder='Fita title' />
          <input name='appt_time' placeholder='Fita date and time' />
          <input type='submit' placeholder='Make fita' />
        </form>
      </div>
    )
  }
});
