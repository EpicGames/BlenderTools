import{_ as e,o as t,c as a,e as r}from"./app-bd3ccd46.js";const i={},o=r('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h3 id="how-can-i-share-a-template-i-created-with-another-artist" tabindex="-1"><a class="header-anchor" href="#how-can-i-share-a-template-i-created-with-another-artist" aria-hidden="true">#</a> How can I share a template I created with another artist?</h3><p>Go to Edit &gt; Preferences &gt; Addons &gt; UE to Rigify and select ‘Export Template’. From the sidebar in the file window select the template you want to export. Then select the location on your hard drive and click <code>Export Template</code>. They can now click ‘Import Template’ and select this file, then click ‘Import Template’.</p><h3 id="how-can-i-use-a-rigify-metarig-as-the-source-rig" tabindex="-1"><a class="header-anchor" href="#how-can-i-use-a-rigify-metarig-as-the-source-rig" aria-hidden="true">#</a> How can I use a Rigify metarig as the source rig?</h3><p>If you want to use the tool to drive a rig you made in blender that is a Rigify metarig template, you need to rename it. You should stay away from the names &quot;metarig&quot; and &quot;rig&quot; because those are Rigify reserved names and when UE to Rigify generates a new rigify rig, those could get stomped on. Thus, renaming the metarig you added as your source rig is necessary for this to work.</p><h2 id="where-are-rig-templates-stored" tabindex="-1"><a class="header-anchor" href="#where-are-rig-templates-stored" aria-hidden="true">#</a> Where are Rig templates stored?</h2><p>Rig templates are stored within:</p><ul><li>windows: <code>%TEMP%\\ue2rigify\\resources\\rig_templates</code></li><li>unix: <code>/tmp/ue2rigify/resources/rig_templates</code></li></ul>',8),s=[o];function h(n,d){return t(),a("div",null,s)}const l=e(i,[["render",h],["__file","faq.html.vue"]]);export{l as default};
