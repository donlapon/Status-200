package com.travelinsurance.web.insured_info;

import com.travelinsurance.web.util.SequenceGenerator;
import io.micrometer.core.annotation.Timed;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @Timed
    @Transactional(timeout = 120)
    public List<InsuredInfo> saveInsuredInfo(@RequestBody NewInsuredInfoRequest[] requests) {
        List<String> newInsuranceNumberList = new ArrayList<String>();
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
            insuredInfo.setPaymentStatus(false);
            String newInsuranceNumber = new SequenceGenerator().getUniqueId();
            String insuranceNumberPrefix = "ALV-";
            newInsuranceNumber = insuranceNumberPrefix + newInsuranceNumber;
            insuredInfo.setInsuranceNumber(newInsuranceNumber);
            newInsuranceNumberList.add(newInsuranceNumber);
            insuredInfoRepository.save(insuredInfo);
        }
        List<InsuredInfo> insuredInfoList = new ArrayList<InsuredInfo>();
        for (String insuranceNumber : newInsuranceNumberList) {
            insuredInfoList.add(
                    insuredInfoRepository.findInsuranceInfoByInsuranceNumber(insuranceNumber));
        }
        return insuredInfoList;
    }

    @CrossOrigin
    @GetMapping("/v1/insuredInfo/insuranceNumber/{insuranceNumber}")
    public InsuredInfo getInsuredInfoByInsuranceNumber(@PathVariable String insuranceNumber) {
        InsuredInfo insuredInfo =
                insuredInfoRepository.findInsuranceInfoByInsuranceNumber(insuranceNumber);
        return insuredInfo;
    }

    @CrossOrigin
    @GetMapping("/v1/insuredInfo/idNumber/{idNumber}")
    public InsuredInfo getInsuredInfoByIdNumber(@PathVariable String idNumber) {
        InsuredInfo insuredInfo = insuredInfoRepository.findInsuranceInfoByIdNumber(idNumber);
        return insuredInfo;
    }
}
