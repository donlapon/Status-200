package com.travelinsurance.web.insurance_package;

import com.mongodb.DBObject;

public class InsurancePackageResponse {
    private String insurancePackageName;
    private DBObject insurancePackageDetail;

    public InsurancePackageResponse(String insurancePackageName, DBObject insurancePackageDetail) {
        this.insurancePackageName = insurancePackageName;
        this.insurancePackageDetail = insurancePackageDetail;
    }

    public String getInsurancePackageName() {
        return insurancePackageName;
    }

    public void setInsurancePackageName(String insurancePackageName) {
        this.insurancePackageName = insurancePackageName;
    }

    public DBObject getInsurancePackageDetail() {
        return insurancePackageDetail;
    }

    public void setInsurancePackageDetail(DBObject insurancePackageDetail) {
        this.insurancePackageDetail = insurancePackageDetail;
    }
}
