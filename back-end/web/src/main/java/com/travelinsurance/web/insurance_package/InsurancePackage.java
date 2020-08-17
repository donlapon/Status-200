package com.travelinsurance.web.insurance_package;

import com.mongodb.DBObject;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "insurance_package")
public class InsurancePackage {
    @Field("package_name")
    private String insurancePackageName;

    @Field("package_detail")
    private DBObject insurancePackageDetail;

    public InsurancePackage(String insurancePackageName, DBObject insurancePackageDetail) {
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
