pipeline {
 agent any
     stages {
      stage('Build') {
         steps {
            // Get code from a GitHub repository
            git 'https://github.com/sushmab123/INGFAV_UI.git'
            // Run npm on a Unix agent.
				sh 'npm install'
				sh 'npm run build'
                }
                    }
	 stage('Release') 
	 {
         steps {
            // deploy to tomcat
			sh 'cd $WORKSPACE;chmod 777 build;sudo cp -r build /opt/apache-tomcat-9.0.30/webapps'
            
                }
     }
            }
}
