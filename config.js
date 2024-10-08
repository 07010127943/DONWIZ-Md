const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349131021928,2349059298589,447474471955";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928,234905029859,447474471955";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.BUTTONS = process.env.BUTTON_MODE || "1";
menu. process.env.MENU_STYLE || "G2";
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254786273945,254702365210,254708336448,254762508828";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://sessionpair.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_24_09_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUp6WVpVQnBTOVI1V2hIYVZ2YkhsNE1EQ2thQmFKN3ZVQU9vdXV1ZE1qWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMxMDIxOTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTA5MDZEMDREM0FEMjYyM0E5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjUyMjk0NTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieWI5ZUtPb2tURmlfYVc0cjNVeVV3QVwiLFxuICBcInBob25lSWRcIjogXCIyY2RmNzlmZS05MDU5LTRmMTAtYjQ0MC05MTRlMGM4YTU1NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjEyLFxuICAgICAgMTQ3LFxuICAgICAgMTI1LFxuICAgICAgMTU2LFxuICAgICAgNzEsXG4gICAgICAxMzQsXG4gICAgICAxMTUsXG4gICAgICA4NSxcbiAgICAgIDE1MixcbiAgICAgIDIxNyxcbiAgICAgIDEsXG4gICAgICAxMDgsXG4gICAgICAxMjIsXG4gICAgICA1NSxcbiAgICAgIDc5LFxuICAgICAgODgsXG4gICAgICAxMzUsXG4gICAgICA5MCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxODEsXG4gICAgICAxNTksXG4gICAgICA4NCxcbiAgICAgIDEzMSxcbiAgICAgIDQyLFxuICAgICAgNTIsXG4gICAgICAxMzcsXG4gICAgICAxMDEsXG4gICAgICAyMjYsXG4gICAgICAyNDMsXG4gICAgICAzNCxcbiAgICAgIDE3NSxcbiAgICAgIDY0LFxuICAgICAgMTcsXG4gICAgICAxMzUsXG4gICAgICAyMjcsXG4gICAgICAxMjQsXG4gICAgICA1LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dwcFA4TkVJWFQwN1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsc3NscTBhT0NtZnV6b2hDaDBrUW1Rd1pFOFdvbXJUOWFWMFNvaU1TUFdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlmUHJpZ3BCcXNveVdXclhzUXVCTmYvTjRhQ0JIbzNPZGJZTmVuejVTSm55NzdvVlRhbTB0QVVNUVZqd1c2QmoxbzdyZnJjTWxmZGt6K0xSeGdYVGhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1yT0tORlhDSGtHQ1o0TWlRRHdhL2dKSjd1SEIvU2ZMQzFQTGhwV1FuZ3Q5VkhKMktjNXpRTi9wVjVtc0o4Qm9rSHRReUdpZU15SWdnTGF6a2JyOWhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMTAyMTkyODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0ODAzMDczNTU2NDg2OjEyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMTAyMTkyODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MjI5NDQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkpLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyTG9INHEwYXVKTzdaMDR3SWtBYWZxenJiOXhOY0E1aUhxRlExTFFCaGtRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3NTY1OTQzNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTIyOTQ0OTI3NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",
  buttons : process.env.BUTTON_MODE || "1",
  menustyle : process.env.MENU_STYLE || "G2",

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
