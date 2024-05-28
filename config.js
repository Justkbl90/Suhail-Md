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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_53_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnpFaklFbXVDbk5DamM4VnpDNkdhZmVWN3JWL2FJejB3ZnNqRnFaTjZQTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzUzdGZaSGhTVGFOOW5MSVd0VHo5QVwiLFxuICBcInBob25lSWRcIjogXCI3MTVhMWIwZC02MDA2LTRhYmItOGY3MS05NDc4ZTM2YmJmMzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgMjQ5LFxuICAgICAgMTk4LFxuICAgICAgMjI0LFxuICAgICAgMTQ2LFxuICAgICAgMTQsXG4gICAgICAyMTQsXG4gICAgICAyMjksXG4gICAgICAxMDIsXG4gICAgICAyMDcsXG4gICAgICA4MCxcbiAgICAgIDE1MSxcbiAgICAgIDI0MCxcbiAgICAgIDIxNyxcbiAgICAgIDI0MCxcbiAgICAgIDE5NyxcbiAgICAgIDExMCxcbiAgICAgIDE4MSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxOTksXG4gICAgICA2MixcbiAgICAgIDE4NCxcbiAgICAgIDE1MixcbiAgICAgIDE1MyxcbiAgICAgIDI0MSxcbiAgICAgIDE4MixcbiAgICAgIDE4NCxcbiAgICAgIDE3MCxcbiAgICAgIDE5MyxcbiAgICAgIDIzNSxcbiAgICAgIDgyLFxuICAgICAgMTExLFxuICAgICAgMTA3LFxuICAgICAgNzgsXG4gICAgICAxMDIsXG4gICAgICAyMzIsXG4gICAgICAxODgsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFZISkI2VkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwODI0NzY3Nzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTYwMTg2OTE1NzE4ODk6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RHKzRrQkVOL2YxN0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhY3I4emdxR2tTZ1Z5Wk9hZHBzb1dPR0NmcVpPYUtKY1J0UzZUVkNJYng0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktJcHRtMWpCM1NuQTdCbCs1QUs3NkFMR0Q3ZVVGbkZrdGdzT2JKT3BSU0ZLd0syQ0tuQWM2dGs5MTN2ME1BTVNVNFV5OERSOUttTXU3TGk3RmxodUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZIaVltNk4vNGdyZmk1L2Jsc1NnTWQ4M29PcWtLWjZFNWJLdGtBdk5YNmF6Tkp1bmxOdzB3TlFURHY5QTZGcVpHR3R5QVlFOGhZWUlNUGJPRjgyYmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwODI0NzY3Nzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5MDgwMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxiRy5qc29uIjogIntcImtleURhdGFcIjpcIjliWGVnMnBFN0xneVFwbnQ0SWIyNTkvWWdIcUZBT3lWbVVJM2hpMnRpQWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg5MzM0MDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
