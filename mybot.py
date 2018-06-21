import discord
from discord.ext import commands
from discord.ext.commands import Bot
import asyncio
import time
import random

#code:
#test = message.content[6:]
#random.choice(messages)


Client = discord.Client() 
client = commands.Bot(command_prefix = "!")


@client.event
async def on_ready():
    print("Bot Is Ready!")
    await client.change_presence(game=discord.Game(name="?help | Python"))


@client.event
async def on_message(message):

    if message.content.startswith('!say'):
        say = message.content[5:]
        await client.send_message(message.channel, ""+ say +"")

    if message.content.startswith('!embed'):
        say = message.content[6:]
        embed = discord.Embed(title=""+ say +"", color=0x00ff00)
        await client.send_message(message.channel, embed=embed)

        
    if message.content.startswith('עץאופלי'):
        messages = ["עץ", "פלי"]
        embed = discord.Embed(title=random.choice(messages), color=0x00ffff)
        await client.send_message(message.channel, embed=embed)

    if message.content.startswith('כןאולא'):
        messages = ["לא", "כן"]
        embed = discord.Embed(title=random.choice(messages), color=0x00ffff)
        await client.send_message(message.channel, embed=embed)

    if message.content.startswith('1-50'):
        messages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "1", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
        embed = discord.Embed(title=random.choice(messages), color=0x00ffff)
        await client.send_message(message.channel, embed=embed)

    if message.content.startswith('1-10'):
        messages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        embed = discord.Embed(title=random.choice(messages), color=0x00ffff)
        await client.send_message(message.channel, embed=embed)
        

    if message.content.startswith('http'):
     if message.author.server_permissions.administrator:
        await client.send_message(message.channel, None)
     else:
        await client.delete_message(message)
        userID = message.author.id
        await client.send_message(message.channel, "<@%s> :no_entry: No Invite Links  :no_entry: " % (userID))

    if message.content.startswith('!helpme'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&457942518135390209>
<@%s> Need Help!""" % (userID))

    if message.content.startswith('!python'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&459327191516446721>
<@%s> Need Help!""" % (userID))

    if message.content.startswith('!java script'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&459332326246187008>
<@%s> Need Help!""" % (userID))

    if message.content.startswith('!java'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&459395862930522122>
<@%s> Need Help!""" % (userID))

    if message.content.startswith('!DBM'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&459389942112714763>
<@%s> Need Help!""" % (userID))

    if message.content.startswith('!dbm'):
        userID = message.author.id
        await client.send_message(message.channel, """<@&459389942112714763>
<@%s> Need Help!""" % (userID))
        
    if message.content.startswith('!prefix'):
        await client.send_message(message.channel, "Prefix Bot `!`")



    if message.content.startswith('?help'):
        embed = discord.Embed(title="Bot Prefix = [!]", description="""Commands For Member
► **!helpme** = For Need Help!.
► **!python** = Need Help For Python!.
► **!java script** = Need Help For Java Script!.
► **!java** = Need Help For Java!.
► **!DBM** = Need Help For DBM!.
► **!fun** = Bot Send To You DM!.
► **!ping** = How Much Ping I Have.
► **!avatar** {@User} = User Avatar.
► **!info** {@User} = Info User.
► **!say** {Message} = Bot Send {Message}.
► **!embed** {Message} = Bot Send {Message} Embed.
► **!invite** = Bot Send Invite To Nil Server.
► **!prefix** = Bot Send My Prefix.
-----------------------------------------------
Commnads Fun
► **עץאופלי** = Bot Send עץ Or פלי.
► **1-10** = Bot Send Number 1-10.
► **1-50** = Bot Send Number 1-50.
► **כןאולא** = Bot Send לא Or כן.
-----------------------------------------------
Commands For Admin
► **!clear** {Number} = Clear Message.
► **!mute** {@User} {Cause} = Mute Member.
► **!unmute** {@User} = Unmute Member.
► **!kick** {@User} {Cause} = Kick Member.
► **!ban** {@User} {Cause} = Ban Member.
► **!nickname** {@User} {Name} = Change Nickname To {@User}.
===========================================

 ► Creator: <@306774183436877824>""", color=0x0000ff)
        embed.set_thumbnail(url="https://png.icons8.com/metro/1600/settings.png")
        await client.send_message(message.channel, embed=embed)


    if message.content.startswith('!fun'):
        embed = discord.Embed(title="Commnads Fun", description="""===============================================
► **עץאופלי** = Bot Send עץ Or פלי.
► **1-10** = Bot Send Number 1-10.
► **1-50** = Bot Send Number 1-50.
► **כןאולא** = Bot Send לא Or כן.
===============================================""", color=0xff00ff)
        await client.send_message(message.channel, embed=embed)
        

@client.event
async def on_member_join(member):
    channel = discord.Object("459334537202237460")
    role = discord.utils.get(member.server.roles, id='459335425618739210')
    await client.add_roles(member, role)
    embed = discord.Embed(title="Member Join", description="{} Has Joined The Server.".format(member.mention), color=0x00ff00)
    embed.set_thumbnail(url=member.avatar_url)
    await client.send_message(channel, embed=embed)



@client.event
async def on_member_remove(member):
    channel = discord.Object("459334537202237460")
    embed = discord.Embed(title="Member Left", description="{} Has Left The Server.".format(member.mention), color=0xff0000)
    embed.set_thumbnail(url=member.avatar_url)
    await client.send_message(channel, embed=embed)

@client.event
async def on_voice_state_update(member_before, member_after):
    """
    Called when the voice state of a member on a server changes.
    
    :param member_before: The state of the member before the change.
    :param member_after: The state of the member after the change.
    """
    server = member_after.server
    channel = discord.Object("459329822351425537")
    
    voice_channel_before = member_before.voice_channel
    voice_channel_after = member_after.voice_channel
    
    if voice_channel_before == voice_channel_after:
        # No change
        return
    
    if voice_channel_before == None:
        msg = "%s joined voice channel `%s`" % (member_after.mention, voice_channel_after.name)
    else:
        if voice_channel_after == None:
            msg = "%s left voice channel `%s`" % (member_after.mention, voice_channel_before.name)
        else:
            msg = "%s switched from voice channel `%s` to `%s`" % (member_after.mention, voice_channel_before.name, voice_channel_after.name)
    
    try:
        await client.send_message(channel, msg)
    except:
        channel = find_channel(server, refresh = True)
        if channel == None:
            print("Error: channel #%s does not exist on server %s." % (config.logs, server))
        else:
            try:
                await client.send_message(channel, msg)
            except discord.DiscordException as exception:
                print("Error: no message could be sent to channel #%s on server %s. Exception: %s" % (config.logs, server, exception))



client.run(process.env.BOT_TOKEN);
