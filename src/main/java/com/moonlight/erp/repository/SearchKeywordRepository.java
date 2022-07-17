package com.moonlight.erp.repository;

import com.moonlight.erp.model.SearchKeyword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchKeywordRepository extends JpaRepository<SearchKeyword, Integer> {
    List<SearchKeyword> findByBigClass(String bigClass);
    List<SearchKeyword> findByBigClassAndMiddleClass(String bigClass, String middleClass);
    List<SearchKeyword> findByBigClassAndMiddleClassAndSmallClass(String bigClass, String middleClass, String smallClass);
    List<SearchKeyword> findByBigClassAndMiddleClassAndSmallClassAndDetailClass(String bigClass, String middleClass, String smallClass, String detailClass);
}