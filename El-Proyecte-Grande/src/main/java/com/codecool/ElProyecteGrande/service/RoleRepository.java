package com.codecool.ElProyecteGrande.service;

import com.codecool.ElProyecteGrande.enums.RoleType;
import com.codecool.ElProyecteGrande.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleType name);
}
