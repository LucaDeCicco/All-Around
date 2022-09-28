package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.Product;
import com.codecool.ElProyecteGrande.model.User;

import java.util.ArrayList;
import java.util.List;

public class UsersDaoMem implements UsersDao{

    private List<User> usersList;
    private static UsersDaoMem instance = null;

    private UsersDaoMem() {
        usersList = new ArrayList<>();
    }

    public static UsersDaoMem getInstance() {
        if (instance == null) {
            instance = new UsersDaoMem();
        }
        return instance;
    }



    @Override
    public void add(User user) {
        usersList.add(user);
    }

    @Override
    public User find(long id) {
        for (User user : usersList) {
            if (user.getId()==id){
                return user;
            }
        }
        return null;
    }

    @Override
    public void remove(long id) {
        usersList.remove(find(id));
    }

    @Override
    public List<User> getAll() {
        return usersList;
    }
}
