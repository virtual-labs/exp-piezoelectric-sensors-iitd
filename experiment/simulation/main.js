

//////////////////////navnext start here////////////////////////////////////

function navNext0()
{

document.getElementById("canvas0").style.visibility="hidden";

document.getElementById("canvas1").style.visibility="visible";

}

function navNext1()
{

document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";

}

function navNext2()
{

document.getElementById("canvas2").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";

setTimeout(function()
{
	graph_show()
},1500);

}

function navNext3()
{

document.getElementById("canvas3").style.visibility="hidden";

document.getElementById("canvas4").style.visibility="visible";

}

function add_cantilever()

{

document.getElementById("addcantilever").style.visibility="hidden";
document.getElementById("arw1").style.visibility="hidden";

document.getElementById("aluminium_cantilever").style.visibility="visible";
document.getElementById("hand1_cantilever").style.visibility="visible";

document.getElementById("aluminium_cantilever").style.animation="cantilever_add 1.5s forwards"; 
document.getElementById("hand1_cantilever").style.animation="hand1_cantilever 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("addconcrete").style.visibility="visible";
document.getElementById("arw2").style.visibility="visible";
document.getElementById("hand1_cantilever").style.visibility="hidden";

document.getElementById("step1").style.visibility="hidden";
document.getElementById("step2").style.visibility="visible";

},1500);
}

function add_concrete()

{

document.getElementById("addconcrete").style.visibility="hidden";
document.getElementById("arw2").style.visibility="hidden";

document.getElementById("concrete").style.visibility="visible";
document.getElementById("hand1_concrete").style.visibility="visible";

document.getElementById("concrete").style.animation="concrete_add 1.5s forwards";
document.getElementById("hand1_concrete").style.animation="hand1_concrete 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("tb_cantilever").style.visibility="visible";
document.getElementById("arwtb_cantilever").style.visibility="visible";
document.getElementById("hand1_concrete").style.visibility="hidden";

document.getElementById("step2").style.visibility="hidden";
document.getElementById("step3").style.visibility="visible";

},1500);
}

function cantilever_fix()

{

document.getElementById("tb_cantilever").style.visibility="hidden";
document.getElementById("hand2_cantilever").style.visibility="visible";

document.getElementById("arwtb_cantilever").style.visibility="hidden";

document.getElementById("aluminium_cantilever").style.animation="cantilever_fix 1s forwards";
document.getElementById("hand2_cantilever").style.animation="hand2_cantilever_fix 1s forwards"; 

setTimeout(function()
{

document.getElementById("arw8").style.visibility="visible";
document.getElementById("addconcrete2").style.visibility="visible";

document.getElementById("step3").style.visibility="hidden";
document.getElementById("step3_1").style.visibility="visible";

},1500);
}


function add_pzt()

{

document.getElementById("addpzt").style.visibility="hidden";
document.getElementById("arw3").style.visibility="hidden";

document.getElementById("pzt").style.visibility="visible";
document.getElementById("pzt").style.animation="pzt_add 0.7s forwards"; 

setTimeout(function()
{

document.getElementById("tb_pzt").style.visibility="visible";
document.getElementById("arwtb_pzt").style.visibility="visible";

document.getElementById("step6").style.visibility="hidden";
document.getElementById("step7").style.visibility="visible";

},700);
}

function pzt_fix()

{

document.getElementById("tb_pzt").style.visibility="hidden";
document.getElementById("arwtb_pzt").style.visibility="hidden";

document.getElementById("pzt").style.animation="pzt_fix 2s forwards"; 

setTimeout(function()
{

document.getElementById("arrow11").style.visibility="visible";
document.getElementById("nextButton11").style.visibility="visible";

},2000);
}

function add_hammer()

{

document.getElementById("addhammer").style.visibility="hidden";
document.getElementById("arw4").style.visibility="hidden";
document.getElementById("hammer_wire").style.visibility="visible";

document.getElementById("full_hammer").style.visibility="visible";
document.getElementById("full_hammer").style.animation="full_hammer_add 1.5s forwards";
document.getElementById("hammer_wire").style.animation="hammer_wire_add 1.5s forwards";  

setTimeout(function()
{

document.getElementById("hammer_circle").style.visibility="visible";
document.getElementById("hammer_stand").style.visibility="visible";
document.getElementById("hammer_stick").style.visibility="visible";
document.getElementById("full_hammer").style.visibility="hidden";

document.getElementById("arw5").style.visibility="visible";
document.getElementById("addlcr").style.visibility="visible";

document.getElementById("step2_8").style.visibility="hidden";
document.getElementById("step2_9").style.visibility="visible";

},1500);
}


