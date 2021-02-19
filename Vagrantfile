Vagrant::Config.run do |config|
  config.vm.box = "ubuntu/focal64"

  config.vm.forward_port 3000, 3000

  config.vm.share_folder "apps", "/home/vagrant/apps", "apps", SharedFoldersEnableSymlinksCreate: false  

  config.vm.provision :shell, :inline => "sudo apt-get update && sudo apt-get -y upgrade"
  config.vm.provision :shell, :inline => "sudo apt-get install -y build-essential libssl-dev --no-install-recommends"
  config.vm.provision :shell, :inline => "curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -"
  config.vm.provision :shell, :inline => "sudo apt-get update"
  config.vm.provision :shell, :inline => "sudo apt-get install -y nodejs"
  config.vm.provision :shell, :inline => "sudo npm install -g nodemon"
  config.vm.provision :shell, :inline => "sudo npm install -g ts-node typescript"
  config.vm.provision :shell, :inline => "sudo npm install -g webpack webpack-cli"
  config.vm.provision :shell, :inline => "sudo npm install -g yarn"
  config.vm.provision :shell, :inline => "sudo apt install -y redis-server"
  config.vm.provision :shell, :inline => "wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -"
  config.vm.provision :shell, :inline => "sudo apt install -y gnupg"
  config.vm.provision :shell, :inline => "echo \"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list"
  config.vm.provision :shell, :inline => "sudo apt-get update"
  config.vm.provision :shell, :inline => "sudo apt-get install -y mongodb-org"
  config.vm.provision :shell, :inline => "sudo systemctl enable mongod"
  config.vm.provision :shell, :inline => "sudo systemctl start mongod"
end
