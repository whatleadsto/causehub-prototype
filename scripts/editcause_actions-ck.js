function updateActionForm(){var e=document.getElementById("action_type").value;e=="petition"?document.getElementById("action_text").value="Sign this Petition":e=="event"?document.getElementById("action_text").value="Host an Event":document.getElementById("action_text").value=""}function addAction(){document.getElementById("action_text").style.borderColor="#999";document.getElementById("action_link").style.borderColor="#999";action_type=document.getElementById("action_type");action_text=document.getElementById("action_text");action_link=document.getElementById("action_link");action_btn=document.getElementById("action_btn");if(action_text.value==""){alertify.log("No action text entered","error");action_text.style.borderColor="red";return!1}if(action_link.value==""){alertify.log("No action link entered","error");action_link.style.borderColor="red";return!1}var e="cid="+document.getElementById("causeid").value+"&actiontype="+document.getElementById("action_type").value+"&actiontext="+document.getElementById("action_text").value+"&actionlink="+document.getElementById("action_link").value;$.ajax({type:"POST",url:"/scripts/processing/addaction.php",data:e,beforeSend:function(){action_btn.disabled=!0;action_type.disabled=!0;action_text.disabled=!0;action_link.disabled=!0;action_btn.value="Processing"},error:function(){action_btn.disabled=!1;action_type.disabled=!1;action_text.disabled=!1;action_link.disabled=!1;action_btn.value="Add Action";alertify.log("An error occured when attempting to proccess your request, please try again later","error");return!1},success:function(e){var t=e.split(":");if(t[0]=="1"){action_btn.disabled=!1;action_type.disabled=!1;action_text.disabled=!1;action_link.disabled=!1;action_text.value="";action_link.value="";action_btn.value="Add Action";alertify.log("Added action point","success");updateActionList()}else{action_btn.disabled=!1;action_type.disabled=!1;action_text.disabled=!1;action_link.disabled=!1;action_btn.value="Add Action";alertify.log(t[1],"error")}return!1}})}function updateActionList(){var e=document.getElementById("causeid"),t="cid="+e.value;$.ajax({type:"POST",url:"/scripts/processing/actionlist_edit.php",data:t,beforeSend:function(){console.log("Updating actions")},error:function(){console.log("Error updating actions");return!1},success:function(e){document.getElementById("actionpointlist").innerHTML=e;console.log("Updated actions");return!1}})}function updateLobbyList(e){var t=document.getElementById("causeid"),n="cid="+t.value+"&type="+e;$.ajax({type:"POST",url:"/scripts/processing/lobbylist.php",data:n,beforeSend:function(){document.getElementById("lobbylist").innerHTML='<button style="margin-bottom: 5px; width: 100%;">Loading...</button><br><button style="margin-bottom: 5px; width: 100%;">Loading...</button><br><button style="margin-bottom: 5px; width: 100%;">Loading...</button><br><button style="margin-bottom: 5px; width: 100%;">Loading...</button><br><button style="margin-bottom: 5px; width: 100%;">Loading...</button>';console.log("Updating lobby list")},error:function(){console.log("Error updating lobby list");return!1},success:function(e){document.getElementById("lobbylist").innerHTML=e;console.log("Updated lobby list");return!1}})};