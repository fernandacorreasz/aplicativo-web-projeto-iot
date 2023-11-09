package wick.manager2.wickmanager2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import wick.manager2.wickmanager2.model.RecycleBinDevice;
import wick.manager2.wickmanager2.repositories.RecycleBinDeviceRepository;

import java.util.List;

@Service
public class RecycleBinDeviceService {

    private final RecycleBinDeviceRepository recycleBinDeviceRepository;

    @Autowired
    public RecycleBinDeviceService(RecycleBinDeviceRepository recycleBinDeviceRepository) {
        this.recycleBinDeviceRepository = recycleBinDeviceRepository;
    }


    public RecycleBinDevice saveRecycleBinDevice(RecycleBinDevice recycleBinDevice) {
        RecycleBinDevice existingDevice = recycleBinDeviceRepository.findByDeviceId(recycleBinDevice.getDeviceId());
        if (existingDevice != null) {
            return null;
        }
        return recycleBinDeviceRepository.save(recycleBinDevice);
    }

    
    public Page<RecycleBinDevice> getAllRecycleBinDevices(Pageable pageable) {
        return recycleBinDeviceRepository.findAll(pageable);
    }
    
}
