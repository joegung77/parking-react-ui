import http from "../http-common";

class ParkingService {
    getAll() {
        return http.get("/");
    }

    parkCar(data) {
        return http.post("/", data);
    }

    unparkCar(id) {
        return http.delete(`/${id}`);
    }
}

export default new ParkingService();