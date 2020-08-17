package com.travelinsurance.web.util;

import java.time.LocalDate;

public class TravelTimeResponse {
    private LocalDate startDate;
    private LocalDate endDate;
    private long duration;
    private double totalPrice;

    public TravelTimeResponse(
            LocalDate startDate, LocalDate endDate, long duration, double totalPrice) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
        this.totalPrice = totalPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
