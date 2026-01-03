pipeline{
    agent any
    stages{
        stage('Clonning repo'){
            steps{
                echo 'Clonning repo....'
               git branch: 'main', url: 'https://github.com/sanjayyy04/react-jenkins-project1.git'
            }
        }
        stage('Docker Build and Push'){
            steps{
                echo 'Building and Pushing Docker Image...'
                sh '''
                    docker stop react-jenkins-project1-container || true
                    docker rm react-jenkins-project1-container || true
                    docker rmi react-jenkins-project1-image || true

                    docker build -t react-jenkins-project1-image .

                    // running container
                    docker run -d -p 8080:80 --name react-jenkins-project1-container react-jenkins-project1-image
                '''
            }
        }
    }
}