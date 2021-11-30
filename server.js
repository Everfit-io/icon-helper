const fs = require("fs");
const config = require("./config");
const packageJson = require("./package.json");
// File destination.txt will be created or overwritten by default.
let rawdata = fs.readFileSync("./package.json");
let target = config.projectUrl;
let packageInfo = JSON.parse(rawdata);
let teamId = packageInfo.team;
let iconBasePath = packageInfo.iconBasePath;
if (!teamId) {
  throw new Error("No team id found");
}

let paths = [
  `res/mipmap-anydpi-v26/${iconBasePath}_${teamId}.xml`,
  `res/mipmap-mdpi/${iconBasePath}_${teamId}.png`,
  `res/mipmap-mdpi/${iconBasePath}_${teamId}_adaptive_back.png`,
  `res/mipmap-mdpi/${iconBasePath}_${teamId}_adaptive_fore.png`,
  `res/mipmap-hdpi/${iconBasePath}_${teamId}.png`,
  `res/mipmap-hdpi/${iconBasePath}_${teamId}_adaptive_back.png`,
  `res/mipmap-hdpi/${iconBasePath}_${teamId}_adaptive_fore.png`,
  `res/mipmap-xhdpi/${iconBasePath}_${teamId}.png`,
  `res/mipmap-xhdpi/${iconBasePath}_${teamId}_adaptive_back.png`,
  `res/mipmap-xhdpi/${iconBasePath}_${teamId}_adaptive_fore.png`,
  `res/mipmap-xxhdpi/${iconBasePath}_${teamId}.png`,
  `res/mipmap-xxhdpi/${iconBasePath}_${teamId}_adaptive_back.png`,
  `res/mipmap-xxhdpi/${iconBasePath}_${teamId}_adaptive_fore.png`,
  `res/mipmap-xxxhdpi/${iconBasePath}_${teamId}.png`,
  `res/mipmap-xxxhdpi/${iconBasePath}_${teamId}_adaptive_back.png`,
  `res/mipmap-xxxhdpi/${iconBasePath}_${teamId}_adaptive_fore.png`
];
paths.map(path => {
  fs.copyFileSync(
    `./${iconBasePath}_${teamId}/${path}`,
    `${target}/app/src/main/${path}`,
    fs.constants.COPYFILE_FICLONE
  );
  console.log(`${path} was copied`);
});

fs.rename(
  `./${iconBasePath}_${teamId}`,
  `./completed/${iconBasePath}_${teamId}`,
  function(err) {
    if (err) throw err;
    console.log("Moved to completed");
  }
);
