gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDspeakerObjects1= [];
gdjs.New_32scene3Code.GDspeakerObjects2= [];
gdjs.New_32scene3Code.GDplatformObjects1= [];
gdjs.New_32scene3Code.GDplatformObjects2= [];
gdjs.New_32scene3Code.GDgrasshopperObjects1= [];
gdjs.New_32scene3Code.GDgrasshopperObjects2= [];
gdjs.New_32scene3Code.GDbackgroundObjects1= [];
gdjs.New_32scene3Code.GDbackgroundObjects2= [];
gdjs.New_32scene3Code.GDtext2Objects1= [];
gdjs.New_32scene3Code.GDtext2Objects2= [];
gdjs.New_32scene3Code.GDtext3Objects1= [];
gdjs.New_32scene3Code.GDtext3Objects2= [];
gdjs.New_32scene3Code.GDtext4Objects1= [];
gdjs.New_32scene3Code.GDtext4Objects2= [];
gdjs.New_32scene3Code.GDtext5Objects1= [];
gdjs.New_32scene3Code.GDtext5Objects2= [];
gdjs.New_32scene3Code.GDtext1Objects1= [];
gdjs.New_32scene3Code.GDtext1Objects2= [];
gdjs.New_32scene3Code.GDbackground2Objects1= [];
gdjs.New_32scene3Code.GDbackground2Objects2= [];
gdjs.New_32scene3Code.GDscoreObjects1= [];
gdjs.New_32scene3Code.GDscoreObjects2= [];
gdjs.New_32scene3Code.GDball2Objects1= [];
gdjs.New_32scene3Code.GDball2Objects2= [];
gdjs.New_32scene3Code.GDball3Objects1= [];
gdjs.New_32scene3Code.GDball3Objects2= [];
gdjs.New_32scene3Code.GDball4Objects1= [];
gdjs.New_32scene3Code.GDball4Objects2= [];
gdjs.New_32scene3Code.GDballObjects1= [];
gdjs.New_32scene3Code.GDballObjects2= [];
gdjs.New_32scene3Code.GDtexte2Objects1= [];
gdjs.New_32scene3Code.GDtexte2Objects2= [];
gdjs.New_32scene3Code.GDtexte4Objects1= [];
gdjs.New_32scene3Code.GDtexte4Objects2= [];
gdjs.New_32scene3Code.GDtexte3Objects1= [];
gdjs.New_32scene3Code.GDtexte3Objects2= [];
gdjs.New_32scene3Code.GDtexte1Objects1= [];
gdjs.New_32scene3Code.GDtexte1Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDspeakerObjects1Objects = Hashtable.newFrom({"speaker": gdjs.New_32scene3Code.GDspeakerObjects1});gdjs.New_32scene3Code.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));
gdjs.New_32scene3Code.GDtext5Objects1.createFrom(runtimeScene.getObjects("text5"));
gdjs.New_32scene3Code.GDtexte1Objects1.createFrom(runtimeScene.getObjects("texte1"));
gdjs.New_32scene3Code.GDtexte2Objects1.createFrom(runtimeScene.getObjects("texte2"));
gdjs.New_32scene3Code.GDtexte3Objects1.createFrom(runtimeScene.getObjects("texte3"));
gdjs.New_32scene3Code.GDtexte4Objects1.createFrom(runtimeScene.getObjects("texte4"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDtext5Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].addPolarForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte2Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte3Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte4Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte1Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte1Objects1[i].activate(false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "1");
}}

}


{

gdjs.New_32scene3Code.GDspeakerObjects1.createFrom(runtimeScene.getObjects("speaker"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDspeakerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "translate_tts.mp3", false, 100, 1);
}}

}


{


{
}

}


{

gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDgrasshopperObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDgrasshopperObjects1[i].getX() > 460 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDgrasshopperObjects1[k] = gdjs.New_32scene3Code.GDgrasshopperObjects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDgrasshopperObjects1 */
gdjs.New_32scene3Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
gdjs.New_32scene3Code.GDtexte1Objects1.createFrom(runtimeScene.getObjects("texte1"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte1Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte1Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtext1Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext1Objects1[i].setString((( gdjs.New_32scene3Code.GDtexte1Objects1.length === 0 ) ? "" :gdjs.New_32scene3Code.GDtexte1Objects1[0].getString()));
}
}}

}


