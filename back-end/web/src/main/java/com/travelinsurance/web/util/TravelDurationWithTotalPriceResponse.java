package com.travelinsurance.web.util;

import java.time.LocalDate;

public class TravelDurationWithTotalPriceResponse extends TravelDurationResponse {

    private double totalPrice;

    public TravelDurationWithTotalPriceResponse(
            LocalDate startDate, LocalDate endDate, long duration, double totalPrice) {
        super(startDate, endDate, duration);
        this.totalPrice = totalPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
