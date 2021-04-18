Content.makeFrontInterface(400, 400);
const var ScriptFX1 = Synth.getEffect("Script FX1");


const var Knob2 = Content.getComponent("Knob2");
const var Knob3 = Content.getComponent("Knob3");


const var Knob1 = Content.getComponent("Knob1");





inline function onKnob1Control(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.peak, value);
	Knob2.setValue(value);
    Knob2.changed();
    Knob3.setValue(value);
    Knob3.changed();
};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 