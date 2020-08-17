package com.travelinsurance.web.insurance_package;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface InsurancePackageRepository extends MongoRepository<InsurancePackage, String> {}
