jQuery(document).ready(function(d){var b;if(!d('input[name="_soliloquy_settings[type]"]').is(":checked")){d("#soliloquy-default-slider").attr("checked","checked")}if("default"==d('input[name="_soliloquy_settings[type]"]:checked').val()){d(".soliloquy-upload-text, #soliloquy-upload, #soliloquy-images").show();d("#soliloquy-upload").css("display","inline-block")}else{d(".soliloquy-upload-text, #soliloquy-upload, #soliloquy-images").hide()}d('input[name="_soliloquy_settings[type]"]').on("change",function(){if("default"==d(this).val()){d(".soliloquy-upload-text, #soliloquy-upload, #soliloquy-images").fadeIn();d("#soliloquy-upload").css("display","inline-block")}else{d(".soliloquy-upload-text, #soliloquy-upload, #soliloquy-images").hide()}});d(".soliloquy-image-meta").hide();if(d("#soliloquy-advanced").is(":checked")){d("#soliloquy-navigation-box, #soliloquy-control-box, #soliloquy-keyboard-box, #soliloquy-multi-keyboard-box, #soliloquy-mousewheel-box, #soliloquy-pauseplay-box, #soliloquy-random-box, #soliloquy-number-box, #soliloquy-control-box, #soliloquy-loop-box, #soliloquy-action-box, #soliloquy-hover-box, #soliloquy-slider-css-box, #soliloquy-reverse-box, #soliloquy-smooth-box, #soliloquy-touch-box, #soliloquy-delay-box, .soliloquy-advanced").show()}else{d("#soliloquy-navigation-box, #soliloquy-control-box, #soliloquy-keyboard-box, #soliloquy-multi-keyboard-box, #soliloquy-mousewheel-box, #soliloquy-pauseplay-box, #soliloquy-random-box, #soliloquy-number-box, #soliloquy-control-box, #soliloquy-loop-box, #soliloquy-action-box, #soliloquy-hover-box, #soliloquy-slider-css-box, #soliloquy-reverse-box, #soliloquy-smooth-box, #soliloquy-touch-box, #soliloquy-delay-box, .soliloquy-advanced").hide()}if(0==d("#soliloquy-width").val().length){d("#soliloquy-width").val(soliloquy.width)}if(0==d("#soliloquy-height").val().length){d("#soliloquy-height").val(soliloquy.height)}if("custom"!==d("#soliloquy-default-size option[selected]").val()){d("#soliloquy-custom-sizes").hide()}else{d("#soliloquy-default-sizes").hide()}if(0==d("#soliloquy-speed").val().length){d("#soliloquy-speed").val(soliloquy.speed)}if(0==d("#soliloquy-duration").val().length){d("#soliloquy-duration").val(soliloquy.duration)}d("#soliloquy-default-size").on("change",function(){if("default"!==d(this).val()){d("#soliloquy-default-sizes").hide();d("#soliloquy-custom-sizes").fadeIn("normal")}else{d("#soliloquy-custom-sizes").hide();d("#soliloquy-default-sizes").fadeIn("normal")}});d("#soliloquy-advanced").on("change",function(){if(d(this).is(":checked")){d("#soliloquy-navigation-box, #soliloquy-control-box, #soliloquy-keyboard-box, #soliloquy-multi-keyboard-box, #soliloquy-mousewheel-box, #soliloquy-pauseplay-box, #soliloquy-random-box, #soliloquy-number-box, #soliloquy-control-box, #soliloquy-loop-box, #soliloquy-action-box, #soliloquy-hover-box, #soliloquy-slider-css-box, #soliloquy-reverse-box, #soliloquy-smooth-box, #soliloquy-touch-box, #soliloquy-delay-box, .soliloquy-advanced").fadeIn("normal")}else{d("#soliloquy-navigation-box, #soliloquy-control-box, #soliloquy-keyboard-box, #soliloquy-multi-keyboard-box, #soliloquy-mousewheel-box, #soliloquy-pauseplay-box, #soliloquy-random-box, #soliloquy-number-box, #soliloquy-control-box, #soliloquy-loop-box, #soliloquy-action-box, #soliloquy-hover-box, #soliloquy-slider-css-box, #soliloquy-reverse-box, #soliloquy-smooth-box, #soliloquy-touch-box, #soliloquy-delay-box, .soliloquy-advanced").fadeOut("normal")}});d(document).find(".soliloquy-link-type").each(function(){if("normal"==d(this).val()){d(this).next().show();d(this).next().next().hide()}else{if("video"==d(this).val()){d(this).next().hide();d(this).next().next().show()}else{d(this).next().hide();d(this).next().next().hide()}}});d("#soliloquy-images").on("ajaxStop",function(){d(this).find(".soliloquy-link-type").each(function(){if("normal"==d(this).val()){d(this).next().show();d(this).next().next().hide()}else{if("video"==d(this).val()){d(this).next().hide();d(this).next().next().show()}else{d(this).next().hide();d(this).next().next().hide()}}})});d(document).on("change.selectSoliloquyLinkType",".soliloquy-link-type",function(){if("normal"==d(this).val()){d(this).next().fadeIn();d(this).next().next().hide()}else{if("video"==d(this).val()){d(this).next().hide();d(this).next().next().fadeIn()}else{d(this).next().hide();d(this).next().next().hide()}}});d(".soliloquy-size-more").on("click.soliloquySizeExplain",function(o){o.preventDefault();d("#soliloquy-explain-size").fadeToggle()});d("#soliloquy-area").on("click.soliloquyRemove",".remove-image",function(p){p.preventDefault();var q=confirm(soliloquy.delete_nag);if(!q){return}b=d(this).parent().attr("id");d("#soliloquy-upload").after('<span class="soliloquy-waiting"><img class="soliloquy-spinner" src="'+soliloquy.spinner+'" width="16px" height="16px" style="margin: 0 5px; vertical-align: bottom;" />'+soliloquy.removing+"</span>");var o={action:"soliloquy_remove_images",attachment_id:b,nonce:soliloquy.removenonce};d.post(soliloquy.ajaxurl,o,function(r){d("#"+b).fadeOut("normal",function(){d(this).remove();d(".soliloquy-waiting").fadeOut("normal",function(){d(this).remove()})})},"json")});d("#soliloquy-area").on("click.soliloquyModify",".modify-image",function(o){o.preventDefault();d("html").addClass("soliloquy-editing");b=d(this).next().attr("id");tb_show(soliloquy.modifytb,"TB_inline?width=640&height=500&inlineId="+b);d(document).contents().find("#TB_closeWindowButton").on("click.soliloquyIframe",function(){if(d("html").hasClass("soliloquy-editing")){d("html").removeClass("soliloquy-editing");tb_remove()}});d(document).contents().find("#TB_overlay").on("click.soliloquyIframe",function(){if(d("html").hasClass("soliloquy-editing")){d("html").removeClass("soliloquy-editing");tb_remove()}});return false});d(document).on("click.soliloquyMeta",".soliloquy-meta-submit",function(s){s.preventDefault();var q=d(this).parent().find(".soliloquy-meta-table").attr("id");var p=q.split("-");var o=p[3];var r={action:"soliloquy_update_meta",attach:o,id:soliloquy.id,nonce:soliloquy.metanonce};d("#"+q+" td").each(function(){var t=d(this).find("*");d.each(t,function(){var u=d(this).attr("class");var v=d(this).val();if("checkbox"==d(this).attr("type")){var v=d(this).is(":checked")?"true":"false"}if("radio"==d(this).attr("type")){if(!d(this).is(":checked")){return}var v=d(this).val()}r[u]=v})});d(this).after('<span class="soliloquy-waiting"><img class="soliloquy-spinner" src="'+soliloquy.spinner+'" width="16px" height="16px" style="margin: 0 5px; vertical-align: middle;" />'+soliloquy.saving+"</span>");d.post(soliloquy.ajaxurl,r,function(t){d(".soliloquy-waiting").fadeOut("normal",function(){d(this).remove()});var u=setTimeout(function(){d("html").removeClass("soliloquy-editing");tb_remove()},1000)},"json")});d("#soliloquy-area").on("click.soliloquyUpload","#soliloquy-upload",function(o){o.preventDefault();d("html").addClass("soliloquy-uploading");b=d(this).parent().prev().attr("name");tb_show(soliloquy.upload,"media-upload.php?post_id="+soliloquy.id+"&type=image&context=soliloquy-image-uploads&TB_iframe=true&width=640&height=500");d(document).contents().find("#TB_closeWindowButton").on("click.soliloquyIframe",function(){if(d("html").hasClass("soliloquy-uploading")){d("html").removeClass("soliloquy-uploading");tb_remove();a()}});d(document).contents().find("#TB_overlay").on("click.soliloquyIframe",function(){if(d("html").hasClass("soliloquy-uploading")){d("html").removeClass("soliloquy-uploading");tb_remove();a()}});return false});window.original_send_to_editor=window.send_to_editor;window.send_to_editor=function(o){if(b){tb_remove();d("html").removeClass("soliloquy-uploading");var p=setTimeout(function(){a()},1500)}else{window.original_send_to_editor(o)}};var b="";var e="";var m="";var f="";var j="";var l="";var n="";var i="";var h="";var g=d("#soliloquy-images");g.sortable({containment:"#soliloquy-area",update:function(p,q){d(".soliloquy-waiting").show();var o={url:soliloquy.ajaxurl,type:"post",async:true,cache:false,dataType:"json",data:{action:"soliloquy_sort_images",order:g.sortable("toArray").toString(),post_id:soliloquy.id,nonce:soliloquy.sortnonce},success:function(r){d(".soliloquy-waiting").hide();return},error:function(s,t,r){d(".soliloquy-waiting").hide();return}};d.ajax(o)}});function a(){var o={action:"soliloquy_refresh_images",id:soliloquy.id,nonce:soliloquy.nonce};d("#soliloquy-upload").after('<span class="soliloquy-waiting"><img class="soliloquy-spinner" src="'+soliloquy.spinner+'" width="16px" height="16px" style="margin: 0 5px; vertical-align: bottom;" />'+soliloquy.loading+"</span>");d.post(soliloquy.ajaxurl,o,function(p){d("#soliloquy-images").html(p.images);d(".soliloquy-image-meta").hide()},"json");d(".soliloquy-waiting").fadeOut("normal",function(){d(this).remove()})}var c=(function(){var o=0;return function(q,p){clearTimeout(o);o=setTimeout(q,p)}})();d(document).on("click.soliloquyInternalLinking","#soliloquy-link-existing",function(o){o.preventDefault();d(this).next().fadeToggle()});d(document).on("keyup.soliloquySearchLinks keydown.soliloquySearchLinks",".soliloquy-search",function(){var r=d(this).attr("id");var q=d(this).val();var p=d(this).next().find("ul").attr("id");var o={action:"soliloquy_link_search",id:soliloquy.id,nonce:soliloquy.linknonce,search:q};c(function(){k(r,p,o)},"500")});d(document).on("click.soliloquyInsertLink",".soliloquy-results-list li",function(){d(".soliloquy-results-list li").removeClass("selected");d(this).addClass("selected");var r=d(this).find("input").val();var o=d(this).find(".soliloquy-item-title").text();var p=d(this).parent().parent().parent().parent().parent().find(".soliloquy-link").attr("id");var q=d(this).parent().parent().parent().parent().parent().find(".soliloquy-link-title").attr("id");d("#"+p).val(r);d("#"+q).val(o)});function k(q,p,o){d("#"+q).after('<span class="soliloquy-waiting"><img class="soliloquy-spinner" src="'+soliloquy.spinner+'" width="16px" height="16px" style="margin: 0 5px; vertical-align: middle;" />'+soliloquy.searching+"</span>");d.post(soliloquy.ajaxurl,o,function(s){d("#"+p).children().remove();if(!s.links){var r='<li class="soliloquy-no-results"><span>'+soliloquy.noresults+"</span></li>";d("#"+p).append(r)}d.each(s.links,function(v,u){var w=s.links[v];var x=(v%2==0)?"even":"odd";var t='<li id="link-id-'+w.ID+'" class="soliloquy-result '+x+'"><input type="hidden" class="soliloquy-item-permalink" value="'+w.permalink+'" /><span class="soliloquy-item-title">'+w.title+'</span><span class="soliloquy-item-info">'+w.info+"</span></li>";d("#"+p).append(t)});var r=""},"json");d(".soliloquy-waiting").fadeOut("normal",function(){d(this).remove()})}});