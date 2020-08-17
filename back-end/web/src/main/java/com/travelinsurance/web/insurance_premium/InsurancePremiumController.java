package com.travelinsurance.web.insurance_premium;

import static java.time.temporal.ChronoUnit.DAYS;

import com.travelinsurance.web.country.Country;
import com.travelinsurance.web.util.TravelTimeResponse;
import io.swagger.v3.oas.models.security.SecurityScheme.In;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class InsurancePremiumController {
    @Autowired private InsurancePremiumRepository insurancePremiumRepository;

    @CrossOrigin
    @GetMapping("/v1/totalPrice")
    public TravelTimeResponse getDuration(
            @RequestParam(name = "departure_date") String departureDateStr,
            @RequestParam(name = "arrival_date") String arrivalDateStr) {
        LocalDate departureDate = LocalDate.parse(departureDateStr);
        LocalDate arrivalDate = LocalDate.parse(arrivalDateStr);
        long duration = DAYS.between(departureDate, arrivalDate) + 1;
        List<InsurancePremium> insurancePremiumList =
                insurancePremiumRepository.findPricePerPersonByDuration(duration);
        return new TravelTimeResponse(
                departureDate,
                arrivalDate,
                duration,
                insurancePremiumList.get(0).getPricePerPerson());
    }
}
