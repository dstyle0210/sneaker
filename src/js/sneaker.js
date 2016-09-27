"use strict";

var sneakersItemList = [
    {
        brand:"jordan",
        no:"31",
        year:"2016",
        style:"845037",
        code:"001",
        image:"845037_001.jpg",
        enname:"AIR JORDAN XXXI",
        ennick:"BANNED",
        encolor:"Black/White/University Red",
        endate:"SATURDAY, SEPTEMBER 3, 2016 - 10:00 AM EDT",
        enprice:"185",
        enluanch:"http://www.nike.com/us/en_us/launch/c/2016-07/air-jordan-xxxi",
        koname:"에어 조던 XXXI",
        konick:"밴드(브레드)",
        kocolor:"블랙/유니바시티레드-화이트",
        kodate:"2016년 09월 03일 오전 11시",
        koprice:"239000",
        koluanch:"http://www.nike.co.kr/display/displayShop.lecs?displayNo=NK1A40B43",
        hidden:"-",
        early:"",
        blog:""
    },
    {
        brand:"jordan",
        no:"31",
        year:"2016",
        style:"845037",
        code:"003",
        image:"845037_003.jpg",
        enname:"AIR JORDAN XXXI",
        ennick:"FINE PRINT",
        encolor:"Black/Wolf Grey/White",
        endate:"SATURDAY, SEPTEMBER 17, 2016 - 10:00 AM EDT",
        enprice:"185",
        enluanch:"http://www.nike.com/us/en_us/launch/c/2016-09/air-jordan-xxxi-fine-print",
        koname:"에어 조던 XXXI",
        konick:"파인프린트",
        kocolor:"미발매",
        kodate:"-",
        koprice:"-",
        koluanch:"",
        hidden:"-",
        early:"",
        blog:""
    }
]

$(function(){
    const VUE = new Vue({
        el: '#sneakerList',
        ready:function(){
            $("#sneakerList img").each(function(){
                var src = $(this).attr("data-src");
                $(this).attr("src",src);
            });
        },
        data: {
            sneakers: sneakersItemList // _.shuffle()
        }
    });
    console.log(VUE);
});


/*
var data = [
    {name:"jordan1"},
    {name:"jordan2"},
    {name:"kyrie"}
];
class SneakerItem{
    constructor(sneaker){
        this.sneaker = sneaker;
    }
    log(){
        console.log(this.sneaker.name);
        return "asd";
    }
};

var SneakerItemList = (function(list){
    _.each(data,function(item){
        list.push(new SneakerItem(item));
    });
    return list;
})([]);

_.each(SneakerItemList,function(sneaker){
    VUE = new Vue({
        el: '#sneaker-rack',
        data: {
            sneakers: _.shuffle( sneakers ) // _.shuffle()
        }
    });
});
*/