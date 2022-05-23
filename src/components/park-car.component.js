import React, {Component} from "react";
import ParkingService from "../services/parking.service";

export default class ParkCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
              vehicleSize: "SMALL"
            };
            this.onValueChange = this.onValueChange.bind(this);
                this.formSubmit = this.formSubmit.bind(this);
      }
    
    onValueChange(event) {
          this.setState({
            selectedOption: event.target.value
          });
        }
    
     formSubmit(event) {
          event.preventDefault();
          console.log(this.state.selectedOption)
           var data = {
                  vehicleSize: this.state.selectedOption,
    
                };
    
                console.log(data)
    
                ParkingService.parkCar(data)
                  .then(response => {
                    this.setState({
                      vehicleSize: response.data.vehicleSize,
                       submitted: true
                    });
                    console.log(response.data);
                  })
                  .catch(e => {
                    console.log(e);
                  });
              }
    
    
      render() {
          return (
            <form onSubmit={this.formSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="SMALL"
                    checked={this.state.selectedOption === "SMALL"}
                    onChange={this.onValueChange}
                  />
                  Small
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="MEDIUM"
                    checked={this.state.selectedOption === "MEDIUM"}
                    onChange={this.onValueChange}
                  />
                  Medium
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="LARGE"
                    checked={this.state.selectedOption === "LARGE"}
                    onChange={this.onValueChange}
                  />
                  Large
                </label>
              </div>
              <div>
               Vehicle Size is : {this.state.selectedOption}
              </div>
              <button className="btn btn-default" type="submit">
                Submit
              </button>
            </form>
          );
        }




    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         size: "SMALL"
    //     }
    //     this.onValueChange = this.onValueChange.bind(this);
    //     this.formSubmit = this.formSubmit.bind(this);
    // }

    // onValueChange(event) {
    //     this.setState({
    //         selectedOption : event.target.value
    //     })
    
    // }

    // formSubmit(event) {
    //     event.preventDefault(event);
    //     var data = {
    //         vehicleSize : this.state.selectedOption
    //     }

    //     console.log(data);

    //     ParkingService.parkCar(data)
    //         .then(response => {
    //             this.setState({
    //                 vehicleSize: response.data.vehicleSize,
    //                 submitted: true
    //             });
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.formSubmit}>
    //                 <input type="radio" id="small" checked = {this.state.selectedOption === "Small"} onChange = {this.onValueChange} value="SMALL"/>
    //                 <label htmlFor="small">Small</label><br/>
    //                 <input type="radio" id="medium" checked = {this.state.selectedOption === "Mediuml"} onChange = {this.onValueChange} value="MEDIUM"/>
    //                 <label htmlFor="medium">Medium</label><br/>
    //                 <input type="radio" id="large" checked = {this.state.selectedOption === "Large"} onChange = {this.onValueChange} value="LARGE"/>
    //                 <label htmlFor="large">Large</label><br/>
    //                 <input type="submit" value="Park Car"/>
    //             </form>
    //         </div>

    //     )

    // }
}