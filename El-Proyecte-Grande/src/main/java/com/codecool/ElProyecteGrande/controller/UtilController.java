package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.AppUser;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.payload.email.RegisterEmail;
import com.codecool.ElProyecteGrande.service.UserRepository;
import com.codecool.ElProyecteGrande.service.emailServices.EmailSenderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/util")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class UtilController {

    @Autowired
    PasswordEncoder encoder;
    @Autowired
    UserRepository userRepository;

    @Autowired
    private EmailSenderService senderService;

    @GetMapping("/countries")
    public List<Country> getAllHotelProducts(){
        List<Country> result = new ArrayList<>();
        for (Country value : Country.values()) {
            result.add(value);
        }
        return result;
    }

    @PostMapping("/sendMail")
    public void sendMail() throws MessagingException {
        System.out.println("ruta de a trimite email");
        senderService.sendEmail("discalicau.dariana@colegiuec.ro",
                "this is subject",
                "<h1>this is body<h1/> <button>test</button");
    }

    @PostMapping("/registerSendMail")
    public void sendRegisterMail(@Valid @RequestBody RegisterEmail registerEmail) throws MessagingException {
        senderService.sendRegisterEmail(registerEmail.getEmail(),
                registerEmail.getName(),
                "Register");
    }


    public static String passwordGenerator(){
        List<String> uppercaseLetters = List.of("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
        List<String> lowercaseLetters = List.of("abcdefghijklmnopqrstuvwxyz".split(""));
        List<String> numbers = List.of("1234567890".split(""));
        List<String> characters = List.of("!@#$%^&*()_-=+<>,.?/".split(""));
        List<List<String>> passwordElements = new ArrayList<>();
        passwordElements.add(uppercaseLetters);
        passwordElements.add(lowercaseLetters);
        passwordElements.add(numbers);
        passwordElements.add(characters);

        String password = "";

        Random randomChoice = new Random();
        for (int i = 0; i < 2; i++) {
            List<Integer> alreadyPicked = new ArrayList<>();
            while (true){
                while (true){
                    int random = randomChoice.nextInt(4);
                    if (!alreadyPicked.contains(random)){
                        alreadyPicked.add(random);
                        password += passwordElements.get(random).get(randomChoice.nextInt(passwordElements.get(random).size()));
                        break;
                    }
                }
                if (i==0){
                    if (password.length()==4){
                        break;
                    }
                }
                else {
                    if (password.length()==8){
                        break;
                    }
                }
            }
        }
        System.out.println(password);
        return password;
    }


    @PostMapping("/forgotPassword")
    public void forgotPassword(@Valid @RequestBody RegisterEmail registerEmail) throws MessagingException {
        String newPassword = passwordGenerator();
        AppUser user = userRepository.findByEmail(registerEmail.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " +
                 registerEmail.getEmail()));
        user.setPassword(encoder.encode(newPassword));
        userRepository.save(user);
        senderService.sendEmailForgotPassword(registerEmail.getEmail(), newPassword);
    }
}
