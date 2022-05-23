import React, {Component} from "react";
import ParkingService from "../services/parking.service";

export default class UnparkCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            id : event.target.value
        })
    }

    formSubmit(event) {
        event.preventDefault(event);
        console.log(this.state.id)
        ParkingService.unparkCar(this.state.id)
        .then(response => {
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
