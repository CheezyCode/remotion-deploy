// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';
const path = require("path");
var directoryPath = process.env.PWD;


Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);
Config.Rendering.setFfmpegExecutable(`${directoryPath}/vendor/ffmpeg/`);