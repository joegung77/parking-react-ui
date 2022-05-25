import React, {Component} from "react";
import ParkingService from "../services/parking.service";

export default class ParkCar extends Component {

    constructor() {
        super()
        this.state = {
            vehicleSize: ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            vehicleSize : e.target.value
        })
    
    }

    formSubmit(e) {
        e.preventDefault();
        var data = {
            vehicleSize : this.state.vehicleSize
        }


        ParkingService.parkCar(data)
            .then(response => {
                alert(response.data);
            })
            .catch(e => {
                console.log(e);
                alert(e.response.data);
            });

        this.setState({
            vehicleSize : ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="radio" 
                            id = "small"
                            checked = {this.state.vehicleSize === "SMALL"} 
                            onChange = {this.onValueChange} value="SMALL"/>
                    <label htmlFor = "small">Small</label><br/>
                    <input type="radio" 
                            id = "medium" 
                            checked = {this.state.vehicleSize === "MEDIUM"}
                            onChange = {this.onValueChange} 
                            value="MEDIUM"/>
                    <label htmlFor = "medium">Medium</label><br/>
                    <input type="radio" 
                            id = "large" 
                            checked = {this.state.vehicleSize === "LARGE"}
                            onChange = {this.onValueChange} 
                            value="LARGE"/>
                    <label htmlFor = "large">Large</label><br/>
                    <input type="submit" value="Park Car"/>
                </form>
            </div>
        )

    }
}