package com.alibaba.controller;
/**
 * @Author: ModestYjx
 * @Description:
 * @Version: 1.0.0
 * @Date: 2021/11/30 20:58
 */
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

    @PostMapping(value = "/submit")
    public Result regist(Download download) {
        return downloadService.regist(download);
    }
}


