package com.travelinsurance.web.insured_info;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InsuredInfoRepository extends MongoRepository<InsuredInfo, String> {
    @Query("{insuranceNumber : ?0}")
    InsuredInfo findInsuranceInfoByInsuranceNumber(String insuranceNumber);

    @Query("{idNumber : ?0}")
    InsuredInfo findInsuranceInfoByIdNumber(String idNumber);
}
