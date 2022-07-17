package com.moonlight.erp.web;

import com.moonlight.erp.model.NaverCategory;
import com.moonlight.erp.model.SearchKeyword;
import com.moonlight.erp.repository.NaverCategoryRepository;
import com.moonlight.erp.repository.SearchKeywordRepository;
import com.moonlight.erp.service.KeywordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class keywordApiController {

    @Autowired
    KeywordService keywordService;

    @PostMapping("/keywords")
    public List<SearchKeyword> keywordList(@RequestBody HashMap<String, Object> map){
        return keywordService.keywordList(map);
        //return searchKeywordRepository.findAll().toString();
    }

    @PostMapping("/naverCategory")
    public List<NaverCategory> naverCategoryList(@RequestBody HashMap<String, Object> map){
       return keywordService.naverCategoryList(map);
    }
}
