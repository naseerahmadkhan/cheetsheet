!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~~~~~~Install  ZSH~~~~~~~~~~~~~~~~
https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH

sudo apt install zsh
zsh --version
chsh -s $(which zsh)   ## make zsh default shell



echo $SHELL
$SHELL --version

sudo apt update
sudo apt install curl


sudo apt-get update
sudo apt-get install git

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  ##installing oh-my-zsh

sudo apt install fonts-powerline

# ~/.zshrc 
ZSH_THEME="agnoster"




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~~~~~~ZSH Auto suggestions~~~~~~~~~~~~~~~~   
=> https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

Add the plugin to the list of plugins for Oh My Zsh to load (inside ~/.zshrc):

plugins=( 
    # other plugins...
    zsh-autosuggestions
)



#Restart
###########################################################################









!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~install nodejs~~~~~~~~~~~
tar -xf node-v12.18.3-linux-x64.tar.xz
mv node-v12.18.3-linux-x64 ~/.nodejs12.18.3

.bashrc .zshrc
export PATH="$HOME/.nodejs12.18.3/bin:$PATH"
node -v







tar -xf node-v20.13.1-linux-x64.tar.xz
mv node-v20.13.1-linux-x64 ~/.node-v20.13.1

.bashrc .zshrc
export PATH="$HOME/.node-v20.13.1/bin:$PATH"
node -v









*****************************************************************************
#installing through nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
close terminal and reopen
nvm install v12.18.3
nvm install v20.13.1




###########################################################################












!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~install jdk~~~~~~~~~~~





=>11.0.22******************FOR ALRAQEEM**********************

tar -xzf jdk-11.0.22_linux-x64_bin.tar.gz
sudo mv jdk-11.0.22 /usr/lib/jvm/

mkdir -p ~/.local/bin
ln -sf /usr/lib/jvm/jdk-11.0.22/bin/java ~/.local/bin/java\
ln -sf /usr/lib/jvm/jdk-11.0.22/bin/javac ~/.local/bin/javac

.bashrc .zshrc
export PATH="$HOME/.local/bin:$PATH"

java --version
javac --version





=>17.0.11***************FOR REACT NATIVE RECOMANDED********
tar -xzf jdk-17_linux-x64_bin.tar.gz
sudo mv jdk-17.0.11 /usr/lib/jvm/

mkdir -p ~/.local/bin
ln -sf /usr/lib/jvm/jdk-17.0.11/bin/java ~/.local/bin/java
ln -sf /usr/lib/jvm/jdk-17.0.11/bin/javac ~/.local/bin/javac

.bashrc .zshrc
export PATH="$HOME/.local/bin:$PATH"

java --version
javac --version




=>22.0.1*************************************************

tar -xzf jdk-22_linux-x64_bin.tar.gz
sudo mv jdk-22.0.1 /usr/lib/jvm/

mkdir -p ~/.local/bin\
ln -sf /usr/lib/jvm/jdk-22.0.1/bin/java ~/.local/bin/java\
ln -sf /usr/lib/jvm/jdk-22.0.1/bin/javac ~/.local/bin/javac

.bashrc .zshrc
export PATH="$HOME/.local/bin:$PATH"

java --version
javac --version


unlink ~/.local/bin/java
unlink ~/.local/bin/javac




********************************************************************


sudo apt install -y java-common
sudo dpkg -i jdk-11.0.11_linux-x64_bin.deb
sudo dpkg -i jdk-22_linux-x64_bin.deb

sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-11.0.11/bin/java 1
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-11.0.11/bin/javac 1

sudo update-alternatives --config java
sudo update-alternatives --config javac


#on different machines
update-java-alternatives --set java-11-openjdk-amd64

update-java-alternatives --set java-22-openjdk-amd64

sudo update-java-alternatives --set jdk-11.0.11

# remove java
sudo update-alternatives --remove java /usr/lib/jvm/jdk-11-oracle-x64/bin/java









###########################################################################




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Docker~~~~~~~~~~~
#0 uninstall previous
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

#1
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc





# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

#2
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

#3
docker -v

#4 Manage Docker as a non-root user

sudo groupadd docker
sudo usermod -aG docker $USER


#restart 

###########################################################################








!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Setup React Native~~~~~~~~~~~

Restore folders to
/opt/Android
/opt/android-studio
/opt/.android

ln -s /opt/Android ~/Android
ln -s /opt/.android ~/.android

.bashrc .zshrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools


