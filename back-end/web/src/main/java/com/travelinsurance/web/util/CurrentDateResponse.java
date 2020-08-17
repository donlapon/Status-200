package com.travelinsurance.web.util;

import java.time.LocalDate;

public class CurrentDateResponse {
    private LocalDate currentDate;

    public CurrentDateResponse(LocalDate currentDate) {
        this.currentDate = currentDate;
    }

    public LocalDate getCurrentDate() {
        return currentDate;
    }

    public void setCurrentDate(LocalDate currentDate) {
        this.currentDate = currentDate;
    }
}