{

gdjs.New_32scene3Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDtext1Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDtext1Objects1[i].getString() == "1" ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDtext1Objects1[k] = gdjs.New_32scene3Code.GDtext1Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDtext1Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));
gdjs.New_32scene3Code.GDtexte1Objects1.createFrom(runtimeScene.getObjects("texte1"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].addPolarForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte1Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte1Objects1[i].activate(false);
}
}}

}


{


{
}

}


{

gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDgrasshopperObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDgrasshopperObjects1[i].getX() > 510 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDgrasshopperObjects1[k] = gdjs.New_32scene3Code.GDgrasshopperObjects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDgrasshopperObjects1 */
gdjs.New_32scene3Code.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
gdjs.New_32scene3Code.GDtexte2Objects1.createFrom(runtimeScene.getObjects("texte2"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte2Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtext2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext2Objects1[i].setString((( gdjs.New_32scene3Code.GDtexte2Objects1.length === 0 ) ? "" :gdjs.New_32scene3Code.GDtexte2Objects1[0].getString()));
}
}}

}


{

gdjs.New_32scene3Code.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDtext2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDtext2Objects1[i].getString() == "2" ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDtext2Objects1[k] = gdjs.New_32scene3Code.GDtext2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDtext2Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));
gdjs.New_32scene3Code.GDtexte2Objects1.createFrom(runtimeScene.getObjects("texte2"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].addPolarForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte2Objects1[i].activate(false);
}
}}

}


{


{
}

}


{

gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDgrasshopperObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDgrasshopperObjects1[i].getX() > 560 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDgrasshopperObjects1[k] = gdjs.New_32scene3Code.GDgrasshopperObjects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDgrasshopperObjects1 */
gdjs.New_32scene3Code.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
gdjs.New_32scene3Code.GDtexte3Objects1.createFrom(runtimeScene.getObjects("texte3"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte3Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtext3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext3Objects1[i].setString((( gdjs.New_32scene3Code.GDtexte3Objects1.length === 0 ) ? "" :gdjs.New_32scene3Code.GDtexte3Objects1[0].getString()));
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", false);
}
}}

}


{

gdjs.New_32scene3Code.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDtext3Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDtext3Objects1[i].getString() == "3" ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDtext3Objects1[k] = gdjs.New_32scene3Code.GDtext3Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDtext3Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));
gdjs.New_32scene3Code.GDtexte3Objects1.createFrom(runtimeScene.getObjects("texte3"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].addPolarForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte3Objects1[i].activate(false);
}
}}

}


{

gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDgrasshopperObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDgrasshopperObjects1[i].getX() > 610 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDgrasshopperObjects1[k] = gdjs.New_32scene3Code.GDgrasshopperObjects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDgrasshopperObjects1 */
gdjs.New_32scene3Code.GDtext4Objects1.createFrom(runtimeScene.getObjects("text4"));
gdjs.New_32scene3Code.GDtexte4Objects1.createFrom(runtimeScene.getObjects("texte4"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte4Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtext4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext4Objects1[i].setString((( gdjs.New_32scene3Code.GDtexte4Objects1.length === 0 ) ? "" :gdjs.New_32scene3Code.GDtexte4Objects1[0].getString()));
}
}}

}


{

gdjs.New_32scene3Code.GDtext4Objects1.createFrom(runtimeScene.getObjects("text4"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDtext4Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDtext4Objects1[i].getString() == "4" ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDtext4Objects1[k] = gdjs.New_32scene3Code.GDtext4Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDtext4Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));
gdjs.New_32scene3Code.GDtexte4Objects1.createFrom(runtimeScene.getObjects("texte4"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].addPolarForce(0, 50, 1);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtexte4Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtexte4Objects1[i].activate(false);
}
}}

}


