package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.Product;
import com.codecool.ElProyecteGrande.model.User;

import java.util.List;

public interface UsersDao {
    void add(User user);

    User find(long id);

    void remove(long id);

    List<User> getAll();
}
