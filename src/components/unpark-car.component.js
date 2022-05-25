import React, {Component} from "react";
import ParkingService from "../services/parking.service";

export default class UnparkCar extends Component {
    constructor() {
        super()
        this.state = {
            id : ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            id : e.target.value
        })
    }

    formSubmit(e) {
        e.preventDefault(e);
        console.log(ParkingService.getAll);
        ParkingService.unparkCar(this.state.id)
        .then(response => {
            alert(response.data)
            console.log(response.data);
        })
        .catch(e => {
            console.log(this.state.id);
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label>
                        Parking Spot <br/>
                        <input type="text" value={this.state.id} onChange={this.onValueChange} />
                    </label>
                    
                    <input type="submit" value="Unpark Car" />
                </form>
            </div>
        )
    }

}