function add_lcr()

{

document.getElementById("addlcr").style.visibility="hidden";
document.getElementById("arw5").style.visibility="hidden";

document.getElementById("lcrmeter").style.visibility="visible";
document.getElementById("lcrmeter").style.animation="lcrmeter_add 1s forwards";

document.getElementById("off_screen").style.visibility="visible";
document.getElementById("off_screen").style.animation="off_screen_add 1s forwards"; 

document.getElementById("lcr_wire").style.visibility="visible";
document.getElementById("lcr_wire").style.animation="lcr_wire_add 1s forwards";

document.getElementById("black_circle").style.visibility="visible";
document.getElementById("black_circle").style.animation="black_circle_add 1s forwards";

document.getElementById("red_circle").style.visibility="visible";
document.getElementById("red_circle").style.animation="red_circle_add 1s forwards";

document.getElementById("lcrwire_black").style.visibility="visible";
document.getElementById("lcrwire_black").style.animation="lcrwire_black_add 1s forwards";

document.getElementById("lcrwire_red").style.visibility="visible";
document.getElementById("lcrwire_red").style.animation="lcrwire_red_add 1s forwards";

document.getElementById("line_black").style.visibility="visible";
document.getElementById("line_black").style.animation="line_black_add 1s forwards";

document.getElementById("line_red").style.visibility="visible";
document.getElementById("line_red").style.animation="line_red_add 1s forwards";

document.getElementById("redclipclose").style.visibility="visible";
document.getElementById("redclipclose").style.animation="redclipclose_add 1s forwards";

document.getElementById("blackclipclose").style.visibility="visible";
document.getElementById("blackclipclose").style.animation="blackclipclose_add 1s forwards";


setTimeout(function()
{

document.getElementById("tb_blackclip").style.visibility="visible";
document.getElementById("arwtb_blackclip").style.visibility="visible";

document.getElementById("step2_9").style.visibility="hidden";
document.getElementById("step2_10").style.visibility="visible";

},1000);


}

function animation_start()

{

document.getElementById("arw6").style.visibility="hidden";
document.getElementById("animation_btn").style.visibility="hidden";

document.getElementById("hammer_stick").style.animation="hammer_stick_move 2.5s infinite";
document.getElementById("hammer_circle").style.animation="hammer_circle_move 2.5s infinite";
setTimeout(function()
{
document.getElementById("beam_shake").style.animation="shake 0.5s infinite";
document.getElementById("pzt_shake").style.animation="shake 0.5s infinite";
// document.getElementById("pztwire_black").style.animation="shake 0.5s infinite";
// document.getElementById("pztwire_red").style.animation="shake 0.5s infinite";
},1800);
document.getElementById("arw7").style.visibility="visible";
document.getElementById("stop_btn").style.visibility="visible";

document.getElementById("step2_13").style.visibility="hidden";
document.getElementById("step2_14").style.visibility="visible";

}

function stop_hammer()

{

document.getElementById("arw7").style.visibility="hidden";
document.getElementById("stop_btn").style.visibility="hidden";

setTimeout(function()
{
document.getElementById("beam_shake").style.animation="";
document.getElementById("pzt_shake").style.animation="";
},1000);

document.getElementById("hammer_stick").style.animation=" 1s infinite";
document.getElementById("hammer_circle").style.animation=" 1s infinite";

document.getElementById("arrow12").style.visibility="visible";
document.getElementById("nextButton12").style.visibility="visible";

}

function blackclip_fix()

