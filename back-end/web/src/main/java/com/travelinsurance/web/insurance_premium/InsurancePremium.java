package com.travelinsurance.web.insurance_premium;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "insurance_premium")
public class InsurancePremium {
    @Field("start")
    private int startInclusive;

    @Field("end")
    private int endInclusive;

    @Field("price")
    private double pricePerPerson;

    public InsurancePremium(int startInclusive, int endInclusive, double pricePerPerson) {
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
