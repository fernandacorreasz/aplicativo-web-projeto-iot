package wick.manager2.wickmanager2.authorizationUser.service;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;

import lombok.var;
import wick.manager2.wickmanager2.authorizationUser.controller.dto.IncludeRequest;
import wick.manager2.wickmanager2.authorizationUser.controller.dto.ToUpdateRequest;
import wick.manager2.wickmanager2.authorizationUser.model.Users;
import wick.manager2.wickmanager2.authorizationUser.repositories.UserRepositories;

@Service
public class UserService {

    private final UserRepositories userRepository;
  
    public UserService(UserRepositories userRepository) {
        this.userRepository= userRepository;
    } 

   

}
