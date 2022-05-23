import React, {Component} from "react";
//import ParkingService from "../services/parking.service";

export default class ParkCar extends Component {



    render() {
        return (
            <div>
                <form>
                    <input type="radio" id="small" name="car_size" value="Small"/>
                    <label for="small">Small</label><br/>
                    <input type="radio" id="medium" name="car_size" value="Medium"/>
                    <label for="medium">Medium</label><br/>
                    <input type="radio" id="large" name="car_size" value="Large"/>
                    <label for="large">Large</label><br/>
                    <input type="submit" value="Park Car"/>
                </form>
            </div>

        )

    }
}