package com.travelinsurance.web.insurance_premium;

import static java.time.temporal.ChronoUnit.DAYS;

import com.travelinsurance.web.util.TravelDurationWithTotalPriceResponse;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class InsurancePremiumController {
    @Autowired private InsurancePremiumRepository insurancePremiumRepository;

    @CrossOrigin
    @PostMapping("/v1/totalPrice")
    public TravelDurationWithTotalPriceResponse getTotalPrice(
            @RequestBody InsurancePremiumTotalPriceRequest request) {
        LocalDate departureDate = request.getDepartureDate();
        LocalDate arrivalDate = request.getArrivalDate();
        long duration = DAYS.between(departureDate, arrivalDate) + 1;
        InsurancePremium insurancePremium =
                insurancePremiumRepository.findPricePerPersonByDuration(duration);
        return new TravelDurationWithTotalPriceResponse(
                departureDate, arrivalDate, duration, insurancePremium.getPricePerPerson());
    }
}
