
# liveType
 
![liveType logo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIlQiNrsfEBRO6AIwVFWpm8ODUNLChVrudun6lt8dcnClUWI0inwLCivb_1rMc3W0m2ojMMdZ8IWcxpM7BfnOpnY8tYOpapxPAXTFogZJHNv68ineoj56i0Jtu13wniB04qQx-egQ5bdU67_pvlY7_w-YgoiB2WK65iKVbC_Wbd8wGdGu9FVJEcbaIdw/w640-h402/liveType.PNG)
## What is liveType?
A web application called liveType is used to compete in real-time typing matches between two players. Users can join the room from anywhere in the world, compete, and communicate in real time.
## Why liveType?
Many people use fantastic sites like monkeytype.com, typerush.com, etc. to gauge their typing speed. However, they are missing out on their friends' in-person competition. Numerous studies have already shown that a win-reward system, like as the one in liveType, makes it easier to complete tasks since you feel accomplished after defeating a friend in a tight competition.

## Project Inception
When I was becoming very bored from binge-typing on monkeytype.com, the inspiration to construct the project came to me.
The first commit was made on November 27, 2022, and the first large model took three days to develop.[my profile on monkeytype](https://monkeytype.com/profile/merudra).

## Vulnerabilities to be probed
Despite the fact that socket.io employs extended polling to maintain constant contact between the server and the client, it has been noted that connections can break down as a result of a client's delayed inactivity. Therefore, when this occurs, it is advisable to refresh the window.
