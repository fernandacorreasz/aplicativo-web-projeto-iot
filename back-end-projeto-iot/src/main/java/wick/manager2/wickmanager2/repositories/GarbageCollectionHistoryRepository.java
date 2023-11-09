package wick.manager2.wickmanager2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import wick.manager2.wickmanager2.model.GarbageCollectionHistory;

@Repository
public interface GarbageCollectionHistoryRepository extends JpaRepository<GarbageCollectionHistory, Long> {
}
