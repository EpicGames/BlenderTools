import{_ as e,o as t,c as a,e as r}from"./app-3ee0fe23.js";const i="/BlenderTools/send2ue/assets/1-86562928.png",o="/BlenderTools/send2ue/assets/2-42108091.png",n={},s=r('<h1 id="pipeline-menu" tabindex="-1"><a class="header-anchor" href="#pipeline-menu" aria-hidden="true">#</a> Pipeline Menu</h1><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><h3 id="import-asset" tabindex="-1"><a class="header-anchor" href="#import-asset" aria-hidden="true">#</a> Import Asset</h3><p><code>Pipeline &gt; Import &gt; Import Asset</code></p><p>The Asset importer allows you to import assets then run a series of operations on them to fix them. The series of operations run on the imported asset depends on what source application you select from the drop down. A source application is the application the original file was generated in. Currently, the supported source applications are Unreal Engine 4 and Unreal Engine 5.</p><p><img src="'+i+'" alt="1"></p><p>After the selected FBX file is imported the imported action location f-curves are scaled up to a match the scene scale factor with a scale of 1, the objects are applied with a scale factor of 1. The scaled keyframes on the root object are removed, and the keyframes are rounded to the nearest integer based on the current frame rate.</p><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2><h3 id="send-to-unreal" tabindex="-1"><a class="header-anchor" href="#send-to-unreal" aria-hidden="true">#</a> Send to Unreal</h3><p><code>Pipeline &gt; Export &gt; Send to Unreal</code></p><p>This operator quickly sends your assets to an open unreal editor instance without invoking a dialog. The settings used for the operation can be defined in the <code>Settings Dialog</code>.</p><h3 id="settings-dialog" tabindex="-1"><a class="header-anchor" href="#settings-dialog" aria-hidden="true">#</a> Settings Dialog</h3><p><code>Pipeline &gt; Export &gt; Settings Dialog</code></p><p>This operator invokes a dialog that gives you access to the underlying scene data that the Send to Unreal operator uses. The sending to unreal, saving templates, and loading templates can all be done in this interface.</p><p><img src="'+o+'" alt="2"></p><h2 id="utilities" tabindex="-1"><a class="header-anchor" href="#utilities" aria-hidden="true">#</a> Utilities</h2><h3 id="create-pre-defined-collections" tabindex="-1"><a class="header-anchor" href="#create-pre-defined-collections" aria-hidden="true">#</a> Create Pre-Defined Collections</h3><p><code>Pipeline &gt; Utilities &gt; Create Pre-Defined Collections</code></p><p>Creates the pre-defined collection <code>Export</code> that is needed to collect asset data.</p><h3 id="start-rpc-servers" tabindex="-1"><a class="header-anchor" href="#start-rpc-servers" aria-hidden="true">#</a> Start RPC Servers</h3><p><code>Pipeline &gt; Utilities &gt; Start RPC Servers</code></p><p>Bootstraps unreal and blender with rpc server threads, so that they are ready for remote calls. Unreal must be open and <code>remote execution</code> enabled or this will fail.</p>',22),d=[s];function c(l,h){return t(),a("div",null,d)}const u=e(n,[["render",c],["__file","pipeline-menu.html.vue"]]);export{u as default};