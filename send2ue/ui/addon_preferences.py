# Copyright Epic Games, Inc. All Rights Reserved.

import bpy
from ..properties import Send2UeAddonProperties
from ..constants import ToolInfo


class SendToUnrealPreferences(Send2UeAddonProperties, bpy.types.AddonPreferences):
    """
    This class creates the settings interface in the send to unreal addon.
    """
    # Blender requires AddonPreferences.bl_idname to exactly match the addon's actual
    # registered module key for `preferences.addons[key].preferences` to resolve correctly.
    # Under the Extensions system that's "bl_ext.user_default.send2ue", not the bare
    # ToolInfo.NAME.value ("send2ue") this used to hardcode -- derive it dynamically so
    # this works under both the legacy scripts/addons/ loader and the Extensions system.
    bl_idname = __package__.rsplit('.', 1)[0]

    def draw(self, context):
        """
        This defines the draw method, which is in all Blender UI types that create interfaces.

        :param context: The context of this interface.
        """
        row = self.layout.row()
        row.prop(self, 'automatically_create_collections')
        row = self.layout.row()
        row.label(text='RPC Response Timeout')
        row.prop(self, 'rpc_response_timeout', text='')
        row = self.layout.row()
        row.label(text='Extensions Repo Path:')
        row = self.layout.row()
        row = row.split(factor=0.95, align=True)
        row.prop(self, 'extensions_repo_path', text='')
        row.operator('send2ue.reload_extensions', text='', icon='UV_SYNC_SELECT')

def register():
    """
    Registers the addon preferences when the addon is enabled.
    """
    bpy.utils.register_class(SendToUnrealPreferences)


def unregister():
    """
    Unregisters the addon preferences when the addon is disabled.
    """
    bpy.utils.unregister_class(SendToUnrealPreferences)
