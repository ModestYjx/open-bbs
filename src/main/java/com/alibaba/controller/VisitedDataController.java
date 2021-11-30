package com.alibaba.controller;

import com.alibaba.service.VisitedDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class VisitedDataController {
    @Autowired
    private VisitedDataService visitedDataService;

    @RequestMapping(value = "/index1")
    public String index() {
        System.out.println(visitedDataService.findAll());
        return "index";
    }
}
