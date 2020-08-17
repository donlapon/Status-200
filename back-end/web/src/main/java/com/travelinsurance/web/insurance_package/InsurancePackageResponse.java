package com.travelinsurance.web.insurance_package;

import com.mongodb.DBObject;

public class InsurancePackageResponse {
    private String insurancePackageName;
    private DBObject[] insurancePackageList;

    public InsurancePackageResponse(String insurancePackageName, DBObject[] insurancePackageList) {
        this.insurancePackageName = insurancePackageName;
        this.insurancePackageList = insurancePackageList;
    }

    public String getInsurancePackageName() {
        return insurancePackageName;
    }

    public void setInsurancePackageName(String insurancePackageName) {
        this.insurancePackageName = insurancePackageName;
    }

    public DBObject[] getInsurancePackageList() {
        return insurancePackageList;
    }

    public void setInsurancePackageList(DBObject[] insurancePackageList) {
        this.insurancePackageList = insurancePackageList;
    }
}
