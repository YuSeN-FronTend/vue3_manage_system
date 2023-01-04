<template>
    <div class="dashboard">
        <div class="card">
            <div class="card-box">
                <div class="icon">
                    <el-icon size="70" color="#2c3e50">
                        <Notebook />
                    </el-icon>
                </div>
                <div class="math">12312</div>
            </div>
            <div class="card-box">
                <div class="icon">
                    <el-icon size="70" color="#2c3e50">
                        <Collection />
                    </el-icon>
                </div>
                <div class="math">31423</div>
            </div>
            <div class="card-box">
                <div class="icon">
                    <el-icon size="70" color="#2c3e50">
                        <Memo />
                    </el-icon>
                </div>
                <div class="math">43123</div>
            </div>
            <div class="card-box">
                <div class="icon">
                    <el-icon size="70" color="#2c3e50">
                        <Reading />
                    </el-icon>
                </div>
                <div class="math">31251</div>
            </div>
        </div>
        <div id="bar"></div>
        <div id="pie"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

    export default {
        setup() {
            return {
                
            }
        },
        mounted() {
            // 柱状图
            const myBar = echarts.init(document.getElementById('bar'));
            const myPie = echarts.init(document.getElementById('pie'))
            let option1 = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            };
            let option2 = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            };
            myBar.setOption(option1);
            myPie.setOption(option2);
            window.addEventListener('resize', function() {
                myBar.resize();
                myPie.resize();
            })
        },
    }
</script>

<style lang="less" scoped>
.dashboard{
        height: 100%;
        width: 100%;
        .card{
            height: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 30px;
            &-box{
                height: 175px;
                width: 250px;
                box-shadow: 2px 2px 8px rgb(196, 194, 194);
                display: flex;
                .icon{
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .math{
                    width: 50%;
                    font-size: 25px;
                    font-weight: 500;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        #bar{
            padding-top: 50px;
            height: 60%;
            width: 50%;
            float: left;
        }
        #pie{
            padding-top: 50px;
                height: 60%;
                width: 50%;
                float: right;
        }
    }
</style>