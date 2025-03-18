<template>
  <div class="writeup-container">
    <!-- 顶部搜索区域 -->
    <div class="search-area">
      <el-select v-model="searchField" placeholder="Select" style="width: 200px">
        <el-option label="ID" value="id" />
        <el-option label="标题" value="title" />
      </el-select>
      <el-input v-model="searchValue" placeholder="value" style="width: 200px; margin: 0 10px" />
      <el-button type="primary">查询</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="createTime" label="发表时间" width="180" />
      <el-table-column prop="status" label="审核状态" width="100">
        <template #default="scope">
          <el-tag :type="scope.row.status === 'approved' ? 'success' : 'info'" effect="plain">
            {{ scope.row.status === 'approved' ? '通过' : '待审核' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="分数" width="80" align="center" />
      <el-table-column label="操作" width="200">
        <template #default>
          <el-button type="warning" size="small">查看</el-button>
          <el-button type="success" size="small">重审</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <div class="pagination-group">
        <span>Total 1</span>
        <el-select v-model="pageSize" style="width: 100px; margin: 0 10px">
          <el-option label="10/page" value="10" />
          <el-option label="20/page" value="20" />
        </el-select>
        <el-pagination
          v-model:current-page="currentPage"
          :total="1"
          :page-size="10"
          layout="prev, pager, next"
        />
        <span style="margin: 0 10px">Go to</span>
        <el-input v-model="goToPage" style="width: 50px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchField = ref('')
const searchValue = ref('')
// 当前页码
const currentPage = ref(1)
// 每页显示条数
const pageSize = ref('10')
// 跳转页码
const goToPage = ref('')

// 模拟表格数据
const tableData = ref([
  {
    id: '46', //文章id
    title: '123', //文章标题
    author: 'admin', //作者
    createTime: '2025-03-07 12:16:16',
    status: 'approved', //审核状态
    score: '10',
  },
])
</script>

<style scoped>
.writeup-container {
  padding: 20px;
  background-color: #fff;
}

.search-area {
  display: flex;
  align-items: center;
}

.pagination {
  margin-top: 20px;
}

.pagination-group {
  display: flex;
  align-items: center;
}

:deep(.el-button) {
  margin: 0 5px;
}

:deep(.el-table) {
  margin: 20px 0;
}

:deep(.el-pagination) {
  margin-right: 10px;
}
</style>
