Content.makeFrontInterface(400, 478);
const var ScriptFX1 = Synth.getEffect("Script FX1");


const var Knob2 = Content.getComponent("Knob2");
const var Knob3 = Content.getComponent("Knob3");




const var Knob1 = Content.getComponent("Knob1");






Content.getComponent("Knob1").setControlCallback(onKnob1Control);



const var bypass = Content.getComponent("bypass");


inline function onbypassControl(component, value)
{
	ScriptFX1.setBypassed(value);
};

Content.getComponent("bypass").setControlCallback(onbypassControl);

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
 