{

document.getElementById("tb_blackclip").style.visibility="hidden";
document.getElementById("arwtb_blackclip").style.visibility="hidden";

document.getElementById("line_black").style.animation="line_black 1.5s forwards";
document.getElementById("blackclipclose").style.animation="blackclipclose 1.5s forwards";

setTimeout(function()
{

document.getElementById("blackclipclose").style.visibility="hidden";
document.getElementById("blackclipopen").style.visibility="visible";
document.getElementById("blackclipopen").style.animation="blackclipopen 0.3s forwards";
document.getElementById("line_black").style.animation="line_black_more 0.3s forwards";

},1500);

setTimeout(function()
{

document.getElementById("blackclipopen").style.visibility="hidden";
document.getElementById("blackclipclose2").style.visibility="visible";

document.getElementById("tb_redclip").style.visibility="visible";
document.getElementById("arwtb_redclip").style.visibility="visible";

document.getElementById("step2_10").style.visibility="hidden";
document.getElementById("step2_11").style.visibility="visible";

},1800);

}

function redclip_fix()

{

document.getElementById("tb_redclip").style.visibility="hidden";
document.getElementById("arwtb_redclip").style.visibility="hidden";

document.getElementById("line_red").style.animation="line_red 1.5s forwards";
document.getElementById("redclipclose").style.animation="redclipclose 1.5s forwards";

setTimeout(function()
{

document.getElementById("redclipclose").style.visibility="hidden";
document.getElementById("redclipopen").style.visibility="visible";
document.getElementById("redclipopen").style.animation="redclipopen 0.5s forwards";
document.getElementById("line_red").style.animation="line_red_more 0.5s forwards";

},1500);

setTimeout(function()
{

document.getElementById("redclipopen").style.visibility="hidden";
document.getElementById("redclipclose2").style.visibility="visible";

document.getElementById("tb_lcron").style.visibility="visible";
document.getElementById("arwtb_lcron").style.visibility="visible";

document.getElementById("step2_11").style.visibility="hidden";
document.getElementById("step2_12").style.visibility="visible";

},2000);

}

function lcr_on()

{

document.getElementById("arwtb_lcron").style.visibility="hidden";
document.getElementById("tb_lcron").style.visibility="hidden";
document.getElementById("off_screen").style.visibility="hidden";

document.getElementById("arw6").style.visibility="visible";
document.getElementById("animation_btn").style.visibility="visible";

document.getElementById("step2_12").style.visibility="hidden";
document.getElementById("step2_13").style.visibility="visible";
}

function add_concrete2()

{

document.getElementById("addconcrete2").style.visibility="hidden";
document.getElementById("arw8").style.visibility="hidden";

document.getElementById("concrete2").style.visibility="visible";
document.getElementById("hand1_concrete2").style.visibility="visible";

document.getElementById("concrete2").style.animation="concrete2_add 1s forwards";
document.getElementById("hand1_concrete2").style.animation="hand1_concrete2 1s forwards";  

setTimeout(function()
{

document.getElementById("tb_concrete2").style.visibility="visible";
document.getElementById("arwtb_concrete2").style.visibility="visible";
document.getElementById("hand1_concrete2").style.visibility="hidden";

document.getElementById("step3_1").style.visibility="hidden";
document.getElementById("step3_2").style.visibility="visible";

},1000);
}

function concrete2_fix()

{

document.getElementById("tb_concrete2").style.visibility="hidden";
document.getElementById("arwtb_concrete2").style.visibility="hidden";
document.getElementById("hand1_concrete2").style.visibility="visible";


document.getElementById("concrete2").style.animation="concrete2_fix 2s forwards";
document.getElementById("hand1_concrete2").style.animation="hand1_concrete2_fix 2s forwards";

setTimeout(function()
{

document.getElementById("addbond").style.visibility="visible";
document.getElementById("arw9").style.visibility="visible";

document.getElementById("hand1_concrete2").style.visibility="hidden";
document.getElementById("hand2_cantilever").style.visibility="hidden";

document.getElementById("step3_2").style.visibility="hidden";
document.getElementById("step4").style.visibility="visible";

},2000);

}

function add_bond()

{

document.getElementById("addbond").style.visibility="hidden";
document.getElementById("arw9").style.visibility="hidden";

document.getElementById("bond").style.visibility="visible";
document.getElementById("brushfill").style.visibility="visible";

document.getElementById("bond").style.animation="bond_add 1s forwards";
document.getElementById("brushfill").style.animation="brushfill_add 1s forwards";  

setTimeout(function()
{

document.getElementById("tb_brushfill").style.visibility="visible";
document.getElementById("arwtb_brushfill").style.visibility="visible";

document.getElementById("step4").style.visibility="hidden";
document.getElementById("step5").style.visibility="visible";

},1000);
}

