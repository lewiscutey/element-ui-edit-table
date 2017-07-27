<template>
    <div>
        <h2>可编辑表格</h2>
        <el-row>
            <el-form ref="Regulation"
                    :model="Data"
                    :rules="Rules">
                <el-col :span="2" class="el-form-item__label">
                    <label>大事：</label>
                </el-col>
                <el-col :span="3">
                    <el-form-item prop="eventsName">
                        <el-input v-model='Data.eventsName'
                                auto-complete="off"
                                placeholder="请输入大事">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="2" class="el-form-item__label">
                    <label>链接：</label>
                </el-col>
                <el-col :span="3">
                    <el-form-item prop="link">
                            <!--:rules="ruleslink">-->
                        <el-input v-model='Data.link' placeholder="请输入链接地址"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="2" class="el-form-item__label">
                    <label>分类：</label>
                </el-col>
                <el-col :span="3">
                    <el-form-item prop="value">
                        <el-select v-model='Data.value' class="el-form-item__select">
                            <el-option
                                v-for="item in Options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="3" class="el-form-item__label">
                    <label>统计日期：</label>
                </el-col>
                <el-col :span="2">
                    <el-form-item prop="time">
                        <el-date-picker v-model="Data.time"
                                        :style="{width:'145px'}"
                                        :picker-options="pickerOptions"
                                        type="date"
                                        placeholder="请选择最新日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="4" class="el-form-item__label paddingTop">
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">新增</el-button>
                </el-form-item>
                </el-col>
            </el-form>
            <el-table :data="Datas" class="tb-edit" style="width: 100%" row-class-name="">
                <el-table-column label="序号" width="100" align="center">
                    <template scope="scope">
                            <el-input type="number" size="small" v-model="scope.row.number" placeholder="请输入序号" @change="handleEdit(scope.$index, scope.row)"></el-input>
                            <span>{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="大事" align="center">
                    <template scope="scope">
                        <el-input size="small" v-model="scope.row.eventsName" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.eventsName}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="链接" align="center">
                    <template scope="scope">
                        <el-input size="small" v-model="scope.row.value" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.value}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="分类" align="center">
                    <template scope="scope">
                        <el-select v-model="scope.row.catagory" @change="handleEdit(scope.$index, scope.row)">
                            <option v-for="items in Options"
                                :key="items.value"
                                :label="items.label"
                                :value="items.value"></option>
                        </el-select>
                        <span>{{scope.row.catagory}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="统计日期" align="center">
                    <template scope="scope">
                        <el-input size="small" v-model="scope.row.link" placeholder="" @change="handleEdit(scope.$index, scope.row)"></el-input>
                        <span>{{scope.row.link}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template scope="scope">
                        <el-button class="editbtn" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button class="savebtn" type="primary" size="small" @click="save(scope.$index, scope.row)">保存</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>

export default {
    name: 'App',
    data() {
        return {
            Data: {id: null, number: 1, eventsName: '', value: '', time: '', link: ''},
            Datas: [
                {id: null, number: 1, eventsName: '11', value: '111', time: '', link: ''},
                {id: null, number: 2, eventsName: '22', value: '222', time: '', link: ''},
                {id: null, number: 3, eventsName: '33', value: '333', time: '', link: ''},
                {id: null, number: 4, eventsName: '44', value: '444', time: '', link: ''}
            ],
			Rules: {
				eventsName: [{required: true, message: '不能为空', trigger: 'blur,change'}],
				link: [{required: true, message: '不能为空', trigger: 'blur,change'}],
				value: [{required: true, message: '不能为空', trigger: 'blur,change'}],
				time: [{required: true, type: 'date', message: '不能为空', trigger: 'blur,change'}]
			},
            pickerOptions: {
                disabledDate: function (time) {
                    return time;
                }
            },
            Options: [
                {value: '哈哈', label: '哈哈'},
				{value: '嘿嘿', label: '嘿嘿'}
            ]
        };
    },
    computed: {
       
    },
    methods: {
        submitForm () {
            alert(1);
        }
    },
    watch: {
       
    }
};
</script>
<style>

</style>
