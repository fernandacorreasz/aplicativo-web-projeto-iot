package wick.manager2.wickmanager2.authorizationUser.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import wick.manager2.wickmanager2.authorizationUser.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority,  Long> {
   
}