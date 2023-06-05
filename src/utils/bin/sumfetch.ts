import config from '../../../config.json';


const about = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
    <div style ="display: flex;width:80%"><div style ="flex:1;flex-basis: 65%">
 Summary 
-----------
 ${config.name} 
 ABOUT 
  As a Computer Engineering student at the University of Illinois at Urbana Champaign,
  I am deeply passionate about using technology to solve real-world problems at the 
  intersection of artificial intelligence, and distributed systems. My interests lie in 
  designing and developing intelligent systems that can collect, process, and analyze data 
  from connected devices to improve decision-making and drive innovation. With a strong background
  in problem-solving and a commitment to delivering high-quality results, I specialize in creating 
  elegant and efficient solutions for a variety of applications. My expertise in various 
  programming languages and frameworks enables me to adapt quickly to new technologies and 
  environments, ensuring that I can always provide the most effective solution. Whether 
  it's developing a new application from scratch or optimizing an existing one, I have the 
  skills and experience necessary to get the job done and exceed expectations.
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
-----------
   </div></div>                    
`;
  }
};

export default about;
