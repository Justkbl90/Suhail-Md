const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2330208247677";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_45_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVI4ZVFRTURveUZaTTl4VUp6Wnd0Z0JhSTV5cHVPa0N4QUh6cjNYQ25tWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDU0ODM3NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhCNUIyQjVBMUQwNDE5RUE2NDc4QzFBODMxMUQwNDU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA4OTE0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NTQ4Mzc0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTM3QjU3QjQ3Njg1QTE0M0ZCRkFGQkZCM0ZDNzhGMDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDg5MTUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBDNTZ3UkJuUWlpQXY1QWhOWjJhc1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGJmNzEwMDMtZTYxNy00MTgxLWI2MjYtMmVjZTY4MTVhY2Y3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDgsXG4gICAgICA1MyxcbiAgICAgIDk0LFxuICAgICAgMjM5LFxuICAgICAgNzgsXG4gICAgICAyMDgsXG4gICAgICA5NixcbiAgICAgIDE4LFxuICAgICAgMTkwLFxuICAgICAgMjQ1LFxuICAgICAgMTQ3LFxuICAgICAgMTk2LFxuICAgICAgMjQwLFxuICAgICAgODEsXG4gICAgICAxNTAsXG4gICAgICAxMjMsXG4gICAgICA5MSxcbiAgICAgIDE4NixcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICA3NixcbiAgICAgIDUxLFxuICAgICAgMTk1LFxuICAgICAgMjIxLFxuICAgICAgMTY3LFxuICAgICAgNTIsXG4gICAgICA3OCxcbiAgICAgIDE2MyxcbiAgICAgIDY2LFxuICAgICAgOTIsXG4gICAgICAyMzIsXG4gICAgICAyMjEsXG4gICAgICA2MSxcbiAgICAgIDE1OSxcbiAgICAgIDIzMCxcbiAgICAgIDc3LFxuICAgICAgMjMwLFxuICAgICAgMTA3LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUFISDQyTkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NTQ4Mzc0OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTM1MDU2NzY1MzQ3OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIsKuwqNHIeKImuKIhuKcqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3bXBoTVE5Ty9jc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVc5a2ZLZ2dmMEFKSzZIaXFZQS9kN2dXSmNhNjQ5ZVczN2I4SGxWYXRBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNnhWS3NQYkdPUkpBbE16ZTNOMDNvbTJKWHM3OFhSVEpqUmE3U3k2NkorT1JNSVB5a0NSbDBnWWFBbS9FM3dqaWY1aTRpbzRmZHNZWEE1Zlplc25BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOWHZQSG9OVGFNcHA4SU1zUEZNQVBVc2Rlb2RLb2lkQkpubXpFMzNGUFp2aVVUcTBrLzNBbXNCMm0raTdqbmIzVll0VHZlZUdVVjI3NE9nMnRseC9nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDU0ODM3NDk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwODkxNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkdy5qc29uIjogIntcImtleURhdGFcIjpcIlFlSmdscU9tcUorditmQXpzQWhJYmdrSzhtbXlSWHJIYlVaTkFtMDZua2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA0ODE1NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTA4OTE0NTU0MVwifSIKfQ=="  // PUT your SESSION_ID 
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
