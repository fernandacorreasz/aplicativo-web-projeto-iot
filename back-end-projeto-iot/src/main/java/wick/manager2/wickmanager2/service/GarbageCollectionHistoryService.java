package wick.manager2.wickmanager2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import wick.manager2.wickmanager2.model.GarbageCollectionHistory;
import wick.manager2.wickmanager2.repositories.GarbageCollectionHistoryRepository;

import java.util.List;

@Service
public class GarbageCollectionHistoryService {

    private final GarbageCollectionHistoryRepository garbageCollectionHistoryRepository;

    @Autowired
    public GarbageCollectionHistoryService(GarbageCollectionHistoryRepository garbageCollectionHistoryRepository) {
        this.garbageCollectionHistoryRepository = garbageCollectionHistoryRepository;
    }

    public List<GarbageCollectionHistory> getAllGarbageCollectionHistories() {
        return garbageCollectionHistoryRepository.findAll();
    }

    public GarbageCollectionHistory saveGarbageCollectionHistory(GarbageCollectionHistory garbageCollectionHistory) {
        return garbageCollectionHistoryRepository.save(garbageCollectionHistory);
    }
}
