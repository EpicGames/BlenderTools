<p align="center">
  <img width="300" src="https://github.com/EpicGamesExt/BlenderTools/blob/main/docs/main/images/1.png?raw=true" alt="icon"/>
</p>
<h1 align="center">Blender Tools</h1>
<br></br>

A repository of blender addons that improve the game development workflow between Blender and Unreal Engine.

## Send to Unreal

![4](docs/main/images/send2ue/4.gif)

A one-click solution for sending assets from Blender to Unreal Engine.

* [Read Docs](https://epicgames.github.io/BlenderTools/send2ue/)
* [Download Addon](https://github.com/EpicGamesExt/BlenderTools/releases?q=Send+to+Unreal&expanded=true)

### Unreal Engine 5.6+ setup note

UE 5.6 projects can default to importing FBX through the newer Interchange
framework, which doesn't fully honor the legacy `AssetImportTask` options
Send to Unreal relies on and can fail imports with a generic "no data to
import" error. If assets fail to import on UE 5.6+, switch the project back
to the legacy FBX importer:

1. In the Unreal Editor console (`~`), run:
   ```
   Interchange.FeatureFlags.Import.FBX 0
   ```
2. To make this persist across Editor restarts, add it to your project's
   `Config/DefaultEngine.ini`:
   ```ini
   [ConsoleVariables]
   Interchange.FeatureFlags.Import.FBX=0
   ```

This is a project-wide setting that affects all FBX imports, not just this
addon's.


## UE to Rigify

![2](./docs/main/images/ue2rigify/2.png)

A node based retargeting system for Blender's
[Rigify](https://docs.blender.org/manual/en/latest/addons/rigging/rigify/index.html) addon. Quickly retarget and author
new animation on unreal marketplace assets and more!

* [Read Docs](https://epicgames.github.io/BlenderTools/ue2rigify/)
* [Download Addon](https://github.com/EpicGamesExt/BlenderTools/releases?q=UE+to+Rigify&expanded=true)


## Help Contribute
Contributions are encouraged! Find out how you can contribute to this repo in one of the following ways:

* [Help Develop](https://epicgames.github.io/BlenderTools/contributing/development.html)
* [Help Document](https://epicgames.github.io/BlenderTools/contributing/documentation.html)
* [Help Test](https://epicgames.github.io/BlenderTools/contributing/testing.html)


## Get Notified on a New Release
Never miss a new addon release! Do this:
1. At the top right of this page select `Watch`
1. Select `Custom` from the dropdown.
1. Check `Releases`
1. Click `Apply`.

You will now get an email notification everytime there is a new version of an addon released.


