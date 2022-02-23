# NVM for Windows - Windows users only!

## If you have a Mac, STOP! You can find instructions for how to use a Mac Node version manager [here](www.google.com).

<br/>

# nvm-windows

NVM = Node Version Manager

The Microsoft/npm/Google recommended Node.js version manager for Windows.

<br/>

# Installing nvm-windows
Follow the instructions in the nvm-windows documentation, see more [here](https://github.com/coreybutler/nvm-windows#installation--upgrades).

After install, reinstalling global utilities (e.g. yarn) will have to be done for each installed version of node:

```
nvm use 14.0.0
npm install -g yarn
nvm use 12.0.1
npm install -g yarn
```

<br/>

# Using nvm-windows

### nvm-windows runs in an Admin shell. You'll need to start powershell or Command Prompt as Administrator to use nvm-windows

Here is a helpful list of commands: 
- `nvm current`: Display active version
- `nvm list`: List the node.js installations on your machine
- `nvm list available`: List the node.js versions available for download
- `nvm install <version>`: The version can be a specific version, "latest" for the latest current version, or "lts" for the most recent LTS version. 
- For example, if I want to install the latest version of Node 15, I would execute the following command: `nvm install 15 latest`
