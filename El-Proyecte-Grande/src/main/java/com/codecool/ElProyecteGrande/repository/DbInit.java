package com.codecool.ElProyecteGrande.repository;

import ch.qos.logback.core.net.server.Client;
import com.codecool.ElProyecteGrande.enums.Country;
import com.codecool.ElProyecteGrande.enums.ProductType;
import com.codecool.ElProyecteGrande.enums.RoleType;
import com.codecool.ElProyecteGrande.model.AppUser;
import com.codecool.ElProyecteGrande.model.Role;
import com.codecool.ElProyecteGrande.model.products.ourProducts.CircuitProduct;
import com.codecool.ElProyecteGrande.service.ProductService;
import com.codecool.ElProyecteGrande.service.RoleRepository;
import com.codecool.ElProyecteGrande.service.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    private final ProductService productService;


    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder, RoleRepository roleRepository, ProductService productService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.productService = productService;
    }

    @Override
    public void run(String... args) {

        Role user = new Role(RoleType.ROLE_USER);
        Role moderator = new Role(RoleType.ROLE_MODERATOR);
        Role admin = new Role(RoleType.ROLE_ADMIN);

        Set<Role> adminUserRoles = new HashSet<>();
        adminUserRoles.add(user);
        adminUserRoles.add(moderator);
        adminUserRoles.add(admin);

        List<Role> roles = Arrays.asList(user,moderator,admin);

        this.roleRepository.saveAll(roles);


        AppUser adminUser   = new AppUser("admin", "admin@admin.admin", passwordEncoder.encode("admin123"), adminUserRoles);

        this.userRepository.save(adminUser);


        String hardcodedDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


        String photo1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAsElEQVR4nEXNERaFQBSA4ZlzgmAgCAYGgiAILgRBS5g1zCLaQTjLSNvEvScIgiAYCIIgCIKBICl45/Tsp+9njLG+7wHAey+EmKapqqrneXjTNIhY1zUiKqW+ZkmSbNsWRdE8z3men+eplFrXlbdtS0QAgIjGGEQEACJiYRiO41iW5X3fQRAMw1AUxXVd3Fr7uUKI/yPLsuM4pJTLsqRpuu97HMfOOd513edqrX8/InoB56ZklGw0Gs0AAAAASUVORK5CYII=";
        String photo2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAsElEQVR4nEXNERaFQBSA4ZlzgmAgCAYGgiAILgRBS5g1zCLaQTjLSNvEvScIgiAYCIIgCIKBICl45/Tsp+9njLG+7wHAey+EmKapqqrneXjTNIhY1zUiKqW+ZkmSbNsWRdE8z3men+eplFrXlbdtS0QAgIjGGEQEACJiYRiO41iW5X3fQRAMw1AUxXVd3Fr7uUKI/yPLsuM4pJTLsqRpuu97HMfOOd513edqrX8/InoB56ZklGw0Gs0AAAAASUVORK5CYII=";


        List<String> images = new ArrayList<>();
        images.add(photo1);
        images.add(photo2);

        Date date = new Date(2022, 11, 14);

        List<Country> countries = new ArrayList<>();
        countries.add(Country.FRANCE);
        countries.add(Country.ITALY);
        countries.add(Country.SPAIN);


        CircuitProduct circuitProduct = new CircuitProduct(ProductType.CIRCUIT, hardcodedDescription, 1899, images, "Transilvania",
                "Itinerary", 49, date, 11, countries);
        productService.save(circuitProduct);


    }
}