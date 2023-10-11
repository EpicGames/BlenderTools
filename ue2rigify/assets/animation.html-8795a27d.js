import{_ as o,o as t,c as i,a as e,b as a,e as r}from"./app-bd3ccd46.js";const n="/BlenderTools/ue2rigify/assets/1-ac82aaea.jpg",c="/BlenderTools/ue2rigify/assets/2-ece16249.jpg",s="/BlenderTools/ue2rigify/assets/3-e35fe0d4.jpg",d={},u=e("h1",{id:"animation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#animation","aria-hidden":"true"},"#"),a(" Animation")],-1),l=e("div",{style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},[e("iframe",{src:"https://www.youtube.com/embed/r3ORukeV_70",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),p=r('<p>Let&#39;s talk about the animation workflow with UE to Rigify. When you have an animation on your &quot;Source&quot; rig and you click <code>Convert</code> and switch to <code>Control</code> mode, a new Rigify rig is being created and the key frames from your original source rig are being copied over into a new action on that rig.</p><p>So let&#39;s take a look at this current action on this &quot;Source&quot; rig called <code>run</code>.</p><p><img src="'+n+'" alt="1"></p><p>When I hit <code>Convert</code>. It converts that action over to the Rigify rig.</p><p><img src="'+c+'" alt="2"></p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>UE to Rigify renames the original action to have <code>SOURCE_</code> in front of it. It prefixes every action from the &quot;Source&quot; rig so it does not overwrite any bone animations just in case the Rigify &quot;Control&quot; rig and the &quot;Source&quot; rig happen to have matching bone names.</p></div><p>Then I would click <code>Bake</code>, and confirm.</p><p><img src="'+s+'" alt="3"></p><p>Now we&#39;re back to our &quot;Source&quot; rig. Now our &quot;Source&quot; rig has the new animation on our original bones. Now the modified rig can be exported to a file!</p>',9),h=[u,l,p];function m(g,f){return t(),i("div",null,h)}const w=o(d,[["render",m],["__file","animation.html.vue"]]);export{w as default};
