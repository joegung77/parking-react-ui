import React, {Component} from "react";
import ParkingService from "../services/parking.service";

export default class ParkCar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vehicleSize: "SMALL"
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption : event.target.value
        })
    
    }

    formSubmit(event) {
        event.preventDefault(event);
        console.log(this.state.selectedOption)
        var data = {
            vehicleSize : this.state.selectedOption
        }

        console.log(data);

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
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="radio"  checked = {this.state.selectedOption === "SMALL"} onChange = {this.onValueChange} value="SMALL"/>
                    <label htmlFor="small">Small</label><br/>
                    <input type="radio"  checked = {this.state.selectedOption === "MEDIUM"} onChange = {this.onValueChange} value="MEDIUM"/>
                    <label htmlFor="medium">Medium</label><br/>
                    <input type="radio"  checked = {this.state.selectedOption === "LARGE"} onChange = {this.onValueChange} value="LARGE"/>
                    <label htmlFor="large">Large</label><br/>
                    <input type="submit" value="Park Car"/>
                </form>
            </div>
        )

    }
}