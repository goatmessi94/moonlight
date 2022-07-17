package com.moonlight.erp.repository;

import com.moonlight.erp.model.NaverCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface NaverCategoryRepository extends JpaRepository<NaverCategory, Integer> {

    @Query (
            nativeQuery = true,
            value =
            "select mnb.middleClass from NaverCategory mnb WHERE mnb.bigClass = :bigClass GROUP BY mnb.middleClass"
    )
    List<NaverCategory> findByBigClassWithJpql(@PathVariable("bigClass") String bigClass);

    List<NaverCategory> findByBigClass(String bigClass);
}
