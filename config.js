const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_00_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2Q0paQjNWOUVpYXg0eXI4d1FXK2J3ckt0cTdTU2k2NVBqYmkxOCtHOXljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2NTgyMzg1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzFFOTgyRjlCMDAzMjZCN0NBRDg3QjEwMDVBODNCQURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1OTIzNjI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNseHZXa3FBVEtxMTZ5M09uU1g4U1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODIwNWQ2MzAtMjY5My00OTk2LTk3YzQtMDAzZDAwOWQ2YTc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDE3LFxuICAgICAgMTc1LFxuICAgICAgMjMwLFxuICAgICAgMjA3LFxuICAgICAgOSxcbiAgICAgIDYwLFxuICAgICAgMCxcbiAgICAgIDg0LFxuICAgICAgMTYxLFxuICAgICAgNjYsXG4gICAgICA2NSxcbiAgICAgIDQ0LFxuICAgICAgMTQwLFxuICAgICAgNTcsXG4gICAgICAzNSxcbiAgICAgIDE5NyxcbiAgICAgIDI0LFxuICAgICAgMTYzLFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNTksXG4gICAgICAyMjUsXG4gICAgICA5MyxcbiAgICAgIDE1OCxcbiAgICAgIDIwNyxcbiAgICAgIDE0OCxcbiAgICAgIDE2NixcbiAgICAgIDkxLFxuICAgICAgOTcsXG4gICAgICAxMzEsXG4gICAgICAxMjcsXG4gICAgICAxNDksXG4gICAgICAxMjgsXG4gICAgICA5NSxcbiAgICAgIDUzLFxuICAgICAgNjMsXG4gICAgICAxMDAsXG4gICAgICA2NCxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxIWjMyREUxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNjU4MjM4NTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFTSElcIixcbiAgICBcImxpZFwiOiBcIjg5MjAyNTk1MjI1NzQ2OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1wdmNRRkVLS3Y0THNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxQ3JnTVB4Q0pvRmZpOHE0SFBBVHFldmphTU0zSlUxVlUvY0IyUkJoV21zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRCTURoVzdGZ2daT0dkTy93cTFTcHlwUnlTRDUxTmNxQS9PRGhBWUNZZitKcCtETlpCSHh3Z2VWZkxmZFAzeTBIMXpsV2ZBYjNwV1lLeVRyREhPb0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtJd2xWRXVsVUdtb1NVUnVBOERYc2V0WUg2SEg5ZzJLODQrQlhFekFLMW56VGFsL3MrVW4zUXpxajdBeVp2SHJXa1RFUnF3YVNpUVVmTlZMQ1VKd0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2NTgyMzg1Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkyMzYyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
