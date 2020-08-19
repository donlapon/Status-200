package com.travelinsurance.web.util;

import java.time.LocalDate;

public class TravelDurationWithTotalPriceResponse extends TravelDurationResponse {

    private double totalPrice;

    public TravelDurationWithTotalPriceResponse(
            LocalDate departureDate, LocalDate arrivalDate, long duration, double totalPrice) {
        super(departureDate, arrivalDate, duration);
        this.totalPrice = totalPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
