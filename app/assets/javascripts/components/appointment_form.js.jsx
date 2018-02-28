var AppointmentForm = createReactClass({
  displayName: 'AppointmentForm',

  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function(){
    return(
      <div>
        <h2>Make a new fita</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Fita title'
            value={this.props.input_title}
            onChange={this.handleChange} />
          <input name='appt_time' placeholder='Fita date and time'
            value={this.props.input_appt_time}
            onChange={this.handleChange} />
          <input type='submit' placeholder='Make fita' />
        </form>
      </div>
    )
  }
});
