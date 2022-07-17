package com.moonlight.erp.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class KeywordController {
    @GetMapping("/keywords/keywordSearch")
    public String keywordSearch(){
        return "keywords/keywordSearch";
    }
}
