# CS260 Notes

## Git/Github
[Github](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md)

## Markdown Examples
[Markdown Knowledge Base](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md)

#### Examples
> You got ***this*** 
* Ya you _do_
+ Be **bold**
1. x<sub>2</sub>
 - <sup>2</sup>x
+ ~nevermind~

- [] be kind
- [x] learn markdown :+1:

![Christ](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb5%2Ff9%2F28%2Fb5f928a3a1f7bd83f5e01557c0ccb547.jpg&f=1&nofb=1&ipt=f8b3c823f5d5e365e8c34019db15b1ac4d8072f6b3bae92492d973dadf375375&ipo=images)

## Deploying Simon Code
- SIMON
'''
sudo ./deployFiles.sh -k ../../key/prod-key.cer -h simon.saveduck.click -s simon
chmod +x deployFiles.sh
./deployFiles.sh -k ../../key/prod-key.cer -h simon.saveduck.click -s simon 
'''

- Simon Https / Back End
'''
sudo ./deployFiles.sh -k ../../key/prod-key.cer -h simon.saveduck.click -s simon
chmod +x deployService.sh
./deployService.sh -k ../../key/prod-key.cer -h simon.saveduck.click -s simon 
'''

- STARTUP
'''
sudo ./deployFiles.sh -k ~/key/prod-key.cer -h startup.saveduck.click -s startup
chmod +x deployFiles.sh
./deployFiles.sh -k ../key/prod-key.cer -h startup.saveduck.click -s startup
'''

- Startup Https / Back End
'''
sudo ./deployFiles.sh -k ../../key/prod-key.cer -h startup.saveduck.click -s startup
chmod +x deployService.sh
./deployService.sh -k ../../key/prod-key.cer -h startup.saveduck.click -s startup 
'''

## Other Notes
[other page](startup/notes2.md)