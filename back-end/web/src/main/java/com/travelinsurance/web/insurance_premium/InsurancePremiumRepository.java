package com.travelinsurance.web.insurance_premium;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InsurancePremiumRepository extends MongoRepository<InsurancePremium, String> {
    @Query("{start: {$lte: ?0}, end: {$gte: ?0}}")
    InsurancePremium findPricePerPersonByDuration(long duration);
}
