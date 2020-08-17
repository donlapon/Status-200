package com.travelinsurance.web.insurance_package;

import com.mongodb.DBObject;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "insurance_package")
public class InsurancePackage {
    @Field("country_code")
    private String countryCode;

    @Field("package_list")
    private DBObject[] insurancePackageList;

    public InsurancePackage(String countryCode, DBObject[] insurancePackageList) {
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