{

gdjs.New_32scene3Code.GDgrasshopperObjects1.createFrom(runtimeScene.getObjects("grasshopper"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDgrasshopperObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDgrasshopperObjects1[i].getX() > 665 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDgrasshopperObjects1[k] = gdjs.New_32scene3Code.GDgrasshopperObjects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
gdjs.New_32scene3Code.GDball2Objects1.createFrom(runtimeScene.getObjects("ball2"));
/* Reuse gdjs.New_32scene3Code.GDgrasshopperObjects1 */
gdjs.New_32scene3Code.GDtext5Objects1.createFrom(runtimeScene.getObjects("text5"));
{for(var i = 0, len = gdjs.New_32scene3Code.GDgrasshopperObjects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDgrasshopperObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDtext5Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDtext5Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene3Code.GDball2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDball2Objects1[i].addPolarForce(0, 200, 0);
}
}}

}


{

gdjs.New_32scene3Code.GDball2Objects1.createFrom(runtimeScene.getObjects("ball2"));

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene3Code.GDball2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene3Code.GDball2Objects1[i].getX() > 835 ) {
        gdjs.New_32scene3Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene3Code.GDball2Objects1[k] = gdjs.New_32scene3Code.GDball2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene3Code.GDball2Objects1.length = k;}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDball2Objects1 */
{for(var i = 0, len = gdjs.New_32scene3Code.GDball2Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDball2Objects1[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "1");
}}

}


{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "1");
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", true);
}}

}


}; //End of gdjs.New_32scene3Code.eventsList0x5b70b8


gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDspeakerObjects1.length = 0;
gdjs.New_32scene3Code.GDspeakerObjects2.length = 0;
gdjs.New_32scene3Code.GDplatformObjects1.length = 0;
gdjs.New_32scene3Code.GDplatformObjects2.length = 0;
gdjs.New_32scene3Code.GDgrasshopperObjects1.length = 0;
gdjs.New_32scene3Code.GDgrasshopperObjects2.length = 0;
gdjs.New_32scene3Code.GDbackgroundObjects1.length = 0;
gdjs.New_32scene3Code.GDbackgroundObjects2.length = 0;
gdjs.New_32scene3Code.GDtext2Objects1.length = 0;
gdjs.New_32scene3Code.GDtext2Objects2.length = 0;
gdjs.New_32scene3Code.GDtext3Objects1.length = 0;
gdjs.New_32scene3Code.GDtext3Objects2.length = 0;
gdjs.New_32scene3Code.GDtext4Objects1.length = 0;
gdjs.New_32scene3Code.GDtext4Objects2.length = 0;
gdjs.New_32scene3Code.GDtext5Objects1.length = 0;
gdjs.New_32scene3Code.GDtext5Objects2.length = 0;
gdjs.New_32scene3Code.GDtext1Objects1.length = 0;
gdjs.New_32scene3Code.GDtext1Objects2.length = 0;
gdjs.New_32scene3Code.GDbackground2Objects1.length = 0;
gdjs.New_32scene3Code.GDbackground2Objects2.length = 0;
gdjs.New_32scene3Code.GDscoreObjects1.length = 0;
gdjs.New_32scene3Code.GDscoreObjects2.length = 0;
gdjs.New_32scene3Code.GDball2Objects1.length = 0;
gdjs.New_32scene3Code.GDball2Objects2.length = 0;
gdjs.New_32scene3Code.GDball3Objects1.length = 0;
gdjs.New_32scene3Code.GDball3Objects2.length = 0;
gdjs.New_32scene3Code.GDball4Objects1.length = 0;
gdjs.New_32scene3Code.GDball4Objects2.length = 0;
gdjs.New_32scene3Code.GDballObjects1.length = 0;
gdjs.New_32scene3Code.GDballObjects2.length = 0;
gdjs.New_32scene3Code.GDtexte2Objects1.length = 0;
gdjs.New_32scene3Code.GDtexte2Objects2.length = 0;
gdjs.New_32scene3Code.GDtexte4Objects1.length = 0;
gdjs.New_32scene3Code.GDtexte4Objects2.length = 0;
gdjs.New_32scene3Code.GDtexte3Objects1.length = 0;
gdjs.New_32scene3Code.GDtexte3Objects2.length = 0;
gdjs.New_32scene3Code.GDtexte1Objects1.length = 0;
gdjs.New_32scene3Code.GDtexte1Objects2.length = 0;

gdjs.New_32scene3Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
