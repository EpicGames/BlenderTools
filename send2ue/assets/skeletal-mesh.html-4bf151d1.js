import{_ as a,r,o as i,c as l,a as t,b as e,d as o,e as n}from"./app-3ee0fe23.js";const c="/BlenderTools/send2ue/assets/overview-cd320a28.svg",d="/BlenderTools/send2ue/assets/1-5f0d620e.gif",h="/BlenderTools/send2ue/assets/2-bf2afe41.gif",p="/BlenderTools/send2ue/assets/3-f8348af2.png",m="/BlenderTools/send2ue/assets/3-e00d7057.png",u="/BlenderTools/send2ue/assets/5-105405c3.png",_="/BlenderTools/send2ue/assets/6-cb82a7f1.png",g={},f=n('<h1 id="skeletal-mesh" tabindex="-1"><a class="header-anchor" href="#skeletal-mesh" aria-hidden="true">#</a> Skeletal Mesh</h1><p>The tool infers an Unreal Skeletal Mesh asset based strictly on the content of your <code>Export</code> collection. Here is what it is doing:</p><p><img src="'+c+'" alt="overview"></p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>The armature placed in the <code>Export</code> collection must be responsible for deformation, meaning only bones that are skinned to a mesh. No bones used for control schemes should be put in the <code>Export</code> collection.</p></div><p><img src="'+d+'" alt="1"></p><p>The important thing to remember is that only armatures and meshes inside that collection can be used to build the data for the skeletal mesh export and import.</p><p><img src="'+h+'" alt="2"></p><p>As you can see, a related mesh and armature combination results in an Unreal Skeletal Mesh asset being generated along with Materials, a Skeleton, and a Physics Asset. Also notice that the Skeletal Mesh name matches the mesh name in blender, as well as the skeleton and physics asset with <code>_Skeleton</code> and <code>_PhysicsAsset</code> post fixed respectively.</p>',8),b={href:"/settings/import.html#animation",target:"_blank",rel:"noopener noreferrer"},y=n('<p><img src="'+p+'" alt="3"></p><h2 id="lods" tabindex="-1"><a class="header-anchor" href="#lods" aria-hidden="true">#</a> LODs</h2><p>LOD workflows for skeletal meshes are supported. Simply activate the LODs option in the LOD Settings group and Send to Unreal will handle exporting and importing each LOD.</p><p><img src="'+m+'" alt="4"></p><p>There is a sub category for skeletal meshes that allows you to specify a path to a LOD Settings data asset in your Unreal project. This can be referenced directly to automatically set your skeletal mesh lod settings.</p><p><img src="'+u+'" alt="5"></p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>If your mesh has a LOD naming scheme and Import LODs is true, the LOD postfix will get stripped out of the final asset name based on the lod regex. For example <code>SK_Mannequin_LOD0 = SK_Mannequin</code></p></div><p>Also notice that the LOD build settings can be set under the <code>Import &gt; Editor Settings &gt; Skeletal Mesh LOD Build Settings</code> group.</p><p><img src="'+_+'" alt="6"></p>',9),k={class:"custom-container tip"},x=t("p",{class:"custom-container-title"},"Note",-1),S={href:"https://docs.unrealengine.com/4.27/en-US/PythonAPI/class/EditorSkeletalMeshLibrary.html",target:"_blank",rel:"noopener noreferrer"},v=t("h2",{id:"only-mesh",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#only-mesh","aria-hidden":"true"},"#"),e(" Only Mesh")],-1),L={href:"/settings/import.html",target:"_blank",rel:"noopener noreferrer"},T=t("code",null,"Mesh",-1);function w(M,O){const s=r("ExternalLinkIcon");return i(),l("div",null,[f,t("p",null,[e("To run a strictly skeletal mesh import(meaning no animation will be exported), the animations import option must be turned off in your "),t("a",b,[e("Import"),o(s)]),e(" settings.")]),y,t("div",k,[x,t("p",null,[e("The Editor Settings corresponds to what is available in the "),t("a",S,[e("EditorSkeletalMeshLibrary"),o(s)]),e(" in the Unreal Python API:")])]),v,t("p",null,[e("To run a strictly mesh asset import (ex: excluding import of particle systems as groom assets), all import options must be turned off in your "),t("a",L,[e("import settings"),o(s)]),e(" except for "),T,e(".")])])}const B=a(g,[["render",w],["__file","skeletal-mesh.html.vue"]]);export{B as default};
