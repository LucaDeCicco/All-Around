package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.service.ProductService;
import com.codecool.ElProyecteGrande.service.emailServices.EmailSenderService;
import com.codecool.ElProyecteGrande.service.payPal.PaypalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.ShippingAddress;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/pay")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
public class PaypalController {
    @Autowired
    private EmailSenderService senderService;
    public static final String SUCCESS_URL = "http://localhost:3000/plata/efectuata";
    public static final String CANCEL_URL = "http://localhost:3000/plata/neefectuata";
    private final PaypalService paypalService;

    private final ProductService productService;

    public PaypalController(PaypalService paypalService, ProductService productService) {
        this.paypalService = paypalService;
        this.productService = productService;
    }

    @GetMapping("{orderId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<String> payment(@PathVariable Long orderId) {
        Product product = productService.getReferenceById(orderId);
        double price = product.getPrice();
        try {
            Payment payment = paypalService.createPayment(price, "EUR", "paypal",
                    CANCEL_URL, SUCCESS_URL);
            for (Links link : payment.getLinks()) {
                if (link.getRel().equals("approval_url")) {
                    return new ResponseEntity<>(link.getHref(), HttpStatus.OK);
                }
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "{payerId}/{paymentId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<String> successPay(@PathVariable String paymentId, @PathVariable String payerId) {
        try {
            Payment payment = paypalService.executePayment(paymentId, payerId);
            ShippingAddress shippingAddress = payment.getTransactions().get(0).getItemList().getShippingAddress();
            if (payment.getState().equals("approved")) {
                boolean check = false;
                if (!check){
                    senderService.sendEmail("luca14.decicco@gmail.com",
                            "this is subject2",
                            "<h1>this is body<h1/> <button>test</button");
                    check = true;
                }
                return new ResponseEntity<>("Plata a fost un succes", HttpStatus.ACCEPTED);
            } else {
                return new ResponseEntity<>("Plata", HttpStatus.NON_AUTHORITATIVE_INFORMATION);
            }
        } catch (PayPalRESTException e) {
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>("A aparut o eroare!", HttpStatus.NON_AUTHORITATIVE_INFORMATION);
    }
}