cd /opt/android-studio/bin
./studio.sh

unlink ~/.FileORFolderName
###########################################################################





!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Setup genymotion~~~~~~~~~~~
# place genymotion-3.6.0-linux_x64.bin in home

./genymotion-3.6.0-linux_x64.bin

sudo chmod a+x genymotion-3.6.0-linux_x64.bin 
or
make executable by right click > properties


./genymotion-3.6.0-linux_x64.bin

###########################################################################











!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~open with administrator in file manager~~~~~~~~~~~
sudo apt install nautilus-admin
nautilus -q


###########################################################################















!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Deb Installer If not available~~~~~~~~~~~
sudo apt-get install gdebi -y


###########################################################################
















!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Open in VsCode in Context Menu~~~~~~~~~~~
wget -qO- https://raw.githubusercontent.com/harry-cpp/code-nautilus/master/install.sh | bash



###########################################################################
















!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Service Alraqeem~~~~~~~~~~~
docker pull mcr.microsoft.com/mssql/server



******************************************************************************************************************************************************************************
##Create Backup##
docker exec sqlserver2 /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'rUg38u@@' -Q "BACKUP DATABASE testDataDB TO DISK='/var/opt/mssql/backup/testDataDB.bak' WITH FORMAT" &&
docker cp sqlserver2:/var/opt/mssql/backup/testDataDB.bak ~/Desktop/
******************************************************************************************************************************************************************************


***************************************************************************************
##RESTORE DATABASE##

docker run -d -v sqlserver2-store:/var --name sqlserver2 -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=rUg38u@@' -p 1433:1433 mcr.microsoft.com/mssql/server &&
docker exec -it sqlserver2 bash -c "cd /var/opt/mssql && mkdir -p backup" &&
sudo chmod 777 ~/Desktop/testDataDB.bak &&
docker cp ~/Desktop/testDataDB.bak sqlserver2:/var/opt/mssql/backup/testDataDB.bak &&
docker exec -it sqlserver2 /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'rUg38u@@' -Q "RESTORE DATABASE testDataDB FROM DISK='/var/opt/mssql/backup/testDataDB.bak' WITH REPLACE"

***************************************************************************************



install azure data studio
//-----------------------------------
# Create Group Dev

# Create Connection
connection type => Microsoft SQL Server
Input Type = parameters
Server = localhost
Authentication type = SQL Login
User Name  = sa
password = rUg38u@@
Database: 
Encrypt: optional
Trust Server Certificate: True
Server Group: Dev

//------------------------------------
Create 
//------------------------------------

git clone 
npm i
**require clickapi to convert in js from ts in node_modules

mkdir /var/logs
sudo chmod 777 -R /var/logs

DEMO_VERIFY_CODE=112233 DEMO_MOBIILE_NO=0420783550 DB_HOST=172.17.0.1 DB_USER=sa DB_PWD=rUg38u@@ DB_NAME=testDataDB HTTP_ONLY=true APP_MODE=DEV npm start





##Backup image from container
docker start sqlserver
docker commit sqlserver naseer4uplus/alraqeem-sqlserver
docker login
docker push naseer4uplus/alraqeem-sqlserver:latest		##myusername/my_repository:latest


##Build image and run alraqeem service in container
docker build -t service-alraqeem -f Dockerfile.http.local .
docker run --name service-alraqeem -d -p 8080:3000 service-alraqeem
http://localhost:8080/status/abdulsiphonexs1


###########################################################################










!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Adminer~~~~~~~~~~~
docker pull adminer
docker network create adminer-network

docker run -d \
  --name adminer-container \
  --network adminer-network \
  -p 8080:8080 \
  adminer




  ## to run ifconfig command 
sudo apt install net-tools 
ifconfig

@look at docker0

##open url
@http://localhost:8080

Sql server
172.17.0.1
sa
rUg38u@@


###########################################################################









!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Setup GITLAB  and GITHUB ~~~~~~~~~~~

ssh-keygen -t rsa -b 4096 -C "naseer@edatasolutions.com.au"

