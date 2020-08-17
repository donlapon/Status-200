package com.travelinsurance.web.util;

import static java.time.temporal.ChronoUnit.DAYS;

import java.time.LocalDate;
import java.time.ZoneId;
import org.apache.tomcat.jni.Local;
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
    @GetMapping("/v1/travel_time")
    public TravelTimeResponse getMaxDurationFromNow(
            @RequestParam(name = "zone", defaultValue = "UTC+7") String zoneId) {
        LocalDate currentDate = LocalDate.now(ZoneId.of(zoneId));
        LocalDate maxArrivalDate = currentDate.plusDays(MAX_DURATION - 1);
        return new TravelTimeResponse(currentDate, maxArrivalDate, 180);
    }

    @CrossOrigin
    @GetMapping("/v1/departure_date")
    public TravelTimeResponse getArrivalDate(
            @RequestParam(name = "departure_date") String departureDateStr) {
        LocalDate departureDate = LocalDate.parse(departureDateStr);
        LocalDate maxArrivalDate = departureDate.plusDays(MAX_DURATION - 1);
        return new TravelTimeResponse(departureDate, maxArrivalDate, 180);
    }

    @CrossOrigin
    @GetMapping("/v1/duration")
    public TravelTimeResponse getDuration(
            @RequestParam(name = "departure_date") String departureDateStr,
            @RequestParam(name = "arrival_date") String arrivalDateStr) {
        LocalDate departureDate = LocalDate.parse(departureDateStr);
        LocalDate arrivalDate = LocalDate.parse(arrivalDateStr);
        long duration = DAYS.between(departureDate, arrivalDate) + 1;
        return new TravelTimeResponse(departureDate, arrivalDate, duration);
    }
}
