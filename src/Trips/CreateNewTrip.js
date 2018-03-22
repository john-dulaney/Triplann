// imports
import React, {Component} from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

class CreateNewTrip extends Component {
  constructor(props) {
    super(props);
    // Define initial state
    this.state = {
      duration: '',
      location: '',
      tripType: '',
      remoteURL: `http://localhost:5000/api/`,
      countries: [],
      error: null,
      isLoaded: false,
    };
    //   *************************************************************************************
    //   *
    //   * Fetch Countries json file and push it into an array, sends it to state. Gets pulled in the form JSX
    //   *
    //   *************************************************************************************

    fetch('./countryList.json').then(res => res.json()).then(r => {
      let countryArray = [];
      r.forEach(l => {
        countryArray.push({value: `${l.code}`, label: `${l.name}`});
      });
      this.setState({countries: countryArray});
    });

    // Bind event handler context to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }
  //   *************************************************************************************
  //   *
  //   *         *This function handles XHR request to the api to POST a new trip.
  //   *
  //   *************************************************************************************

  addTrip = trip => {
      console.log(trip)
    fetch(`http://localhost:5000/api/Trip`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(trip),
    })
    //   .then(res => res.json())
    //   .then(r => {
    //     console.log(r);
    //   });
  };

  //   *************************************************************************************
  //   *
  //   *         *This Block of functions are form handlers for the select form
  //   *         * Works in tandom with the JSX to set the selected values into state.
  //   *
  //   *************************************************************************************

  handleSubmit = event => {
    event.preventDefault();
    const trip = {
      duration: this.state.duration,
      location: this.state.location,
      tripType: this.state.tripType,
    };
console.log(trip)
    
    this.addTrip(trip);
  };

  handleFormFieldChange = event => {
    event.preventDefault();
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;

    this.setState(stateToChange);
  };

  handleChangeDuration = duration => {
    this.setState(
      {
        duration: duration.value,
      },
      () => {
        console.log(this.state.duration);
      }
    );
  };

  handleChangeLocation = location => {
    this.setState(
      {
        location: location.value,
      },
      () => {
        console.log(this.state.location);
      }
    );
  };

  handleChangeType = tripType => {
    this.setState(
      {
        tripType: tripType.value,
      },
      () => {
        console.log(this.state.tripType);
      }
    );
  };

  //   *************************************************************************************
  //   *
  //   *         * R E N D E R *
  //   *
  //   * variables set for some reason, I think just for ease of passing and shorthand for some of them
  //   *************************************************************************************

  render() {
    const {duration} = this.state;
    const {location} = this.state;
    const {tripType} = this.state;
    const dur = duration && duration.value;
    const loc = location && location.value;
    const tType = tripType && tripType.value;
    return (
      //   *************************************************************************************
      //   *
      //   *         *Add a trip form. this form collects user input for use in the API call
      //   *
      //   *************************************************************************************

      <div className="AddTripForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div>
            <label>How long do you intend this trip to be?</label>
            <Select
              name="duration"
              id="duration"
              required
              //   value={value}
              onChange={this.handleChangeDuration}
              options={[
                {value: 'time1', label: '1-3 Days'},
                {value: 'time2', label: 'About a week'},
                {value: 'time3', label: '2 weeks'},
                {value: 'time4', label: '3 weeks - 1 month'},
              ]}
            />
          </div>
          <label>Where are you going?</label>
          <div>
            <Select
              name="location"
              id="location"
              required
              //   value={value}
              onChange={this.handleChangeLocation}
              options={this.state.countries}
            />
          </div>
          <label>What activities do you plan on doing?</label>
          <div>
            <Select
              name="duration"
              id="duration"
              required
              //   value={value}
              onChange={this.handleChangeType}
              options={[
                {value: 1, label: 'Skii'},
                {value: 2, label: 'Cruise'},
                {value: 3, label: 'Beach Vacation'},
                {value: 4, label: 'Mountain Climbing'},
                {value: 5, label: 'Business'},
                {value: 6, label: 'Backpacking'},
                {value: 7, label: 'Desert/Arid'},
              ]}
            />
          </div>
          <button>Add a trip</button>
        </form>
      </div>
    );
  }
}

// exports
export default CreateNewTrip;
