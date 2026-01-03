pipeline{
    agent any
    stages{
        stage('Clonning repo'){
            steps{
                echo 'Clonning repo.....'
               git branch: 'main', url: 'https://github.com/sanjayyy04/react-jenkins-project1.git'
            }
        }
        stage('Docker Build and Push'){
            steps{
                echo 'Building and Pushing Docker Image...'
                sh 'docker-compose up'
            }
        }
    }
}