package com.travelinsurance.web.insurance_package;

import com.mongodb.DBObject;

public class InsurancePackageResponse {
    private String countryCode;
    private DBObject[] insurancePackageList;

    public InsurancePackageResponse(String countryCode, DBObject[] insurancePackageList) {
        this.countryCode = countryCode;
        this.insurancePackageList = insurancePackageList;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public DBObject[] getInsurancePackageList() {
        return insurancePackageList;
    }

    public void setInsurancePackageList(DBObject[] insurancePackageList) {
        this.insurancePackageList = insurancePackageList;
    }
}
