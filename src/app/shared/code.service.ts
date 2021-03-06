import {Injectable} from '@angular/core';


@Injectable()
export class CodeService {
    table = {
        "0": "删除",
        "1": "可用",
        "2": "禁用",
        "3": "未启用",
        "4": "启用",

        "7": "待审核",
        "8": "已通过",
        "9": "未通过",

        "11": "未完善资料",
        "12": "个人",
        "13": "机构",

        "20": "Lv1_禁止审核",
        "21": "Lv2_先审后播",
        "22": "Lv3_自动审核",


        "30": "已签约",
        "31": "未签约",

        "41": "专业主播",

        "51": "公司",
        "52": "工作室",
        "53": "出版机构",
        "54": "广电机构",

        "61": "正序",
        "62": "倒序",


        "71": "不定期",
        "72": "每天",
        "73": "每周",
        "74": "每月",

        "78": "播控渠道",
        "79": "播控方案",

        "80": "标签",
        "81": "CP",
        "82": "专辑",
        "83": "节目",
        "84": "合约",
        "85": "公告",
        "86": "通知",
        "87": "用户",
        "88": "角色",
        "89": "频道",

        "90": "转码成功",
        "91": "转码中",
        "92": "转码失败",


        "101": "研发中心",
        "101001": "产品组",
        "101002": "技术组",
        "102": "华为业务部",
        "102001": "内容运营组",
        "102002": "产品组",
        "103": "酷听业务部",
        "103001": "运营组",
        "103002": "技术组",
        "104": "渠道媒介部",
        "104001": "媒介",
        "105": "综合辅助",
        "105001": "法务",
        "105002": "财务",


        "201": "资料有误",
        "202": "信息不全",
        "203": "信息不真实",
        "204": "cp修改需求",


        "210": "音质差",
        "211": "有嵌入广告",
        "212": "内容涉嫌黄暴",
        "213": "版权问题",


        "301": "置顶",
        "302": "加粗",
        "303": "标红",
        "304": "推荐",
        "305": "活动",
        "306": "系统发送",

        "401": "转码中",
        "402": "转码完成",

        "600": "北京东方视角文化传媒股份有限公司",

        "501": "PH_客户端_Android",
        "502": "PH_客户端_iOS",
        "503": "PH        _网页",
        "504": "Pad_Android",
        "505": "Pad_iOS",
        "506": "PC_网页",
        "507": "PC_客户端",
        "508": "TV_Android",
        "509": "IVI_Android",


        "700": "未知",
        "701": "单声道",
        "702": "双声道",
        "999": "错误"

    }

    constructor() {

    }

    getStartAndEndIndexTable(startNum, endNum) {
        let sliceTable=[];
        for (let i = startNum; i <= endNum; i++) {
            sliceTable.push({key:i,value:this.table[i]}) ;
            
        }
        return sliceTable;

    }


}
