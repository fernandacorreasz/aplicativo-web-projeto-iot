package wick.manager2.wickmanager2.authorizationUser.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import wick.manager2.wickmanager2.authorizationUser.model.Users;

public interface UserRepositories extends JpaRepository<Users,  Long> {
    Users findByEmailAddressAndPassword(String emailAddress, String password);
}