function brushfill_move()

{

document.getElementById("tb_brushfill").style.visibility="hidden";
document.getElementById("arwtb_brushfill").style.visibility="hidden";

document.getElementById("brushfill").style.visibility="hidden";
document.getElementById("brushfill_hand").style.visibility="visible";

document.getElementById("brushfill_hand").style.animation="brushfill_move 2s forwards"; 

setTimeout(function()
{

document.getElementById("greaseeffect").style.visibility="visible";
document.getElementById("greaseeffect").style.animation="greaseeffect_move 1s forwards"; 

},1500);

setTimeout(function()
{

document.getElementById("brush_hand").style.visibility="visible";
document.getElementById("brushfill_hand").style.visibility="hidden";

document.getElementById("brush_hand").style.animation="brush_hand_move 2s forwards"; 

},2000);

setTimeout(function()
{

document.getElementById("brush_hand").style.visibility="hidden";
document.getElementById("brush").style.visibility="visible";

document.getElementById("addpzt").style.visibility="visible";
document.getElementById("arw3").style.visibility="visible";

document.getElementById("step5").style.visibility="hidden";
document.getElementById("step6").style.visibility="visible";

},4000);

}

function add_soldrod()

{

document.getElementById("addsoldrod").style.visibility="hidden";
document.getElementById("arw1_can2").style.visibility="hidden";

document.getElementById("soldrod").style.visibility="visible";
document.getElementById("soldstand").style.visibility="visible";
document.getElementById("rod_wire").style.visibility="visible";

document.getElementById("soldrod").style.animation="soldrod_add 1s forwards";
document.getElementById("soldstand").style.animation="soldstand_add 1s forwards";
document.getElementById("rod_wire").style.animation="rod_wire_add 1s forwards"; 

setTimeout(function()
{

document.getElementById("addpztwires").style.visibility="visible";
document.getElementById("arw2_can2").style.visibility="visible";

document.getElementById("step2_1").style.visibility="hidden";
document.getElementById("step2_2").style.visibility="visible";

},1000);
}

function add_pztwires()

{

document.getElementById("addpztwires").style.visibility="hidden";
document.getElementById("arw2_can2").style.visibility="hidden";

document.getElementById("pztwire_black").style.visibility="visible";
document.getElementById("pztwire_red").style.visibility="visible";

document.getElementById("pztwire_black").style.animation="pztwire_black_add 1s forwards";
document.getElementById("pztwire_red").style.animation="pztwire_red_add 1s forwards";


setTimeout(function()
{

document.getElementById("tb_pztwire_red").style.visibility="visible";
document.getElementById("arwbtn_pztwire_red").style.visibility="visible";

document.getElementById("step2_2").style.visibility="hidden";
document.getElementById("step2_3").style.visibility="visible";

},1000);
}

function pztwire_red_fix()

{

document.getElementById("tb_pztwire_red").style.visibility="hidden";
document.getElementById("arwbtn_pztwire_red").style.visibility="hidden";

document.getElementById("pztwire_red").style.animation="pztred_fix 2s forwards";

setTimeout(function()
{

document.getElementById("tb_pztwire_black").style.visibility="visible";
document.getElementById("arwbtn_pztwire_black").style.visibility="visible";

document.getElementById("step2_3").style.visibility="hidden";
document.getElementById("step2_4").style.visibility="visible";

},2000);
}

function pztwire_black_fix()

{

document.getElementById("tb_pztwire_black").style.visibility="hidden";
document.getElementById("arwbtn_pztwire_black").style.visibility="hidden";

document.getElementById("pztwire_black").style.animation="pztblack_fix 2s forwards";

setTimeout(function()
{

document.getElementById("tb_zoom").style.visibility="visible";
document.getElementById("arw_zomm").style.visibility="visible";

document.getElementById("step2_4").style.visibility="hidden";
document.getElementById("step2_5").style.visibility="visible";

},2000);
}

function zoomview()

