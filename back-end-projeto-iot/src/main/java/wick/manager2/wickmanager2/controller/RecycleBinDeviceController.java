package wick.manager2.wickmanager2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import wick.manager2.wickmanager2.model.RecycleBinDevice;
import wick.manager2.wickmanager2.service.RecycleBinDeviceService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/recycle-bin-devices")
public class RecycleBinDeviceController {

    private final RecycleBinDeviceService recycleBinDeviceService;

    @Autowired
    public RecycleBinDeviceController(RecycleBinDeviceService recycleBinDeviceService) {
        this.recycleBinDeviceService = recycleBinDeviceService;
    }

    @GetMapping("/deviceslist/{offset}/{limit}")
    public ResponseEntity<Map<String, Object>> getAllRecycleBinDevices(
            @RequestParam(value = "offset", required = false) Integer offset,
            @RequestParam(value = "limit", required = false) Integer limit) {
        Pageable pageable = offset != null && limit != null ? PageRequest.of(offset, limit) : Pageable.unpaged();
        Page<RecycleBinDevice> page = recycleBinDeviceService.getAllRecycleBinDevices(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("totalElements", page.getTotalElements());
        response.put("totalPages", page.getTotalPages());
        response.put("currentPage", page.getNumber());
        response.put("items", page.getContent());

        return ResponseEntity.ok(response);
    }
    @PostMapping
    public ResponseEntity<Object> registerRecycleBinDevice(@RequestBody RecycleBinDevice recycleBinDevice) {
        RecycleBinDevice savedDevice = recycleBinDeviceService.saveRecycleBinDevice(recycleBinDevice);
        if (savedDevice != null) {
            return ResponseEntity.ok(savedDevice);
        } else {
            return ResponseEntity.badRequest().body("Device with the same device_id already exists.");
        }
    }

    @PutMapping("/update-fill-level")
    public ResponseEntity<String> updateFillLevel(@RequestBody List<RecycleBinDevice> devices) {
        try {
            recycleBinDeviceService.updateFillLevel(devices);
            return ResponseEntity.ok("Fill level updated successfully for all devices.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating fill level: " + e.getMessage());
        }
    }

    
}
