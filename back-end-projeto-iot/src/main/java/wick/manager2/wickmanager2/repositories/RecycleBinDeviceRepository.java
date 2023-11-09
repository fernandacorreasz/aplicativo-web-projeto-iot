package wick.manager2.wickmanager2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import wick.manager2.wickmanager2.model.RecycleBinDevice;

@Repository
public interface RecycleBinDeviceRepository extends JpaRepository<RecycleBinDevice, Long> {

    RecycleBinDevice findByDeviceId(String deviceId);
    
}
