import http from "../http-common";

class ParkingService {
    getAll() {
        return http.get("/");
    }

    parkCar() {
        return http.post("/");
    }

    unparkCar() {
        return http.delete("/{id}");
    }
}

export default new ParkingService();