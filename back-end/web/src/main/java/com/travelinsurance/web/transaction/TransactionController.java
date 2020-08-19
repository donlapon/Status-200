package com.travelinsurance.web.transaction;

import com.travelinsurance.web.insured_info.InsuredInfo;
import com.travelinsurance.web.insured_info.InsuredInfoRepository;
import com.travelinsurance.web.util.SequenceGenerator;
import io.micrometer.core.annotation.Timed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class TransactionController {

    @Autowired private TransactionRepository transactionRepository;
    @Autowired private InsuredInfoRepository insuredInfoRepository;

    @CrossOrigin
    @PostMapping("/v1/confirmPayment")
    @Timed
    @Transactional(timeout = 120)
    public TransactionResponse saveTransaction(@RequestBody NewTransactionRequest request) {
        Transaction tx = new Transaction();
        tx.setBankName(request.getBankName());
        tx.setAccountNumber(request.getAccountNumber());
        tx.setAmount(request.getAmount());
        tx.setNote(request.getNote());
        String[] insuranceNumberList = request.getInsuranceNumberList();
        tx.setInsuranceNumberList(insuranceNumberList);
        for (String insuranceNumber : insuranceNumberList) {
            InsuredInfo insuredInfo =
                    insuredInfoRepository.findInsuranceInfoByInsuranceNumber(insuranceNumber);
            insuredInfo.setPaymentStatus(true);
            insuredInfoRepository.save(insuredInfo);
        }
        tx.setRefId(new SequenceGenerator().getUniqueId());
        transactionRepository.save(tx);
        return new TransactionResponse(
                tx.getRefId(),
                tx.getBankName(),
                tx.getAccountNumber(),
                tx.getAmount(),
                tx.getNote(),
                tx.getInsuranceNumberList());
    }
}
