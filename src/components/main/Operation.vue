<template>
    <div class="operation">
        <div style="padding-bottom: 20px;">
            <el-card class="box-card">
        <el-input style="width: 200px;" v-model="search" placeholder="Search" />
        <el-button type="primary" style="margin: 0 20px 0 5px;" :icon="Search"></el-button>
        <el-button type="success" :icon="Plus">添加</el-button>
        </el-card>
        </div>
        <el-card>
            <el-table :data="tableData"  style="height:608px; overflow:scroll;">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
            <div class="demo-pagination-block">
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
                     background layout="total, sizes, prev, pager, next, jumper"
                    :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </el-card>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'
export default {
    name: 'Operation',
    setup () {
        const search = ref('');
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }, 
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
        const currentPage = ref(5)
        const pageSize = ref(100)
        const handleSizeChange = (val) => {
            console.log(`${val} items per page`)
        }
        const handleCurrentChange = (val) => {
            console.log(`current page: ${val}`)
        }
        return {
            search,
            Search,
            Plus,
            tableData,
            currentPage,
            pageSize,
            handleSizeChange,
            handleCurrentChange
        }
    }
}
</script>

<style lang="less" scoped>
.operation{
    width: 100%;
}
.demo-pagination-block{
    margin-top: 20px;
    display: flex;
    justify-content: right;
}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>