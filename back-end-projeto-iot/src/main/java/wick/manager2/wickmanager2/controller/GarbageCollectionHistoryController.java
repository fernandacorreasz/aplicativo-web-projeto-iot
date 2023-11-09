package wick.manager2.wickmanager2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import wick.manager2.wickmanager2.model.GarbageCollectionHistory;
import wick.manager2.wickmanager2.service.GarbageCollectionHistoryService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/garbage-collection-history")
public class GarbageCollectionHistoryController {

    private final GarbageCollectionHistoryService garbageCollectionHistoryService;
    @Autowired
    public GarbageCollectionHistoryController(GarbageCollectionHistoryService garbageCollectionHistoryService) {
        this.garbageCollectionHistoryService = garbageCollectionHistoryService;
    }

    @GetMapping
    public List<GarbageCollectionHistory> getAllGarbageCollectionHistories() {
        return garbageCollectionHistoryService.getAllGarbageCollectionHistories();
    }

    @PostMapping
    public GarbageCollectionHistory registerGarbageCollectionHistory(@RequestBody GarbageCollectionHistory garbageCollectionHistory) {
        return garbageCollectionHistoryService.saveGarbageCollectionHistory(garbageCollectionHistory);
    }
}
