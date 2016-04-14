/**
 * Created by L on 2016/4/14.
 */
var GamingLayer = cc.LayerColor.extend({

    init:function(){
        this._super();
        // this.setColor(cc.c4(0,0,0,0));
        //
        // var winSize = cc.Director.getInstance().getWinSize();
        //
        // // 创建一个标签用于显示“GameOver”字符串
        // // 第一个参数是内容，第二个是字体，第三个是字体大小
        // var _label = cc.LabelTTF.create("GameOver","Thonburi",40);
        // cc.log("Start !!");
        // // 设置位置
        // _label.setPosition(cc.p(winSize.width/2,winSize.height/2));
        //
        // this.addChild(_label,0);
        var layer1 = cc.LayerColor.create(cc.c4(255, 255, 0, 255), 320, 480);
        var layer2 = cc.LayerColor.create(cc.c4(255, 0, 0, 255), 100, 100);
        var layer2_1 = cc.LayerColor.create(cc.c4(0, 255, 0, 255), 50, 50);

        this.addChild(layer1);
        layer1.addChild(layer2);
        layer2.addChild(layer2_1);


        return true;
    }
})
//这个方法创建了GamingLayer层，并调用这个层的init方法进行初始化
GamingLayer.create = function(){
    var gamingLayer = new GamingLayer();
    if(gamingLayer && gamingLayer.init()){
        return GamingLayer;
    }
    return null;
}

var GamingScene = cc.Scene.extend({
    _layer:null,

    init:function(){
        // 这个场景加入了一个GameOverLayer层
        this._layer = GamingLayer.create();
        this.addChild(this._layer,1);

        return true;
    }
})
//这个方法创建了GameOverScene场景，并调用这个场景的init方法进行初始化
GamingScene.create = function(){
    var scene = new GamingScene();
    if(scene && scene.init()){
        return scene;
    }
    return null;
}