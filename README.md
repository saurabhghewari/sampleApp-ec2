# PHP agent installation: Ubuntu and Debian

  This procedure is for installing New Relic's PHP agent using Ubuntu or Debian. For procedures to install the monitoring agent for New Relic Servers, see [Server monitor installation: Ubuntu and Debian.](https://docs.newrelic.com/docs/servers/new-relic-servers-linux/installation-configuration/servers-installation-ubuntu-debian)

## Use apt (recommended)
    
    Run the commands in this procedure as root.

### Configure the New Relic apt repository.

    echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | sudo tee /etc/apt/sources.list.d/newrelic.list

   This command adds deb http://apt.newrelic.com/debian/ newrelic non-free to /etc/apt/sources.list.d/newrelic.list. It creates the file if it does not exist.This step is only required once per system.

### Trust the New Relic GPG key.

   This step is required to register New Relic as an authenticated source where apt-get will look for new packages. To get the New Relic public apt-key from global key servers, run the following command as root:

    wget -O- https://download.newrelic.com/548C16BF.gpg | sudo apt-key add -
