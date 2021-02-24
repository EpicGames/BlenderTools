# Copyright Epic Games, Inc. All Rights Reserved.
import os
import bpy
import unittest


class Ue2RigifyBaking(unittest.TestCase):
    """
    related issue:
    https://github.com/EpicGames/BlenderTools/issues/238
    This tests that the tool is baking correctly system
    """

    @staticmethod
    def get_bone_positions():
        """
        This method gets all the head and tail positions of the source rig.

        :return dict: A dictionary with the head and tail positions of the source rig.
        """
        bone_postions = {}
        source_armature = bpy.data.armatures['root']
        for bone in source_armature.bones:
            bone_postions[bone.name] = {
                'head': [round(i, 4) for i in bone.head.xyz],
                'tail': [round(i, 4) for i in bone.tail.xyz]
            }

        return bone_postions

    def check_bone_positions(self, bones_positions1, bones_positions2):
        """
        This method checks if the two rigs are in the same position.

        :param dict bones_positions1: A dictionary with the head and tail positions of the source rig.
        :param dict bones_positions2: A dictionary with the head and tail positions of the source rig.
        """
        for bone_name, bone_positions2 in bones_positions2.items():
            bone_positions1 = bones_positions1.get(bone_name)
            self.assertEqual(
                bone_positions1["head"],
                bone_positions2["head"],
                msg=(
                    f'Bone "{bone_name}" head positions {bone_positions1["head"]} and'
                    f' {bone_positions2["head"]} dont match!')
            )

            self.assertEqual(
                bone_positions1["tail"],
                bone_positions2["tail"],
                msg=(
                    f'Bone "{bone_name}" tail positions {bone_positions1["tail"]} and'
                    f' {bone_positions2["tail"]} dont match!')
            )

    def setUp(self):
        # load in the file you will run tests on
        bpy.ops.wm.open_mainfile(filepath=os.path.join(os.environ['BLENDS'], 'skeletal_meshes.blend'))

        # disable the send2ue addon
        bpy.ops.preferences.addon_disable(module='send2ue')

        # enable the rigify addon
        bpy.ops.preferences.addon_enable(module='rigify')

        # enable the ue2rigify addon
        bpy.ops.preferences.addon_enable(module='ue2rigify')

    def tearDown(self):
        # enable the send2ue addon
        bpy.ops.preferences.addon_enable(module='send2ue')

        # restore blend file to the default test file
        bpy.ops.wm.open_mainfile(filepath=os.path.join(os.environ['BLENDS'], 'default_startup.blend'))

    def test_create_new_template(self):
        """
        This method switches to control mode then bakes, and check of the bone positions have changed.
        """
        properties = bpy.context.window_manager.ue2rigify

        # un freeze the rig
        bpy.ops.ue2rigify.un_freeze_rig()

        # set the source rig object
        properties.source_rig_name = 'root'

        # switch to source mode
        bpy.ops.ue2rigify.switch_modes(mode='SOURCE')

        # get the bone positions
        source_mode_bone_positions1 = self.get_bone_positions()

        # switch to control mode
        bpy.ops.ue2rigify.switch_modes(mode='CONTROL')

        # get the bone positions
        control_mode_bone_positions = self.get_bone_positions()

        # make sure the bones haven't moved
        self.check_bone_positions(source_mode_bone_positions1, control_mode_bone_positions)

        # switch to source mode
        bpy.ops.ue2rigify.bake_from_rig_to_rig()

        # get the bone positions
        source_mode_bone_positions2 = self.get_bone_positions()

        # make sure the bones haven't moved after the bake
        self.check_bone_positions(source_mode_bone_positions1, source_mode_bone_positions2)

