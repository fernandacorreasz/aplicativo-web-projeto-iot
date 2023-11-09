package wick.manager2.wickmanager2.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "garbage_collection_history")
public class GarbageCollectionHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recycle_bin_device_id", referencedColumnName = "id")
    private RecycleBinDevice recycleBinDevice;

    @Column(nullable = false)
    private LocalDateTime dateTime;

    @Column(nullable = false)
    private double collectedWeight;

    @Column(nullable = false)
    private String collectionRoute;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RecycleBinDevice getRecycleBinDevice() {
        return recycleBinDevice;
    }

    public void setRecycleBinDevice(RecycleBinDevice recycleBinDevice) {
        this.recycleBinDevice = recycleBinDevice;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public double getCollectedWeight() {
        return collectedWeight;
    }

    public void setCollectedWeight(double collectedWeight) {
        this.collectedWeight = collectedWeight;
    }

    public String getCollectionRoute() {
        return collectionRoute;
    }

    public void setCollectionRoute(String collectionRoute) {
        this.collectionRoute = collectionRoute;
    }
    
    

}
