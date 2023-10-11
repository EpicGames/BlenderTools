import{_ as a,r as i,o as r,c as l,a as e,b as t,d as n,e as s}from"./app-3ee0fe23.js";const c="/BlenderTools/send2ue/assets/1-c6f8ec76.png",h="/BlenderTools/send2ue/assets/2-d73b6c93.gif",d="/BlenderTools/send2ue/assets/3-d7f6e9d4.gif",p="/BlenderTools/send2ue/assets/4-6a935113.gif",m="/BlenderTools/send2ue/assets/5-e8f64deb.gif",u="/BlenderTools/send2ue/assets/6-743a56b9.gif",_="/BlenderTools/send2ue/assets/7-cd5bb607.png",f="/BlenderTools/send2ue/assets/8-70e24e49.gif",g={},b=e("h1",{id:"animation-sequence",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#animation-sequence","aria-hidden":"true"},"#"),t(" Animation Sequence")],-1),k={href:"https://docs.blender.org/manual/en/latest/editors/nla/strips.html#action-strips",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[e("img",{src:c,alt:"1"})],-1),x=e("p",null,"The NLA Editor is used to determine several things:",-1),y=e("ol",null,[e("li",null,"Which actions belong to an armature object.")],-1),A={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"Note",-1),T={href:"https://epicgames.github.io/BlenderTools/send2ue/settings/export.html#auto-stash-active-action",target:"_blank",rel:"noopener noreferrer"},B=e("ol",{start:"2"},[e("li",null,"Which action to export, by checking which NLA tracks are not muted.")],-1),N={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"Note",-1),q=e("code",null,"Export",-1),j={href:"https://epicgames.github.io/BlenderTools/send2ue/settings/export.html#export-all-actions",target:"_blank",rel:"noopener noreferrer"},E=s('<ol start="3"><li>The start and end of the Unreal Animation, by using the start and end frame of the clip.</li></ol><div class="custom-container tip"><p class="custom-container-title">Note</p><p>The first frame of the clip is the first frame of the AnimSequence and the end of the animation will be relative to the start.</p></div><ol start="4"><li>The name of an unreal AnimSequence asset will match the name of its action in blender.</li></ol><h2 id="skeletal-mesh-with-animation" tabindex="-1"><a class="header-anchor" href="#skeletal-mesh-with-animation" aria-hidden="true">#</a> Skeletal Mesh with Animation</h2><p>The animation can be imported along with entire skeletal mesh.</p><p><img src="'+h+'" alt="2"></p><p>In this case you can see the Skeletal Mesh, Skeleton, Physics Asset, and Animation are all sent in a single operation.</p><p><img src="'+d+'" alt="3"></p><h2 id="only-animation" tabindex="-1"><a class="header-anchor" href="#only-animation" aria-hidden="true">#</a> Only Animation</h2>',9),I={href:"/settings/import.html",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"Export",-1),M={href:"https://epicgames.github.io/BlenderTools/send2ue/settings/paths.html#skeleton-asset-unreal",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("img",{src:p,alt:"4"})],-1),V=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Tip"),e("p",null,'An easy way to do this is to right-click the unreal Skeleton asset and click "Copy Reference".')],-1),W=e("p",null,[e("img",{src:m,alt:"5"})],-1),C=e("p",null,"In this case two strips were un-muted, therefore two animations were imported onto the referenced skeleton asset.",-1),F={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"Note",-1),z={href:"https://epicgames.github.io/BlenderTools/send2ue/settings/export.html#export-all-actions",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"morph-targets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#morph-targets","aria-hidden":"true"},"#"),t(" Morph Targets")],-1),O=e("p",null,"Here is an example of how to send shape key animation in blender to unreal as an animated morph target.",-1),R={class:"custom-container tip"},X=e("p",{class:"custom-container-title"},"Note",-1),D={href:"https://epicgames.github.io/BlenderTools/send2ue/settings/export.html#export-custom-property-fcurves",target:"_blank",rel:"noopener noreferrer"},G=s('<p><img src="'+u+'" alt="6"></p><p>In this example a driver is created so that a custom float property <code>head_swell</code> on the armature object drives a shape key value. Furthermore, that custom property value is keyed in the <code>third_person_walk01</code> action.</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Both the custom property and the driven shape key must have the same exact name in order for unreal to recognize it!</p></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>This is what the driver settings look like: <img src="'+_+'" alt="7"></p></div><p>Also note that on the Import tab under the FBX import settings <code>Import Morph Targets</code> must be set to true. After moving the mannequin mesh and armature into the <code>Export</code> collection and running the send to unreal operation, the animation should import with the animated morph target value in the <code>third_person_walk01</code> animation.</p><p><img src="'+f+'" alt="8"></p>',6);function J(K,Q){const o=i("ExternalLinkIcon");return r(),l("div",null,[b,e("p",null,[t("When creating Animation, Send to Unreal looks for "),e("a",k,[t("action strips"),n(o)]),t(" in the Blender NLA Editor.")]),v,x,y,e("div",A,[w,e("p",null,[t("Actions in blender all exist in the same data block namespace and just contain fcurves values. It is not until they are set in an object's animation data that a determination can be made that an action belongs to a particular object. This is different from how unreal AnimSequence assets work. Unreal AnimSequence assets must have an associated skeletal mesh in order to exist. Therefore, Send to Unreal only exports skeletal mesh animation if the armature object has action strips in its NLA tracks. Also read about the "),e("a",T,[t("auto stash active action"),n(o)]),t(" option.")])]),B,e("div",N,[S,e("p",null,[t("All un-muted strips in the NLA Editor will be sent as an AnimSequence of the skeleton that is in the "),q,t(" collection. Also read about the "),e("a",j,[t("Export All Actions"),n(o)]),t(" option.")])]),E,e("p",null,[t("What if the skeleton and skeletal mesh already exist in your project, and you just want to import animation onto an existing skeleton? That can be done in two ways: (1) by turning off all import options in the "),e("a",I,[t("import settings"),n(o)]),t(" except for Animations; (2) or by placing only the armature object in the "),L,t(" collection. Both ways require you to set the project path to the Skeleton asset under the "),e("a",M,[t("Paths"),n(o)]),t(" tab in the settings dialog.")]),U,V,W,C,e("div",F,[P,e("p",null,[t("Also if "),e("a",z,[t("export all actions"),n(o)]),t(" was on, all actions would be exported regardless of their mute values.")])]),H,O,e("div",R,[X,e("p",null,[t("The "),e("a",D,[t("export custom property fcurves"),n(o)]),t(" must be set to true in order for this to work. Also note that this can apply to any custom property fcurves not just the morph targets fcurve.")])]),G])}const Z=a(g,[["render",J],["__file","animation-sequence.html.vue"]]);export{Z as default};
