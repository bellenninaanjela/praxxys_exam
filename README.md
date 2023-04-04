# praxxys_exam

Installing and Creating Vue Project

1. Install Node.js from its official website 
		https://nodejs.org/en/download/.
2. Install the Ionic CLI, open terminal and run: 
		npm install -g @ionic/cli"
3. Switch to the desired directory with 
		cd "/path". 
4. Run "ionic start".
5. It will ask you to choose a framework, choose "Vue".
6. Provide the Porject Name, then the template. 
7. Switch to your project directory by running 
		cd "project_name"
8. Install project dependencies. 
		Run "npm install"


Installing Capacitor:
1. Run 
		"npm i @capacitor/core"
		"npm i -D @capacitor/cli"
2. To initialize the capacitor, run 
		"npx cap init"
3. Run "ionic build"
4. If you want to run it in IOS, you need to use a Mac OS and install additional 4 dependencies; Xcode, Xcode Command Line Tools, Homebrew, Cocoapods.
   If you want to run it in Android, you need to install Android Studio and Android SDK dependencies.
5. Install the Android and iOS platforms by running 
		"npm i @capacitor/android @capacitor/ios".
6. Then, run 
		"npx cap add android"
		"npx cap add ios"
7. To open the Andriod Studio to run the app, 
		Run "npx cap open android" 
8. In Android Studio, wait for the project to be fully built and initialized. Once it's done, open to "Tools", select "AVD Manager". 
	This will allow you to create a virtual emulator, which allows you to preview the project. 
9. Launch the emulator.
10. Then click the Run button to launch the app. 
	Then, wait for the app to open.

