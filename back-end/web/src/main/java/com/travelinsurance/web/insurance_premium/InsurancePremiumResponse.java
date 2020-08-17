package com.travelinsurance.web.insurance_premium;

public class InsurancePremiumResponse {
    private int startInclusive;
    private int endInclusive;
    private double pricePerPerson;

    public InsurancePremiumResponse(int startInclusive, int endInclusive, double pricePerPerson) {
        this.startInclusive = startInclusive;
        this.endInclusive = endInclusive;
        this.pricePerPerson = pricePerPerson;
    }

    public int getStartInclusive() {
        return startInclusive;
    }

    public void setStartInclusive(int startInclusive) {
        this.startInclusive = startInclusive;
    }

    public int getEndInclusive() {
        return endInclusive;
    }

    public void setEndInclusive(int endInclusive) {
        this.endInclusive = endInclusive;
    }

    public double getPricePerPerson() {
        return pricePerPerson;
    }

    public void setPricePerPerson(double pricePerPerson) {
        this.pricePerPerson = pricePerPerson;
    }
}