Generating public/private rsa key pair.
Enter file in which to save the key (/home/naseer-khan/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/naseer-khan/.ssh/id_rsa
Your public key has been saved in /home/naseer-khan/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:OQUr4B16ThaZqRiu82V84tczr9MPBxH15esV2KHWsgI naseer@edatasolutions.com.au
The key's randomart image is:
+---[RSA 4096]----+
|    . o+. ...  ..|
|  .. ++o o . .=o.|
| . oo.* .Eo  =.+.|
|  o .= . o... o o|
| . .  . S .. . ..|
|o   = .  . .. . .|
| o + o . .. .  . |
|  . . . = .o     |
|     .  .*...    |
+----[SHA256]-----+


cat ~/.ssh/id_rsa.pub

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDM/n1UP/xxyw27byclHNJaWqOMdKgfhwuYaR3FvvUGOl8yHDDGNMY5uNAy6rVM41uZEz61RLV1PnOVyPAv0fia4oP4bkcz/5c9Q+462Zxt9ke3xzdbK9t69zhBo6cIEF6PPP0PB3FacP0rIE421b/fvgsnWLpHIA8ja/c+eMsU2M/AFHaZq7LgmSADndjVmuL0lKBPrE13F2JX2iXNMnwu4QeU6m7/1DLiomthM2g19D1xtCckDMAboZmJP7jaEHKIvF614b55sdhqkS4HSEp71uuxFZ78gx0NH2qUH0Lt5AcqfwiBFfTLDX1DBf/yt3pg60FA2rYlZv6E/GcYe1mGNzWB/rBn5uPP4gKzGdyieIhrcDw8qF/eTfgY4h136iWtTxEcYek+9KiVGHo51Q8w7IDZ4E653DAoH7rJvomwwhYXEiTukg6jJTLFDIzNKOyrw9V40Nqa4375KHE7eBpO5uW19eXBXTXpXk3/HpN4+8syTk6VagP/ih+37P2gl4q+1PNM2H9a6QCVhZ2qrZIqcCXEVDCRwOq93hWwbqV3wClX6q6RMFwrtxkglYmrfjPI6MtvTRrhbQyldFJrxpJ9gZ4fBnLWgGyAoLgaH/4xbCfWSTU60fr9G/K9UHNVqemWERmlX1PvA9CgItoLq9VVGxicN6GT0HL2Xh0RRGyZ5w== naseer@edatasolutions.com.au





Open > GitLab

ProfilePic -> Preferences - Add new key


git config --global user.email "naseer@edatasolutions.com.au"
git config --global user.name "Naseer Khan"


*************************************************************


  
  
Open > Github
https://github.com/settings/keys

> New SSH Key - > Paste






!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~install VLC~~~~~~~~~~~
 sudo apt install vlc

 ###########################################################################










 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~install AppImage~~~~~~~~~~~
sudo apt-get install fuse libfuse2
chmod +x name.AppImage

right click on file and run


###########################################################################








!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~create 'new text file' in context menu~~~~~~~~~~~
extract and paste in following path
~/Templates


###########################################################################








!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~No Desktop icons and context menu~~~~~~~~~~~
sudo apt-get install --reinstall ubuntu-desktop
sudo systemctl restart gdm3


###########################################################################






!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Image annotator~~~~~~~~~~~
sudo add-apt-repository ppa:ubuntuhandbook1/annotator         
sudo apt update
sudo apt install com.github.phase1geo.annotator


sudo add-apt-repository --remove ppa:ubuntuhandbook1/annotator
sudo apt remove --autoremove com.github.phase1geo.annotator




###########################################################################




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Mobile Alraqeem NEW BRANCH from MASTER~~~~~~~~~~~

# if new branch is created from MASTER
rm -rf node_modules
del package-lock.json

1. android > build.gradle

	buildToolsVersion = "29.0.3"
        minSdkVersion = 21
        compileSdkVersion = 33
        targetSdkVersion = 33
        ndkVersion = "20.1.5948944"
        
2. android > gradle.properties
MYAPP_UPLOAD_STORE_PASSWORD=Ahmadiyya@1908
MYAPP_UPLOAD_KEY_PASSWORD=Ahmadiyya@1908


3. android > app > build.gradle
#update which ever is latest

versionCode 4
versionName "4.0"       



npm i

npm install @react-navigation/native        
npm install react-native-screens react-native-safe-area-context




4. android > app >src > main >java >MainActivity.java


package com.mobilealraqeempersonal;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MobileAlraqeemPersonal";
  }

 @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  } 
}



5. app_module > appconstants.js
   BASE_URL: 'http://192.168.100.2:3000',


###########################################################################




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~~~~~~~~~Mobile Alraqeem Build apk aab~~~~~~~~~~~
cd android
./gradlew clean
./gradlew assembleRelease
./gradlew bundleRelease



