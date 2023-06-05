// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';


function startProgressBar(duration: number) {
  const progressBar = document.querySelector('.progress') as HTMLElement;
  const progressStep = 100 / duration;
  let progress = 0;

  const intervalId = setInterval(() => {
    progress += progressStep;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(intervalId);
    }
  }, 1000);
}


// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'about' to display summary.
`;
};

// // Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
// export const about = async (args: string[]): Promise<string> => {
//   return `Hi, My name is ${config.name}. 
// Welcome to my portfolio!
// More about me:
// 'sumfetch' - short summary.
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  var curr_date = new Date();
  var future_date = new Date('2023-12-25');
  var total_date = 365 / 10 ;
  var in_progress = (future_date.getTime()-curr_date.getTime())/(60 * 60 * 10000 * 24);
  var diff = total_date - in_progress;
  let str = new String('[');
  for(let i = 0;i<total_date;i++){
    if(i <= diff){
      str += '=';
    }else{
      str += '/';
    }
  }
  str+=']'
  return `Feature in progress :/ \nTime until completion: ${in_progress*10} days\n${str}`;
};


export const cd = async (args: string[]): Promise<string> => {
  var curr_date = new Date();
  var future_date = new Date('2024-3-14');
  var total_date = 365 / 10 ;
  var in_progress = (future_date.getTime()-curr_date.getTime())/(60 * 60 * 10000 * 24);
  var diff = total_date - in_progress;
  let str = new String('[');
  for(let i = 0;i<total_date;i++){
    if(i <= diff){
      str += '=';
    }else{
      str += '/';
    }
  }
  str+=']'
  return `Feature in progress :/ \nTime until completion: ${in_progress*10} days\n${str}`;
};



export const date = async (args: string[]): Promise<string> => {
  
  return new Date().toString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const topsong = async (args: string[]): Promise<string> => {
//   const songs: string[] = [];

//   // Add the desired songs to the array with href links
//   songs.push(`<a href="https://www.youtube.com/watch?v=Aq4CccUx3-Q">Mexico En La Piel</a>`);


//   const songList = songs.slice(0, 5).join('\n'); // Join the first 5 songs with line breaks

//   return `${songList}`;
// };




export const vim = async (args: string[]): Promise<string> => {
  var curr_date = new Date();
  var new_date_1 = new Date(curr_date.getTime()-(1 * 60 * 60 * 1000 * 24 * Math.random()));
  var new_date_2 = new Date(curr_date.getTime()-(2 * 60 * 60 * 1000 * 24 * Math.random()));
  var new_date_3 = new Date(curr_date.getTime()-(3 * 60 * 60 * 1000 * 24 * Math.random()));
  var new_date_4 = new Date(curr_date.getTime()-(4 * 60 * 60 * 1000 * 24 * Math.random()));
  var new_date_5 = new Date(curr_date.getTime()-(7 * 60 * 60 * 1000 * 24 * Math.random()));
  return `
    ---------------------------------------------------------------------------------------------------
    | Google Search History                                                                           |
    ---------------------------------------------------------------------------------------------------
    |              Query                  |                           Date                            |
    ---------------------------------------------------------------------------------------------------
    | What is the proper way to exit vim? | ${new_date_5.toString()} |
    | How do you exit vim?                | ${new_date_4.toString()} |
    | How can I quit vim?                 | ${new_date_3.toString()} |
    | How to terminate vim?               | ${new_date_2.toString()} | 
    | Please let me leave vim...          | ${new_date_1.toString()} |        
    ---------------------------------------------------------------------------------------------------
    `;
};

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); 
  return `sorry...`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  
  ██╗      ██████╗ ██████╗ ███████╗███╗   ██╗███████╗ ██████╗     ██████╗ ██╗   ██╗     ██╗ █████╗ ██╗     ██╗██╗         ███████╗██╗██╗    ██╗   ██╗ █████╗ 
  ██║     ██╔═══██╗██╔══██╗██╔════╝████╗  ██║╚══███╔╝██╔═══██╗    ██╔══██╗██║   ██║     ██║██╔══██╗██║     ██║██║         ██╔════╝██║██║    ██║   ██║██╔══██╗
  ██║     ██║   ██║██████╔╝█████╗  ██╔██╗ ██║  ███╔╝ ██║   ██║    ██████╔╝██║   ██║     ██║███████║██║     ██║██║         ███████╗██║██║    ██║   ██║███████║
  ██║     ██║   ██║██╔══██╗██╔══╝  ██║╚██╗██║ ███╔╝  ██║   ██║    ██╔══██╗██║   ██║██   ██║██╔══██║██║     ██║██║         ╚════██║██║██║    ╚██╗ ██╔╝██╔══██║
  ███████╗╚██████╔╝██║  ██║███████╗██║ ╚████║███████╗╚██████╔╝    ██████╔╝╚██████╔╝╚█████╔╝██║  ██║███████╗██║███████╗    ███████║██║███████╗╚████╔╝ ██║  ██║
  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝ ╚═════╝     ╚═════╝  ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝    ╚══════╝╚═╝╚══════╝ ╚═══╝  ╚═╝  ╚═╝
                                                                                                                                                             
   ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗   ██╗████████╗███████╗██████╗     ███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗                  
  ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║   ██║╚══██╔══╝██╔════╝██╔══██╗    ██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗                 
  ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║   ██║   █████╗  ██████╔╝    █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝                 
  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║   ██║   ██╔══╝  ██╔══██╗    ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗                 
  ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝   ██║   ███████╗██║  ██║    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║                 
   ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝                 

   

Type 'help' to see the list of available commands.
Type 'about' to display summary.

`;
};
// export const make_coffee =(args?: string[]): string => {
//   const sleep = (ms) => new Promise(r => setTimeout(r, ms));

//   await sleep(4000);
//   return `
  
//   `
// }



export const pl = async (args?: string[]): Promise<string> => {
  return `Programming Languages:
  - Python
    - Proficiency: Advanced
    - Utilized In: Machine Learning, Database Management Systems, IoT, Web Development
    - Projects: 
      - <a href="https://github.com/zobuj/NER-Tagger" target="_blank">Named Entity Recognition Tagger + Chrome Extension w/ Django Backend</a>
      - <a href="https://github.com/zobuj/ECE479_code" target="_blank">Intelligent IoT Home Security System</a>
      - AWS Data Migration
      - Better Spotify (In Progress)
    - Frameworks: PySpark, Tensorflow/TFlite, PyTorch
  - C/C++
    - Proficiency: Advanced
    - Utilized In: Parallel Algorithms, GPU Programming, Data Structures, Embedded Systems
    - Projects: 
      - <a href="https://github.com/zobuj/OpenFlights-CS225-FinalProject" target="_blank">Flight Path Simulator</a>
      - <a href="https://github.com/zobuj/CS225/tree/main/mp_mosaics" target="_blank">Nearest Neighbor Image Mosaic</a>
      - <a href="https://github.com/zobuj/CS225/tree/main/mp_mazes">Maze Creator/Solver</a>
      - GPU Optimization of Convolutional Layers in Neural Network
  `;
};

export const whatido = async (args?: string[]): Promise<string> => {
  return `I specialize in developing efficient, effective code and finding optimal solutions to complex problems.`;
};