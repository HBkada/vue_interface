<template>
  <el-container class="layout-container">
    <!-- 左侧导航 -->
    <el-aside width="200px">
      <div class="logo">
        <img src="@/assets/logo.png" alt="MarsCTF" />
        MarsCTF
      </div>
      <el-menu default-active="/writeup-manage" class="side-menu" router>
        <!-- 用户模块 -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>用户模块</span>
          </template>
          <el-menu-item index="/user-manage">用户管理</el-menu-item>
          <el-menu-item index="/user-points">用户积分</el-menu-item>
        </el-sub-menu>

        <!-- 项目管理 -->
        <el-menu-item index="/project-manage">
          <el-icon><Document /></el-icon>
          <span>项目管理</span>
        </el-menu-item>

        <!-- 类别管理 -->
        <el-menu-item index="/category-manage">
          <el-icon><Files /></el-icon>
          <span>类别管理</span>
        </el-menu-item>

        <!-- 标签管理 -->
        <el-menu-item index="/tag-manage">
          <el-icon><Collection /></el-icon>
          <span>标签管理</span>
        </el-menu-item>

        <!-- Writeup模块 -->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Notebook /></el-icon>
            <span>Writeup模块</span>
          </template>
          <el-menu-item index="/writeup-review">Writeup审核</el-menu-item>
          <el-menu-item index="/writeup-manage">Writeup管理</el-menu-item>
        </el-sub-menu>

        <!-- 学习管理 -->
        <el-menu-item index="/study-manage">
          <el-icon><Reading /></el-icon>
          <span>学习管理</span>
        </el-menu-item>

        <!-- 容器管理 -->
        <el-menu-item index="/container-manage">
          <el-icon><Box /></el-icon>
          <span>容器管理</span>
        </el-menu-item>

        <!-- 公告管理 -->
        <el-menu-item index="/notice-manage">
          <el-icon><Bell /></el-icon>
          <span>公告管理</span>
        </el-menu-item>

        <!-- 平台配置 -->
        <el-menu-item index="/platform-config">
          <el-icon><Setting /></el-icon>
          <span>平台配置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧内容区 -->
    <el-container>
      <el-header style="height: 50px">
        <div class="header-left">
          <el-icon class="collapse-btn"><Fold /></el-icon>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>Writeup管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <el-dropdown>
            <span class="user-info">
              <el-avatar
                :size="30"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
              admin
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  UserFilled,
  Document,
  Collection,
  Notebook,
  Reading,
  Box,
  Bell,
  Setting,
  Fold,
  Files,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.logo {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #333;
  font-size: 18px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.logo img {
  height: 32px;
  margin-right: 10px;
  vertical-align: middle;
}

.side-menu {
  height: calc(100vh - 50px);
  border-right: 1px solid #e6e6e6;
}

.el-aside {
  background-color: #fff;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.collapse-btn {
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-info .el-avatar {
  margin-right: 8px;
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-menu-item.is-active) {
  background-color: #e6f7ff !important;
  color: #1890ff !important;
}

:deep(.el-menu-item:hover) {
  background-color: #f5f5f5 !important;
}

:deep(.el-sub-menu__title:hover) {
  background-color: #f5f5f5 !important;
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>
