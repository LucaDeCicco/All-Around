package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.model.AppUser;
import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.products.externalProducts.Hotel;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.model.products.ourProducts.ResortProduct;
import com.codecool.ElProyecteGrande.payload.email.ChangePasswordRequest;
import com.codecool.ElProyecteGrande.payload.email.RegisterEmail;
import com.codecool.ElProyecteGrande.payload.security.JwtResponse;
import com.codecool.ElProyecteGrande.security.UserPrincipal;
import com.codecool.ElProyecteGrande.security.jwt.JwtUtils;
import com.codecool.ElProyecteGrande.service.ProductService;
import com.codecool.ElProyecteGrande.service.UserRepository;
import com.codecool.ElProyecteGrande.service.emailServices.EmailSenderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/util")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class UtilController {

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private EmailSenderService senderService;

    @Autowired
    ProductService productService;


    @GetMapping("/countries")
    public List<Country> getAllHotelProducts(){
        List<Country> result = new ArrayList<>();
        for (Country value : Country.values()) {
            result.add(value);
        }
        return result;
    }

    @GetMapping("/circuitCountries")
    public List<Country> getAllCircuitCountries(){
        List<Country> result = new ArrayList<>();
        for (Product product : productService.findAll()) {
            if (product.getProductType()==ProductType.CIRCUIT){
                CircuitProduct circuitProduct = (CircuitProduct) product;
                for (Country country : circuitProduct.getCountries()) {
                    if (!result.contains(country)){
                        result.add(country);
                    }
                }
            }
        }
        return result;
    }

    @GetMapping("/usernames")
    public List<String> getAllUserNames(){
        List<String> allUsernames = new ArrayList<>();
        List<AppUser> userList = userRepository.findAll();
        for (AppUser appUser : userList) {
            allUsernames.add(appUser.getUsername());
        }
        return allUsernames;
    }

    @GetMapping("/getEmails")
    public List<String> getAllEmails(){
        List<String> allEmails = new ArrayList<>();
        List<AppUser> userList = userRepository.findAll();
        for (AppUser appUser : userList) {
            allEmails.add(appUser.getEmail());
        }
        return allEmails;
    }

    @PostMapping("/sendMail")
    public void sendMail() throws MessagingException {
        senderService.sendEmail("luca14.decicco@gmail.com",
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

    @PostMapping("/changePassword")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordRequest changePasswordRequest){
//        String email = changePasswordRequest.getEmail();
        String oldPassword = changePasswordRequest.getOldPassword();
        String newPassword = changePasswordRequest.getNewPassword();

        AppUser user = userRepository.findByEmail(changePasswordRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " +
                changePasswordRequest.getEmail()));
        if (encoder.matches(oldPassword, user.getPassword())){
            System.out.println("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
            System.out.println("Old password is good");
            user.setPassword(encoder.encode(newPassword));
            userRepository.save(user);

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), changePasswordRequest.getNewPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            System.out.println(jwt);
            UserPrincipal userDetails = (UserPrincipal) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    roles));
        }
        return null;
    }

    @GetMapping("/search/{toSearch}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Product> getAllSearchedProducts(@PathVariable String toSearch) {
        System.out.println("ZZZZZZZZZZZZZZZZZZZ------------ZZZZZZZZZZZZZZ");
        System.out.println(toSearch);
        List<Product> searchedProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            System.out.println("YYYYYYYYYYYYYYYYY_________________YYYYYYYYYYYYYY");
            System.out.println(String.valueOf(product.getProductType()).toLowerCase());
            if (String.valueOf(product.getProductType()).toLowerCase().contains(toSearch.toLowerCase())) {
                searchedProducts.add(product);
            }
            else {
                boolean canAddProduct = true;
                if (product.getProductType()==ProductType.CIRCUIT){
                    CircuitProduct circuitProduct = (CircuitProduct) product;
                    for (Country country : circuitProduct.getCountries()) {
                        if (String.valueOf(country).toLowerCase().contains(toSearch.toLowerCase())){
                            if (canAddProduct){
                                searchedProducts.add(product);
                                canAddProduct = false;
                            }
                        }
                    }
                }
                if (product.getProductType()==ProductType.RESORT){
                    ResortProduct resortProduct = (ResortProduct) product;
                    if (String.valueOf(resortProduct.getCountry()).toLowerCase().contains(toSearch.toLowerCase()))
                        searchedProducts.add(product);
                }
                if (product.getProductType()==ProductType.HOTEL){
                    Hotel hotel = (Hotel) product;
                    if (String.valueOf(hotel.getCountry()).toLowerCase().contains(toSearch.toLowerCase())){
                        searchedProducts.add(product);
                    }
                }
            }
        }
        return searchedProducts;
    }

    @GetMapping("/search/{toSearch}/{pageNumber}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Product> getSearchedProducts(@PathVariable String toSearch, @PathVariable String pageNumber) {
        int fromProduct = (Integer.parseInt(pageNumber)-1)*9+1;
        int toProduct = (Integer.parseInt(pageNumber)*9);
        List<Product> searchedProducts = new ArrayList<>();
        for (Product product : productService.findAll()) {
            System.out.println("YYYYYYYYYYYYYYYYY_________________YYYYYYYYYYYYYY");
            System.out.println(String.valueOf(product.getProductType()).toLowerCase());
            if (String.valueOf(product.getProductType()).toLowerCase().contains(toSearch.toLowerCase())) {
                searchedProducts.add(product);
            }
            else {
                boolean canAddProduct = true;
                if (product.getProductType()==ProductType.CIRCUIT){
                    CircuitProduct circuitProduct = (CircuitProduct) product;
                    for (Country country : circuitProduct.getCountries()) {
                        if (String.valueOf(country).toLowerCase().contains(toSearch.toLowerCase())){
                            if (canAddProduct){
                                searchedProducts.add(product);
                                canAddProduct = false;
                            }
                        }
                    }
                }
                if (product.getProductType()==ProductType.RESORT){
                    ResortProduct resortProduct = (ResortProduct) product;
                    if (String.valueOf(resortProduct.getCountry()).toLowerCase().contains(toSearch.toLowerCase()))
                        searchedProducts.add(product);
                }
                if (product.getProductType()==ProductType.HOTEL){
                    Hotel hotel = (Hotel) product;
                    if (String.valueOf(hotel.getCountry()).toLowerCase().contains(toSearch.toLowerCase())){
                        searchedProducts.add(product);
                    }
                }
            }
        }
        List<Product> result = new ArrayList<>();
        for (int i = fromProduct-1; i < searchedProducts.size(); i++) {
            if (i<toProduct){
                result.add(searchedProducts.get(i));
            }
        }
        return result;
//        return searchedProducts;
    }

}
