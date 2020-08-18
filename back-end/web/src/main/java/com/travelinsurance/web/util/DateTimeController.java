package com.travelinsurance.web.util;

import static java.time.temporal.ChronoUnit.DAYS;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.concurrent.atomic.AtomicLong;
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
    @GetMapping("/v1/currentDateAndMaxArrivalDate")
    public TravelTimeResponse getMaxDurationFromNow(
            @RequestParam(name = "zone", defaultValue = "UTC+7") String zoneId) {
        LocalDate currentDate = LocalDate.now(ZoneId.of(zoneId));
        LocalDate maxArrivalDate = currentDate.plusDays(MAX_DURATION - 1);
        return new TravelTimeResponse(currentDate, maxArrivalDate, 180, -1);
    }

    @CrossOrigin
    @GetMapping("/v1/maxArrivalDateFromDepartureDate")
    public TravelTimeResponse getArrivalDate(
            @RequestParam(name = "departure_date") String departureDateStr) {
        LocalDate departureDate = LocalDate.parse(departureDateStr);
        LocalDate maxArrivalDate = departureDate.plusDays(MAX_DURATION - 1);
        return new TravelTimeResponse(departureDate, maxArrivalDate, 180, -1);
    }
}
