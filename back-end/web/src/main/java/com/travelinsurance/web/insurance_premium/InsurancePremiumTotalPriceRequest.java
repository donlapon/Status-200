package com.travelinsurance.web.insurance_premium;

import java.time.LocalDate;

public class InsurancePremiumTotalPriceRequest {
    private LocalDate departureDate;
    private LocalDate arrivalDate;

    public InsurancePremiumTotalPriceRequest(LocalDate departureDate, LocalDate arrivalDate) {
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
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
