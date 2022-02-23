# NVM: Mac users only!

## If you have a Windows machine, STOP! You can find instructions for how to use a Windows Node version manager [here](https://github.com/smuiznieks/pccw10/blob/main/resources/nvm-windows.md).

<br/>

# NVM = Node Version Manager
`nvm` allows you to quickly install and use different versions of node via the command line.

<br/>

# Installing NVM
Follow the instructions in the nvm documentation, see more [here](https://github.com/nvm-sh/nvm#installing-and-updating) OR if you have Homebrew installed you can use the following command:
`brew install nvm`

More information on Homebrew can be found [here](https://brew.sh/). "It installs the stuff you need that Apple (or your Linux system) didn’t."

<br/>

# Using NVM

Scenario: I want to check my version of Node and use a different version for only SOME projects.

- Verify that nvm was installed correctly: `command -v nvm` (it should return `nvm`)
- Check what version of node you have installed: `node -v` 
- Let's say the command returns `17.1.0` but I want to work with the latest version of Node 16
- Execute the following command to see what versions of Node you have installed: `nvm ls`
- The output on my laptop looks like this because I have previously installed other versions of Node:
```
       v13.14.0
       v14.18.3
       v16.13.0
->      v17.1.0
```
- The arrow points to the version of Node that is being utilized in the folder I am working in
- If you want to see all the available versions of node you can execute the following command: `nvm ls-remote`
- I want to install the latest version of 15 on my laptop. I can do so by executing the following command: `nvm install 15.14.0` or just `nvm install 15` which will install the most recent version of 15
- Check to see what versions are installed now by executing `nvm ls`
- We can see that we have a new version installed and we have switched to this version
```
       v13.14.0
       v14.18.3
->     v15.14.0
       v16.13.0
        v17.1.0
```
- If I want to switch back to version 17, I can do so by executing the following command: `nvm use 17.1.0` or just `nvm use 17` which will use the latest version of 17 that I have on my machine
