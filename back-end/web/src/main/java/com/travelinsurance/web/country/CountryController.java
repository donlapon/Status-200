package com.travelinsurance.web.country;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class CountryController {

    @Autowired private CountryRepository countryRepository;

    @CrossOrigin
    @GetMapping("/v1/countrys")
    public List<CountryResponse> getAllCountry() {
        List<CountryResponse> countryResponseList = new ArrayList<>();
        Iterable<Country> countries = countryRepository.findAll();
        for (Country country : countries) {
            countryResponseList.add(
                    new CountryResponse(
                            country.getCountryCode(),
                            country.getCountryName(),
                            country.getImgUrl()));
        }
        return countryResponseList;
    }
}
