package com.travelinsurance.web.util;

import java.time.LocalDate;

public class TravelDurationResponse {
    private LocalDate startDate;
    private LocalDate endDate;
    private long duration;

    public TravelDurationResponse(LocalDate startDate, LocalDate endDate, long duration) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
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
