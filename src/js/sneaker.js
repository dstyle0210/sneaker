let VUE;
$(function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1pOlPpmQkwQhXSFMDx6wryFhvQL8tjf1gbbiJQLRvDPs/1/public/values?alt=json",function(DB){
        var sneakers = _.map(DB.feed.entry,function(data){
            var o = {};
            // 1차정제(스프레드시트 데이터)
            for(key in data){
                if(key.indexOf("gsx$")!= -1){
                    var nkey = key.split("gsx$")[1];
                    o[nkey] = data[key].$t;
                }
            }
            return o;
        });

        _.each(sneakers,function(item){
            item.type="kor";
            item.show="show";
        });
        VUE = new Vue({
            el: '#sneakerList',
            ready:function(){
                $("#sneakerList img").each(function(){
                    var src = $(this).attr("data-src");
                    $(this).attr("src",src);
                });
            },
            data: {
                sneakers: sneakers // _.shuffle()
            },
            methods:{
                lang:function(index,lang){
                    this.sneakers[index].type=lang;
                },
                allLang:function(lang){
                    _.each(this.sneakers,function(item){
                        item.type = lang;
                    });
                },
                update:function(){
                    _.each(this.sneakers,function(item,index){
                        console.log(index);
                        item.show = (index%2==0) ? "" : "show";
                    });
                },
                viewAll:function(){
                    _.each(this.sneakers,function(item,index){
                        item.show = "show";
                    });
                }
            }
        });
    });
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