# ダイヤモンドを持っていないプレイヤーを検知し、エリア外にテレポート
execute as @a[x=-21,y=91,z=-88,dx=5,dy=10,dz=5,nbt=!{Inventory:[{id:"minecraft:diamond"}]}] run tp @s -26 91 -93

# 警告メッセージを表示
execute as @a[x=-26,y=91,z=-93,distance=..3,nbt=!{Inventory:[{id:"minecraft:diamond"}]}] run title @s actionbar "このエリアに入るにはダイヤモンドが必要です"

# オプション：効果音を再生
execute as @a[x=95,y=64,z=95,distance=..3,nbt=!{Inventory:[{id:"minecraft:diamond"}]}] run playsound block.note_block.bass player @s ~ ~ ~ 1 0.5

