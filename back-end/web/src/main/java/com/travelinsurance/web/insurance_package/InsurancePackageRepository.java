package com.travelinsurance.web.insurance_package;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InsurancePackageRepository extends MongoRepository<InsurancePackage, String> {
    @Query("{countryCode : ?0}")
    InsurancePackage findPackageByCountryCode(String countryCode);
}