{

document.getElementById("tb_zoom").style.visibility="hidden";
document.getElementById("arw_zomm").style.visibility="hidden";

document.getElementById("zoomview_img").style.visibility="visible";

document.getElementById("tb_soldrod").style.visibility="visible";
document.getElementById("arw_soldrod").style.visibility="visible";

document.getElementById("step2_5").style.visibility="hidden";
document.getElementById("step2_6").style.visibility="visible";
}


function soldring()

{

document.getElementById("tb_soldrod").style.visibility="hidden";
document.getElementById("arw_soldrod").style.visibility="hidden";

document.getElementById("soldrod").style.visibility="hidden";
document.getElementById("rod_wire").style.visibility="hidden";
document.getElementById("handrod_wire").style.visibility="visible";
document.getElementById("silverhand").style.visibility="visible";

document.getElementById("handrod_wire").style.animation="handrod_wiresold 2s forwards";
document.getElementById("silverhand").style.animation="silverhand_wiresold 2s forwards";
setTimeout(function()
{
$("#smoke1").fadeIn(1000);
},2000);
setTimeout(function()
{

document.getElementById("soldering_image").style.visibility="visible";

// document.getElementById("").style.visibility="visible";
document.getElementById("handrod_wire").style.animation="handrod_wiresold2 1s forwards";
document.getElementById("silverhand").style.animation="silverhand_wiresold2 1s forwards";
$("#smoke1").fadeOut(1000);
$("#smoke2").fadeIn(1000);
},3000);

setTimeout(function()
{

document.getElementById("soldering2_image").style.visibility="visible";

document.getElementById("handrod_wire").style.animation="handrod_wiresold3 2s forwards";
document.getElementById("silverhand").style.animation="silverhand_wiresold3 2s forwards";
$("#smoke2").fadeOut(1000);
},5000);

setTimeout(function()
{

document.getElementById("silverhand").style.visibility="hidden";
document.getElementById("handrod_wire").style.visibility="hidden";
document.getElementById("soldrod").style.visibility="visible";
document.getElementById("rod_wire").style.visibility="visible";
document.getElementById("soldering2_image").style.visibility="hidden";
document.getElementById("soldering_image").style.visibility="hidden";
document.getElementById("zoomview_img").style.visibility="hidden";
document.getElementById("soldering3_image").style.visibility="visible";
document.getElementById("soldering4_image").style.visibility="visible";

document.getElementById("tb_soldallback").style.visibility="visible";
document.getElementById("arw_soldallback").style.visibility="visible";

document.getElementById("step2_6").style.visibility="hidden";
document.getElementById("step2_7").style.visibility="visible";

},7000);
}


function soldallback()

{

document.getElementById("tb_soldallback").style.visibility="hidden";
document.getElementById("arw_soldallback").style.visibility="hidden";

document.getElementById("soldrod").style.animation="soldrod_back 0.5s forwards";
document.getElementById("soldstand").style.animation="soldstand_back 0.5s forwards";
document.getElementById("rod_wire").style.animation="rod_wire_back 0.5s forwards"; 

setTimeout(function()
{

document.getElementById("soldrod").style.visibility="hidden";
document.getElementById("soldstand").style.visibility="hidden";
document.getElementById("rod_wire").style.visibility="hidden";

document.getElementById("addhammer").style.visibility="visible";
document.getElementById("arw4").style.visibility="visible";

document.getElementById("step2_7").style.visibility="hidden";
document.getElementById("step2_8").style.visibility="visible";

},500);
}

 var t1;
 var f1;

function graph_show()

{
t1=document.getElementById("val1").value;
f1=document.getElementById("val2").value;

if (t1=="frm1" && f1=="frm2") 
{

document.getElementById("graph1").style.visibility="visible";
document.getElementById("graph2").style.visibility="visible";
document.getElementById("transwhite").style.visibility="visible";
document.getElementById("note1").style.visibility="visible";
document.getElementById("arrow_note").style.visibility="visible";
document.getElementById("nextButton13").style.visibility="visible";
document.getElementById("arrow13").style.visibility="visible";
 document.getElementById("btn_dwld").style.visibility="visible";
document.getElementById("select_abc").style.visibility="hidden";	
} 
else { document.getElementById("select_abc").style.visibility="visible";
}

}













function reset()
{
    location.reload();
}
