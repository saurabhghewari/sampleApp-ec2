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

### Update the local package list.

   Execute the following command as root:

    sudo apt-get update

### Install the PHP agent.

   Execute the following command to install directly from the New Relic repositories:

    sudo apt-get install newrelic-php5
	sudo newrelic-install install

### Configure your application name and New Relic license key.
    
   The installation process prompts you for your application name and license key. Your license key appears in the account information section of Account settings -> Rigth-Side Menu -> License Key.

### Restart your web server or FastCGI Process Manager (FPM).

   Wait a few minutes for your application to send data to New Relic. Then, check your app's performance in the New Relic UI.

    sudo service apache2 restart
