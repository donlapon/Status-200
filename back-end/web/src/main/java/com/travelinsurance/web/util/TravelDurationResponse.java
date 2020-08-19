package com.travelinsurance.web.util;

import java.time.LocalDate;

public class TravelDurationResponse {
    private LocalDate departureDate;
    private LocalDate arrivalDate;
    private long duration;

    public TravelDurationResponse(LocalDate departureDate, LocalDate arrivalDate, long duration) {
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.duration = duration;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }
}
