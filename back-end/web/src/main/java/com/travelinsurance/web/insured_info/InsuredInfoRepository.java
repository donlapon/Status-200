package com.travelinsurance.web.insured_info;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface InsuredInfoRepository extends MongoRepository<InsuredInfo, String> {}
