package com.travelinsurance.web.insured_info;

import com.travelinsurance.web.util.GenerateUniqueId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class InsuredInfoController {

    @Autowired private InsuredInfoRepository insuredInfoRepository;

    @CrossOrigin
    @PostMapping("/v1/insuredInfo")
    public void saveInsuredInfo(@RequestBody NewInsuredInfoRequest[] requests) {
        for (NewInsuredInfoRequest request : requests) {
            InsuredInfo insuredInfo = new InsuredInfo();
            insuredInfo.setDestinationCountry(request.getDestinationCountry());
            insuredInfo.setPackageName(request.getPackageName());
            insuredInfo.setDepartureDate(request.getDepartureDate());
            insuredInfo.setArrivalDate(request.getArrivalDate());
            insuredInfo.setDuration(request.getDuration());
            insuredInfo.setTotalPrice(request.getTotalPrice());
            insuredInfo.setIdNumber(request.getIdNumber());
            insuredInfo.setTitleName(request.getTitleName());
            insuredInfo.setFirstname(request.getFirstname());
            insuredInfo.setLastname(request.getLastname());
            insuredInfo.setDateOfBirth(request.getDateOfBirth());
            insuredInfo.setBeneficiaryName(request.getBeneficiaryName());
            insuredInfo.setPhoneNumber(request.getPhoneNumber());
            insuredInfo.setEmail(request.getEmail());
            insuredInfo.setInsuranceNumber(GenerateUniqueId.get());
            insuredInfoRepository.save(insuredInfo);
        }
    }
}
