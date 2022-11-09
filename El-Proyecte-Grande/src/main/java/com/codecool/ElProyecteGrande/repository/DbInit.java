package com.codecool.ElProyecteGrande.repository;

import ch.qos.logback.core.net.server.Client;
import com.codecool.ElProyecteGrande.enums.RoleType;
import com.codecool.ElProyecteGrande.model.AppUser;
import com.codecool.ElProyecteGrande.model.Role;
import com.codecool.ElProyecteGrande.service.RoleRepository;
import com.codecool.ElProyecteGrande.service.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) {
        // Delete all
//        this.userRepository.deleteAll();

        // Create
        Role user = new Role(RoleType.ROLE_USER);
        Role moderator = new Role(RoleType.ROLE_MODERATOR);
        Role admin = new Role(RoleType.ROLE_ADMIN);

        Set<Role> adminUserRoles = new HashSet<>();
        adminUserRoles.add(user);
        adminUserRoles.add(moderator);
        adminUserRoles.add(admin);
        AppUser adminUser   = new AppUser("admin", "admin@admin.admin", passwordEncoder.encode("admin123"), adminUserRoles);

        List<Role> roles = Arrays.asList(user,moderator,admin);

        // Save to db
        this.roleRepository.saveAll(roles);
        this.userRepository.save(adminUser);
    }
}