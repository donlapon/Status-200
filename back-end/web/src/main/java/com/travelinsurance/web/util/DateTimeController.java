package com.travelinsurance.web.util;

import java.time.LocalDate;
import java.time.ZoneId;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class DateTimeController {

    final long MAX_DURATION = 180;

    @CrossOrigin
    @GetMapping("/v1/currentDateAndMaxArrivalDate")
    public TravelDurationResponse getMaxDurationFromNow(
            @RequestParam(name = "zone", defaultValue = "UTC+7") String zoneId) {
        LocalDate currentDate = LocalDate.now(ZoneId.of(zoneId));
        LocalDate maxArrivalDate = currentDate.plusDays(MAX_DURATION - 1);
        return new TravelDurationResponse(currentDate, maxArrivalDate, 180);
    }

    @CrossOrigin
    @GetMapping("/v1/maxArrivalDateFromDepartureDate")
    public TravelDurationResponse getArrivalDate(
            @RequestParam(name = "departure_date") String departureDateStr) {
        LocalDate departureDate = LocalDate.parse(departureDateStr);
        LocalDate maxArrivalDate = departureDate.plusDays(MAX_DURATION - 1);
        return new TravelDurationResponse(departureDate, maxArrivalDate, 180);
    }

    @CrossOrigin
    @GetMapping("/v1/currentDate")
    public CurrentDateResponse getCurrentDate(
            @RequestParam(name = "zone", defaultValue = "UTC+7") String zoneId) {
        LocalDate currentDate = LocalDate.now(ZoneId.of(zoneId));
        return new CurrentDateResponse(currentDate);
    }
}
