package com.alibaba.controller;

import com.alibaba.bean.Result;
import com.alibaba.bean.Download;
import com.alibaba.service.DownloadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DownloadController {

    @Autowired
    private DownloadService downloadService;

    /**
     * 注册
     *
     * @param download 参数封装
     * @return Result
     */
    @PostMapping(value = "/go")
    public Result regist(Download download) {
        return downloadService.regist(download);
    }
}


