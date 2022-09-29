package com.codecool.ElProyecteGrande.repository;

import com.codecool.ElProyecteGrande.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public class UsersDaoMem implements UsersDao{

    private List<User> usersList;

    private UsersDaoMem() {
        usersList = new ArrayList<>();
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
