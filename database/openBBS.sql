/*
 Navicat Premium Data Transfer

 Source Server         : lqgirl
 Source Server Type    : MySQL
 Source Server Version : 50650
 Source Host           : 39.103.166.167:3306
 Source Schema         : openBBS

 Target Server Type    : MySQL
 Target Server Version : 50650
 File Encoding         : 65001

 Date: 30/11/2021 18:21:32
*/

SET NAMES utf8mb4;
SET
FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`
(
    `id`       int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(6000) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
    `password` varchar(6000) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
    INDEX      `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for visited_data
-- ----------------------------
DROP TABLE IF EXISTS `visited_data`;
CREATE TABLE `visited_data`
(
    `id`            bigint(20) NOT NULL,
    `visited_count` bigint(20) NULL DEFAULT NULL,
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

SET
FOREIGN_KEY_CHECKS = 1;
