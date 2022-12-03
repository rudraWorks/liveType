
# liveType
 
![liveType logo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIlQiNrsfEBRO6AIwVFWpm8ODUNLChVrudun6lt8dcnClUWI0inwLCivb_1rMc3W0m2ojMMdZ8IWcxpM7BfnOpnY8tYOpapxPAXTFogZJHNv68ineoj56i0Jtu13wniB04qQx-egQ5bdU67_pvlY7_w-YgoiB2WK65iKVbC_Wbd8wGdGu9FVJEcbaIdw/w640-h402/liveType.PNG)
## What is liveType?

liveType is a web application used for real-time typing competition between two players. Users can join room from any corner of the globe and compete as well as chat in real-time.
## Why liveType?
Many people use to test their typing speed on various wonderful platforms like monkeytype.com, typerush.com etc. But what they miss is real-time rivalry between their friends. Many studies have already proven that motivation to do a task comes when there is a win-reward system, so is the case with liveType, you feel overwhelmed beating your friend in a close compitition.

## Project Inception
The idea to build the project came to my mind when I was quite bored with binged typing on monkeytype.com. [my profile on monkeytype](https://monkeytype.com/profile/merudra).
The first commit was made on 27 th of November 2022 and it took three days to build the first substantial model.
## Vulnerabilities to be probed
Although socket.io uses long polling for maintaining constant communication between server and the client, it has been observed that connection may broke on delayed inactivity from client's end. Thus it is advised to refresh the window when this happens.