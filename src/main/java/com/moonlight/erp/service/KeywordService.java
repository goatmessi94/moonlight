package com.moonlight.erp.service;

import com.moonlight.erp.model.NaverCategory;
import com.moonlight.erp.model.SearchKeyword;
import com.moonlight.erp.repository.NaverCategoryRepository;
import com.moonlight.erp.repository.SearchKeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class KeywordService {
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    SearchKeywordRepository searchKeywordRepository;

    @Autowired
    NaverCategoryRepository naverCategoryRepository;

    public List<SearchKeyword> keywordList(HashMap<String, Object> map) {

        List<SearchKeyword> searchKeywordList = new ArrayList<>();
        String bigClass = (String)map.get("bigClass");
        String middleClass = (String)map.get("middleClass");
        String smallClass = (String)map.get("smallClass");
        String detailClass = (String)map.get("detailClass");

        if (middleClass != null) {
            if (middleClass.equals("null")){
                middleClass = null;
            }
        }
        if (smallClass != null) {
            if (smallClass.equals("null")){
                smallClass = null;
            }
        }
        if (detailClass != null) {
            if (detailClass.equals("null")){
                detailClass = null;
            }
        }

        if (bigClass.equals("all")) {
            searchKeywordList = searchKeywordRepository.findAll();
        } else {
            if (middleClass == null && smallClass == null && detailClass == null ){
                searchKeywordList = searchKeywordRepository.findByBigClass(bigClass);
            } else if (smallClass == null && detailClass == null) {
                searchKeywordList = searchKeywordRepository.findByBigClassAndMiddleClass(bigClass, middleClass);
            } else if (detailClass == null) {
                searchKeywordList = searchKeywordRepository.findByBigClassAndMiddleClassAndSmallClass(bigClass, middleClass, smallClass);
            } else {
                searchKeywordList = searchKeywordRepository.findByBigClassAndMiddleClassAndSmallClassAndDetailClass(bigClass, middleClass, smallClass, detailClass);
            }
        }

        return searchKeywordList;
    }

    public List<NaverCategory> naverCategoryList(HashMap<String, Object> map) {
        String bigClass = (String)map.get("bigClass");
        String middleClass = (String)map.get("middleClass");
        String smallClass = (String)map.get("smallClass");
        String detailClass = (String)map.get("detailClass");
        List<NaverCategory> naverCategoryList = new ArrayList<>();
        if (middleClass == null && smallClass == null && detailClass == null ) {
            Query query = entityManager.createNativeQuery("SELECT MIDDLE_CLASS FROM MB_NAVER_CATEGORY WHERE BIG_CLASS = :bigClass GROUP BY MIDDLE_CLASS");
            query.setParameter("bigClass", bigClass);
            naverCategoryList = query.getResultList();
        } else if (smallClass == null && detailClass == null) {
            Query query = entityManager.createNativeQuery("SELECT SMALL_CLASS FROM MB_NAVER_CATEGORY WHERE BIG_CLASS = :bigClass AND MIDDLE_CLASS = :middleClass GROUP BY SMALL_CLASS");
            query.setParameter("bigClass", bigClass);
            query.setParameter("middleClass", middleClass);
            naverCategoryList = query.getResultList();
        } else if (detailClass == null) {
            Query query = entityManager.createNativeQuery("SELECT DETAIL_CLASS FROM MB_NAVER_CATEGORY WHERE BIG_CLASS = :bigClass AND MIDDLE_CLASS = :middleClass AND SMALL_CLASS = :smallClass GROUP BY DETAIL_CLASS");
            query.setParameter("bigClass", bigClass);
            query.setParameter("middleClass", middleClass);
            query.setParameter("smallClass", smallClass);
            naverCategoryList = query.getResultList();
        }

        return naverCategoryList;
    }
}
