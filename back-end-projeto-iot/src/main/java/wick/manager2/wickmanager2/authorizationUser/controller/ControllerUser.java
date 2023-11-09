package wick.manager2.wickmanager2.authorizationUser.controller;

import wick.manager2.wickmanager2.authorizationUser.controller.dto.IncludeRequest;
import wick.manager2.wickmanager2.authorizationUser.controller.dto.IncludeResponse;
import wick.manager2.wickmanager2.authorizationUser.model.Users;
import wick.manager2.wickmanager2.authorizationUser.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.databind.ObjectMapper;


@CrossOrigin
@RestController
@RequestMapping("users")
public class ControllerUser {

    private final UserService userService;
    private final ObjectMapper mapper = new ObjectMapper();

    public ControllerUser(UserService userServicep) {
        this.userService = userServicep;
    }

   

}
