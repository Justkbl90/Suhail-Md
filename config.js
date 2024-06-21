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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRSZ1ZjaTFhU0lHdXV1M2t3YkY0ajJrbFQwcFZjeFpPUytQNUhWNTBOYzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllEWlpRZUFKUVh5NUhZdHRlNnA5ZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmI5ZjVjN2EtZGYwZS00MTBkLTlmYzgtYjkyOTM2YWY3YWJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDM4LFxuICAgICAgMjA5LFxuICAgICAgNzcsXG4gICAgICA3NCxcbiAgICAgIDEzNixcbiAgICAgIDE3NCxcbiAgICAgIDIsXG4gICAgICAxOTAsXG4gICAgICAxMjMsXG4gICAgICA2NCxcbiAgICAgIDY1LFxuICAgICAgMTA0LFxuICAgICAgMTQyLFxuICAgICAgODAsXG4gICAgICAyMzcsXG4gICAgICAxMzMsXG4gICAgICAyMDgsXG4gICAgICAxNDYsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMjM3LFxuICAgICAgNzksXG4gICAgICAxNzEsXG4gICAgICAxODIsXG4gICAgICAyMjgsXG4gICAgICAyMjUsXG4gICAgICAyMjQsXG4gICAgICAxMzksXG4gICAgICAyNDIsXG4gICAgICA5LFxuICAgICAgMjM3LFxuICAgICAgMjI3LFxuICAgICAgMjIzLFxuICAgICAgMTIwLFxuICAgICAgMjksXG4gICAgICAxNTEsXG4gICAgICA1NixcbiAgICAgIDE4NSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVlKV0RKNUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwODI0NzY3Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTYwMTg2OTE1NzE4ODk6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1hHKzRrQkVPMmMxN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhY3I4emdxR2tTZ1Z5Wk9hZHBzb1dPR0NmcVpPYUtKY1J0UzZUVkNJYng0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNUbkpJaHFyK0hmTGcxb0g3aTJxWkpTNisveDMrb0loLys3MXhtY2w4c1A3RWtIODFFWXRGTkRCUHpyUC9NcTJxS1U4VVhtUFNaeWJkalZkUUZ4Q0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkUzYkc3bEJDSEZCaE81MTgvRTNqTk1VeWpwSnNFQnNpTU5SL24yZnZTVUovZldXZnhyS3lCbEdnWTRsbUI0ekNUNjNQQ2hialZIOUhzZTNNTTk0d0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwODI0NzY3Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5OTY1OTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
